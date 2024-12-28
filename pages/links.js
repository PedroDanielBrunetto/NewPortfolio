"use client";

import LinkButton from "../components/LinkButton";

const Links = () => {
  return (
    <main className="p-0 m-0 py-4 w-full min-h-screen flex justify-center items-center">
      <section className="flex flex-col">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGvwe-IA6VPgQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726339378210?e=1740614400&v=beta&t=hIn_L6uNRQrnXCSSfqIhkaru5dT0pjKv-u45o5o5gmA"
            className="w-40 h-40 object-cover rounded-full"
          />
          <div className="text-center">
            <h1 className="text-base font-medium">
              Pedro Daniel Brunetto Martinez
            </h1>
            <h2 className="text-sm font-medium">Software Developer</h2>
            <a
              href="https://github.com/pedrodanielbrunetto"
              className="text-gray-600 font-bold text-xs underline"
            >
              @pedrodanielbrunetto
            </a>
          </div>
          <nav className="flex flex-col gap-4 justify-center items-center">
            <LinkButton
              title={"Portfólio"}
              link={"https://pedrodanielbrunetto.vercel.app/"}
            />
            <LinkButton
              title={"GitHub"}
              link={"https://github.com/PedroDanielBrunetto"}
            />
            <LinkButton
              title={"LinkedIn"}
              link={"https://www.linkedin.com/in/pedrodanielbrunetto/"}
            />
            <LinkButton
              title={"Instagram"}
              link={"https://www.instagram.com/syncupbrasil"}
            />
            <LinkButton
              title={"Meu Blog"}
              link={"https://pedrodanielbrunetto.vercel.app/blog"}
            />
            <a href="https://syncupbrasil.tech">
              <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                SyncUp
              </button>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Links;
