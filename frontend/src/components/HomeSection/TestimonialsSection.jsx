const TestimonialsSection = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-primary-700 md:mb-12 lg:text-3xl">
          What others say about us
        </h2>

        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {/* Quote */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              “This is a section of some simple filler text, also known as
              placeholder text.”
            </div>

            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                  loading="lazy"
                  alt="Photo by Radu Florin"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                  John McCulling
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  CEO / Datadrift
                </p>
              </div>
            </div>
          </div>
          {/* Quote */}

          {/* ... Repeat the above structure for the other quotes ... */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
