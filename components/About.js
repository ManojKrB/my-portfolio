const About = () => {
  return (
    <div id="about" className="w-full px-2 items-center py-16 justify-center">
      <div className="max-w-[1240px] m-auto md:grid-cols-3 gap-8">
        <div className=" col-span-2 max-w-[70%] m-auto">
          <p className="font-bold flex justify-center my-6 uppercase text-xl tracking-widest text-red-950">
            About
          </p>
          <p className="py-2 text-gray-600">IIT(BHU) graduate.</p>
          <p className="py-2 text-gray-600">
            As a Senior Software Engineer in Apollo 24/7 (QuilinX), l developed
            Glucose Insights part under Health Records section in Apollo 24/7
            mobile application. I created custom made Stacked bar graph, Bar
            graph and Plot graph to visually represent user{"'"}s blood glucose
            levels.{" "}
          </p>
          <p className="py-2 text-gray-600">
            Working as a Frontend developer and only React Native developer in
            SaaScraft, I built the entire UI/UX and front end development for
            event app from scratch. Published two apps (NDE 2022, APSICON{"'"}
            22) to Google Play Store and Apple App Store. I developed Admin
            dashboard for the Events app
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
