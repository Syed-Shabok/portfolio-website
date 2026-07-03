import { Resend } from 'resend';

// Helper to escape HTML tags to prevent HTML injection in the email
function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return Response.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.trim()) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 });
    }
    if (!subject || typeof subject !== 'string' || !subject.trim()) {
      return Response.json({ error: 'Subject is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    // 2. Environment Variables Check
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured.');
      return Response.json({ error: 'Mail service configuration error' }, { status: 500 });
    }
    if (!recipient) {
      console.error('CONTACT_EMAIL is not configured.');
      return Response.json({ error: 'Mail service configuration error' }, { status: 500 });
    }

    // 3. Instantiate Resend
    const resend = new Resend(apiKey);

    // 4. Sanitize input to prevent HTML injection in emails
    const cleanName = escapeHtml(name.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanSubject = escapeHtml(subject.trim());
    const cleanMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>');

    // 5. Send email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: recipient,
      replyTo: cleanEmail,
      subject: `[Portfolio Contact] ${cleanSubject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff; color: #333333; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #f3f4f6; padding-bottom: 15px; margin-top: 0; font-size: 24px; font-weight: 700;">
            New Contact Form Message
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 100px;">Name:</td>
              <td style="padding: 8px 0; color: #1f2937;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
              <td style="padding: 8px 0; color: #1f2937;">
                <a href="mailto:${cleanEmail}" style="color: #4f46e5; text-decoration: none;">${cleanEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Subject:</td>
              <td style="padding: 8px 0; color: #1f2937;">${cleanSubject}</td>
            </tr>
          </table>
          <div style="margin-top: 25px; padding: 20px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #4f46e5;">
            <p style="margin: 0; font-weight: bold; color: #4b5563; margin-bottom: 10px;">Message:</p>
            <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</p>
          </div>
          <div style="margin-top: 30px; border-top: 1px solid #f3f4f6; padding-top: 15px; font-size: 12px; color: #9ca3af; text-align: center;">
            This email was sent from your portfolio contact form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error('Unhandled server error in contact API:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
