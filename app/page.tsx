export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section id="hero" className="font-bold text-center w-screen flex flex-col justify-around items-center">
        <h1 className="text-gray-300 p-20 text-6xl md:p-40 md:text-8xl">
          Find the <span className="text-cyan-500">ACE</span> in you
          <span className="text-cyan-500">.</span>
        </h1>
        <p className="px-6 md:px-0 md:text-2xl max-w-screen-md text-gray-300 font-semibold">
          At ACE, the Computer Science Society of <span className="text-cyan-500">Sri Guru Gobind Singh College of Commerce</span>, we are a
          collective of passionate individuals driven by a shared love for all
          things tech. We empower students to delve deeper into the world of
          computer science.
        </p>
      </section>
    </main>
  );
}
