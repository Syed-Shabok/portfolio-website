export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 pb-section-gap">
      <div className="glass-panel p-12 rounded-2xl glow-accent border-dashed border-2 border-primary/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-h2 text-3xl md:text-5xl text-white mb-6">Let's build something <span className="text-primary">extraordinary</span>.</h2>
            <p className="text-on-surface-variant text-lg mb-8">
              Available for freelance collaborations and architectural consulting. Currently seeking opportunities in high-performance computing and Web3.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>hello@devportfolio.com</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-surface-container border border-outline-variant p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" />
              <input type="email" placeholder="Email" className="bg-surface-container border border-outline-variant p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-surface-container border border-outline-variant p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors" />
            <textarea placeholder="Message" rows="4" className="w-full bg-surface-container border border-outline-variant p-4 rounded-xl text-white focus:outline-none focus:border-primary transition-colors"></textarea>
            <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
