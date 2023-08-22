import Article from "./Article";

const EventSection = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="heading2">Our Events</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* text - end */}

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {/* feature - start */}
          <Article />
          <Article />
          <Article />
          {/* feature - end */}

          {/* Repeat the structure for other features */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
