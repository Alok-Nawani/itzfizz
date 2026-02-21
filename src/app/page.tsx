import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#050505] overflow-hidden">
      <Hero />

      {/* Content below the fold to demonstrate scroll */}
      <div className="h-[150vh] w-full flex flex-col items-center pt-32 pb-[20vh] bg-gradient-to-b from-[#050505] to-[#121212] text-white z-10 relative px-6 border-t border-white/5">
        <div className="max-w-4xl text-center flex flex-col items-center">
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 uppercase tracking-widest text-xs font-semibold text-zinc-400">
            Next Generation
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            Aerodynamics & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Future Design
            </span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Engineered for pure speed and unprecedented control. Every curve is optimized to slice through the air, creating downforce and maintaining stability at extreme speeds. Welcome to the future of high-performance driving.
          </p>
        </div>

        {/* Decorative Grid / Layout for additional content spacing */}
        <div className="w-full max-w-6xl mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Aerodynamic Drag", value: "0.21 Cd", desc: "Minimal resistance" },
            { title: "Top Speed", value: "250+ mph", desc: "Track-ready performance" },
            { title: "Battery Tech", value: "Solid-State", desc: "Limitless potential" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-8 backdrop-blur-md flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:bg-white/10 group">
              <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-semibold mb-4">{item.title}</h3>
              <span className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform">{item.value}</span>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[50vh] w-full flex items-center justify-center bg-black text-white relative border-t border-white/10">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-zinc-800">
          The End
        </h2>
      </div>
    </main>
  );
}
