const Hero = () => {
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      <img
        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        loading="lazy"
        alt="Hero Image"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary-200 mix-blend-multiply"></div>
      <div className="relative min-w-[70%] flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-primary-200 sm:text-xl md:mb-8">
          Very proud to introduce
        </p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          Revolutionary way to charity donation using blockchain
        </h1>
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-block rounded-lg bg-primary-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base"
          >
            Start now
          </a>

          <a
            href="#"
            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-primary-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Take tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
