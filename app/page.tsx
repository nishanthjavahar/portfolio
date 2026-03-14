export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <section className="mb-20">
        <h1 className="text-5xl font-bold">Sree Nishanth J</h1>
        <p className="mt-4 text-xl">
          Computer Science Engineering Student
        </p>
        <p className="mt-2 text-gray-400">
          Backend Developer | Python | SQL | Web Development
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-gray-300 max-w-xl">
          I am a Computer Science undergraduate at M.S. Ramaiah University
          of Applied Sciences. I enjoy building practical software systems
          and learning new technologies. My interests include backend
          development, databases and real world software solutions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-300">
          <li>Python</li>
          <li>Java</li>
          <li>C / C++</li>
          <li>SQL</li>
          <li>HTML / CSS / JavaScript</li>
          <li>PostgreSQL / MySQL</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold">BBP Education Portal https://bbp-education.onrender.com/ </h3>
          <p className="text-gray-400 mt-2">
            Prototype platform to manage educational activities and
            internship coordination for Bannerughatta Biological Park.
          </p>
        </div>
      </section>
      <section className="mt-12">
  <h2 className="text-2xl font-semibold mb-4">Beyond Code</h2>

  <div className="flex items-center gap-6 bg-gray-100 p-6 rounded-2xl">

    {/* Elephant icon */}
    <div className="w-16 h-16 bg-green-200 rounded-[30%] flex items-center justify-center">
      🐘
    </div>

    {/* Leopard icon */}
    <div className="w-16 h-16 bg-yellow-200 rounded-[35%] flex items-center justify-center">
      🐆
    </div>

    <p className="text-gray-700 max-w-md">
      Wildlife enthusiast passionate about conservation and nature education.
      I volunteer at Bannerghatta Biological Park where I help conduct wildlife
      awareness programs and guide visitors about biodiversity.
    </p>

  </div>
</section>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: nishanthjavahar.14@gmail.com</p>
        <p>GitHub: github.com/nishanthjavahar</p>
        <p>LinkedIn: linkedin.com/in/nishanthjavahar</p>
      </section>

    </main>
  );
}