import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  function opened() {
    setOpen(true);
    console.log("opened");
  }

  return (
    <nav className=" flex justify-center bg-slate-200/20 text-slate-600/80 w-screen fixed">
      <div className="flex justify-between w-screen 2xl:max-w-screen-3xl py-4 mx-10 tracking-wide text-3xl font-worksans font-medium">
        <div className="text-start">
          <a href="#home">DAVID KIELTY</a>
        </div>
        <div className="justify-end gap-4 hidden xl:flex">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
        <div className="flex items-center xl:hidden">
          <button
            onClick={opened}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
            <img
              className="block xl:hidden"
              src="images/icon-menu.svg"
              alt="Menu"
            />
          </button>
          <div>
            <Transition show={open}>
              {/* Sliding sidebar */}
              <Transition.Child
                className="fixed right-0 top-0 w-[250px] z-30 h-screen"
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div
                  id="sidebar"
                  className={`fixed right-0 top-0 w-[250px] h-screen bg-slate-300/30  pt-20  z-50 backdrop-blur-md bg-opacity-95 text-white `}
                >
                  <div className="flex justify-center">
                    <button
                      onClick={() => setOpen(false)}
                      aria-expanded={open}
                      aria-controls="sidebar"
                      className="justify-center  text-3xl py-4 hover:bg-slate-300/20 w-full font-raleway"
                    >
                      X
                    </button>
                  </div>
                  <ul className="flex flex-col  font-worksans justify-center">
                    <li className="py-4 w-full hover:bg-slate-300/20 justify-center flex">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="text-center font-medium flex items-center  hover:text-slate-200">
                              <a href="#home" className="text-2xl ">
                                Home
                              </a>
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    </li>
                    <li className="py-4 w-full hover:bg-slate-300/20 justify-center flex">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="text-center font-medium flex items-center  hover:text-slate-200">
                              <a href="#projects" className="text-2xl ">
                                Projects
                              </a>
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    </li>
                    <li className="py-4 w-full hover:bg-slate-300/20 flex justify-center">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="text-center flex items-center  hover:text-slate-200">
                              <a
                                href="#about"
                                className="font-medium text-2xl "
                              >
                                About
                              </a>
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    </li>
                  </ul>
                </div>
                {/* ... */}
              </Transition.Child>
              <Transition.Child
                enter="transition-opacity ease-linear duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {/* ... */}
                <div
                  onClick={() => setOpen(false)}
                  className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
                ></div>
              </Transition.Child>
            </Transition>
          </div>
        </div>
      </div>
    </nav>
  );
}

export const DUMMY_DATA = [
  {
    url: "https://meetups-t3.vercel.app/",
    title: "Unite",
    description: "Can I have a hobby with a side of friends, please?",
    tech: "Technologies utilzed: NextJS, Typescript, Tailwind, PrismaORM, PostgreSQL, Zod, tRPC, CI/CD",
    imagesrc: "/images/meetupMain.png",
  },
  {
    url: "https://pandareview.onrender.com/",
    title: "Panda Review",
    description: "Share your favourite oriental hot-spot diners!",
    tech: "Technologies utilzed: Javascript, MongoDB, Mongoose, Express, Node, Sessions",
    imagesrc: "/images/panda.png",
  },
  {
    url: "https://exquisite-souffle-cb2d07.netlify.app/",
    title: "Scrumptious",
    description: "Search for delicious recipes from all over the world!",
    tech: "Technologies utilzed: React, FetchAPI, Styled Components, Carousel",
    imagesrc: "/images/Girlchef.png",
  },
  {
    url: "https://foodapp-624be.firebaseapp.com/",
    title: "Gusto Restaurant",
    description: "Michelin Star quality delivered to your home.",
    tech: "Technologies utilzed:  React, Firebase, ContextAPI, SASS",
    imagesrc: "/images/Chefhat.png",
  },
];

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export const RoughNotationText = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <RoughNotation type="highlight" show={show} color="#99f6e4">
        Lorem ipsum dolor
      </RoughNotation>
      sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum
    </div>
  );
};
