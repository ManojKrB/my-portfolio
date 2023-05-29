import Link from "next/link";
import { LinkedIn, Github, GMail, User } from "../public/assets/icons";

const Body = () => {
  return (
    <div id="body" className="w-full py-16 text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-wrap justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I{"'"}m <span className="text-[#6B56C1]">Manoj</span>
          </h1>
          <h1 className="max-w-[1240px] m-auto py-2 text-gray-700 text-4xl sm:text-5xl md:text-6xl font-bold">
            A Frontend Developer
          </h1>
          <div className="max-w-[70%] m-auto">
            <p className="py-4 text-gray-600 ">
              Ex-Apollo 24/7 and Ex-SaaScraft. 1.5 years of Experience In
              Frontend Development.
            </p>
          </div>
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
              href="https://drive.google.com/file/d/1LVtGFyLtLPwYuYXjJ4kMGEeHjZI6-gH4/view?usp=sharing"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer"
            >
              <User />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
