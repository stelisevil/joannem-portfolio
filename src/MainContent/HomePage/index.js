const HomePage = ({ recentWork }) => (
  <>
    <div className="text-left w-full lg:w-2/3 mb-12">
      <div className="mb-2 text-4xl font-bold">Hi, I’m Joanne.</div>
      <div className="mb-7 text-4xl font-bold">
        I’m a digital designer who loves to create new ideas.
      </div>
      <div className="my-2">
        With over ten years’ professional experience, my skills span pretty much
        every element of digital design, from UX and UI, to video editing for
        social media, to HTML/CSS, to graphic design and art direction. Not
        knowing how to do something isn’t a barrier – I’m a fast learner, and my
        knowledge has constantly evolved throughout my career.
      </div>
    </div>
    <div className="mb-12">
      <p className="font-bold mb-4 text-xl">Recent work...</p>
      <div className="flex md:flex-row flex-col">
        <img
          src={recentWork.leftImage.url}
          alt="recent work images"
          className="h-auto md:w-1/3 w-full"
        />
        <img
          src={recentWork.centralImage.url}
          alt="recent work images"
          className="h-auto md:w-1/3 w-full md:px-2 py-2 md:py-0"
        />
        <img
          src={recentWork.rightImage.url}
          alt="recent work images"
          className="h-auto md:w-1/3 w-full"
        />
      </div>
    </div>
  </>
);

export default HomePage;
