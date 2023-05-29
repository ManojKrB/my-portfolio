import Image from "next/image";
import delivery from "../public/assets/projects/deliveryApp.png";
import event from "../public/assets/projects/eventApp.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-8 bg-[#E5ECEC]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" flex justify-center font-bold text-xl tracking-widest uppercase text-red-950">
          Projects
        </p>
        <div className="flex  max-w-[900px] mx-auto justify-center items-center w-full border border-black-700">
          <div className="relative flex flex-col max-w-[70%] m-auto items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hove:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl" src={event} alt="/" />
            <p>Created a master app for events. </p>
          </div>
        </div>
        <div className="flex  max-w-[900px] mx-auto justify-center items-center w-full border border-black-700">
          <div className="relative flex flex-col max-w-[70%] m-auto  items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hove:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl" src={delivery} alt="/" />
            <p>
              Created an Android App for delivery partners to keep track of
              their individual orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;