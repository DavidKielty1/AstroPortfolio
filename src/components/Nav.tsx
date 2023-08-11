export default function Nav() {
  return (
    <nav className=" flex justify-center bg-slate-200/20">
      <div className="flex justify-between w-full max-w-7xl lg:mx-40 mx-10 py-4 tracking-wide text-2xl font-worksans font-medium">
        <div className="text-start w-6/12">
          <h1 className="">DAVID KIELTY</h1>
        </div>
        <div className="justify-end flex gap-4 w-6/12 font-">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
