import Image from "next/image";
import delivery from "../public/assets/projects/DeliveryAppRER.png";
import event from "../public/assets/projects/NDEApp.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-8 bg-[#E5ECEC]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" flex justify-center font-bold text-xl tracking-widest uppercase text-red-950">
          Projects
        </p>
        <div className="flex  max-w-[900px] mx-auto justify-center items-center w-full border border-black-700">
          <div className="relative md:flex  max-w-[70%] m-auto items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hove:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl" src={event} alt="/" />
            <div className="pl-4 pt-5">
              <p>
                Created a master app for events for both IOS and Android
                platforms.
              </p>
              <p>Google & Facebook Signup/Signin.</p>
              <p>Push Notifications</p>
              <p>Profile sharing via QR Code</p>
            </div>
          </div>
        </div>
        <div className="flex  max-w-[900px] mx-auto justify-center items-center w-full border border-black-700">
          <div className="relative md:flex  max-w-[70%] m-auto items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hove:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl"
              src={delivery}
              alt="/"
              style={{ height: 499, width: 230 }}
            />
            <div className="pl-4 pt-5">
              <p>
                Android app for delivery agents to keep track of their daily
                orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
