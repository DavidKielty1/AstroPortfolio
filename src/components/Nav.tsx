import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  function opened() {
    setOpen(true);
    console.log("opened");
  }

  return (
    <nav className=" flex justify-center bg-slate-200/20 w-screen ">
      <div className="flex justify-between w-screen lg:mx-20 xl:mx-32 max-w-[1000px]  py-4 mx-10 3xl:mx-0 tracking-wide text-2xl font-worksans font-medium">
        <div className="text-start">
          <h1 className="">DAVID KIELTY</h1>
        </div>
        <div className="justify-end gap-4 hidden xl:flex">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
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
                      {/* <img
                        className=""
                        src="images/icon-close-menu.svg"
                        alt="Close Menu"
                      /> */}
                      X
                    </button>
                  </div>

                  <ul className="flex flex-col  font-worksans justify-center">
                    <li className="py-4 w-full hover:bg-slate-300/20 flex justify-center">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="text-center flex items-center  hover:text-slate-200">
                              <span className="font-medium text-2xl ">
                                About
                              </span>
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
                              <span className="text-2xl ">Projects</span>
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
                              <span className="text-2xl ">Contact</span>
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
          {/* <div> */}
          {/* <div className="align-end z-10 flex items-end justify-end xl:hidden">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("mobilemenu")
                    ?.classList.toggle("hidden");
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <div className="flex w-full items-center justify-center group-active:visible">
                <div
                  id="mobilemenu"
                  className="text-bold absolute left-0 top-16 hidden w-screen flex-col bg-slate-300/30 bg-opacity-95 py-2 text-center text-2xl font-bold text-slate-600 backdrop-blur-md"
                >
                  <a
                    href="/"
                    className="block w-full py-6 hover:bg-slate-400/40 hover:text-white "
                  >
                    About
                  </a>
                  <a
                    href="/"
                    className="block w-full py-6 hover:bg-slate-400/40 hover:text-white "
                  >
                    Projects
                  </a>
                  <a
                    href="/NewMeetUp"
                    className="block w-full py-6 hover:bg-slate-400/40 hover:text-white "
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
}
