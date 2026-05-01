export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[716px] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7VGLmFSu4VtOIwhgO5QWr36IB4s5DJuxLDOIRG_EpmqWovqKk0PvFhFDkmlZasmCF4RDuzqnNb_Kg5m90OX3aTu83uzl78RmmKi1MSBFFK4kCpvztvcnBL9k96voAqNcVh5LUCuUWYO9AMWTf7LWgcS8wElU0S6HWf1sdNaHkYilgPJoyAkLMOq55tu27VJbnaztM28-zK0Pt-Zh20qvlqyaAmdNxnY5BJsHurilnJ8KPKd-V7Akbe4H-PLy0pllAXv6WDGZvRnE" 
          alt="Technical Background"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <h1 className="font-h1 text-6xl md:text-8xl text-white mb-6 leading-tight max-w-4xl">
          Crafting <span className="text-primary">Next-Gen</span> Digital Experiences
        </h1>
        <p className="font-body-lg text-on-surface-variant text-xl max-w-2xl mb-12">
          Full-stack developer specializing in high-performance architectures, distributed systems, and premium UI/UX design.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
            View Projects
          </a>
          <a href="#contact" className="border border-outline px-8 py-4 rounded-full font-bold text-lg text-white hover:bg-white/5 transition-all">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
