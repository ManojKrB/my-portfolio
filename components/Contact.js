import { LinkedIn, Github, GMail, User } from "../public/assets/icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-2 py-16">
      <div className="max-w-[1240px] m-auto px-2 py-4 w-full">
        <p className="text-xl tracking-widest uppercase text-red-950 font-bold flex justify-center">
          Contact
        </p>
      </div>
      <div className="flex flex-col  max-w-[900px] mx-auto justify-center items-center py-4 ">
        <div className="relative flex items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hove:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
          <div>
            <h2 className="py-2 text-3xl sm:text-4xl max-w-[70%] m-auto">
              Manoj Kumar Bayyarapu
            </h2>
            <p className="max-w-[70%] m-auto">Frontend Developer</p>
            <p className="py-4 max-w-[70%] m-auto">
              I am avaiable for full-time position. Contact me
            </p>
            <p className="py-3 max-w-[70%] m-auto text-blue-700">
              Email: manoj.bayyarapu@gmail.com
            </p>
            <div>
              {/* <p className="uppercase pt-8 font-bold max-w-[70%] m-auto">
                Connect with me
              </p> */}
              <div className="flex flex-wrap items-center justify-between max-w-[200px] m-auto py-4">
                <Link
                  href="https://www.linkedin.com/in/manoj-kumar-bayyarapu-807a58175"
                  target="_blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer"
                >
                  <LinkedIn />
                </Link>
                {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer">
              <Github />
            </div> */}
                {/* <Link
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJnMbfslnMqxZgClWCsztzQqgZnLKDDlbpPHQwvlMFxblSxzJdhbzPWNprqMbhpGRsDXV"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer"
            >
              <GMail />
            </Link> */}
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1F9E3GTqT6_FLcJNZ3lQ8YmGk5PPIl1tr/view?usp=sharing"
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer"
                >
                  <User />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
