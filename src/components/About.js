export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv10Sp9RrbdZsG7DqfTx7-qRNQbb5fwpuDUQDmYknvdx_9vva_zYz1Os2y0eUV_g7kk9_Rp1j5KWAE1ZTRjBDr6M6rJ_epRJga48seks5cf09bBBzxlM_qVh9Nr0d_boO10joNXYMdLGZUn-YgLMjD75DHAVXRumcOVN8c3Y7RFviP7mb-dIzxp6wEcZjRG2c9cOmXYfN3ujUYg5YtJbhVtzHsYmuILSP6f3vDjWS0So6CVJkkcePlwuM_fyBBcXsPpzkPjBg0kmI" 
              alt="Developer Profile" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-xl glow-accent">
            <p className="text-4xl font-bold text-white font-space-grotesk">5+</p>
            <p className="text-on-surface-variant text-sm">Years of<br/>Experience</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-primary"></div>
            <h2 className="font-h2 text-4xl text-white">About Me</h2>
          </div>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            I am a software architect driven by the intersection of engineering excellence and aesthetic precision. My work focuses on building robust backend infrastructures while ensuring the user interface remains fluid and intuitive.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            From distributed ledgers to real-time data visualizations, I tackle complex technical challenges with a clean-code first approach. I believe that every line of code should serve a purpose and every pixel should have a reason to exist.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="text-white font-bold mb-1">Location</h4>
              <p className="text-on-surface-variant">San Francisco, CA</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Email</h4>
              <p className="text-on-surface-variant">hello@devportfolio.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
