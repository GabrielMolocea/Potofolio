import SideBar from './SideBar';

export default function Desciption(params: any) {
  return (
    <section className="h-screen bg-hero-pattern min-h-100 max-h-120">
      <div className="block">
        <div className="flex justify-center">HEY, I'M GABRIEL MOLOCEA</div>
        <div className="flex justify-center">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </div>
        <div className="flex justify-center shadow-lg bg-blue-300 cursor-pointer ">
          Projects
        </div>
      </div>
      <SideBar />
    </section>
  );
}
