import {
  CSSIcon,
  GraphQLIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  ReactNativeLogo,
  TailwindIcon,
  TypeScriptIcon,
} from "@/public/assets/icons";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full px-2 justify-center items-center py-16 bg-[#E5ECEC]"
    >
      <div className="max-w-[1240px] mx-auto justify-center h-full">
        <p className="flex justify-center text-xl trackng-widest uppercase text-red-950 font-bold">
          Skills
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <ReactIcon />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <NextJSIcon />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">NEXT.JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <ReactNativeLogo />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">React Native</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <JavaScriptIcon />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <TypeScriptIcon />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <GraphQLIcon />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">GraphQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <TailwindIcon />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <CSSIcon />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">CSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
