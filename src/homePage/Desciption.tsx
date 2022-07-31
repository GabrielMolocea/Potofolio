import SideBar from './SideBar';

export default function Desciption(params: any) {
  return (
    <section className="h-screen bg-center bg-hero-pattern relative">
      <div className="absolute top-[50%] left-[30%] flex-col max-w-[90rem] items-center w-auto flex">
        <div className="flex justify-center font-[800] text-6xl font-sans text-[#111]">
          HEY, I'M GABRIEL MOLOCEA
        </div>
        <div className="flex justify-center text-xl leading-9 text-center w-[50rem] text-[#333]">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </div>
        <div className="flex justify-center shadow-lg bg-blue-300 cursor-pointer items-center w-max self-center">
          Projects
        </div>
      </div>
      <SideBar />
    </section>
  );
}
