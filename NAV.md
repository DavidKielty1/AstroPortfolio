export default function Nav() {
  return (
    <nav className=" flex justify-center bg-slate-200/20 w-screen ">
      <div className="flex justify-between w-screen lg:mx-20 xl:mx-32 max-w-[1280px]  py-4 mx-10 3xl:mx-0 tracking-wide text-2xl font-worksans font-medium">
        <div className="text-start">
          <h1 className="">DAVID KIELTY</h1>
        </div>
        <div className="justify-end gap-4 hidden xl:flex">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="align-end z-10 flex items-end justify-end xl:hidden">
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
        </div>
      </div>
    </nav>
  );
}
