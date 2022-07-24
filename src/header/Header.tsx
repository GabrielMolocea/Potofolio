export default function Header(params: any) {
  return (
    <div className="h-[100vh] w-[100%] bg-cover bg-center">
      <nav className="flex items-center justify-between pt-11 pl-[8%] pr-[8%]">
        <h2 className="text-white font-4xl tracking-wide cursor-pointer">
          Proptofo<span className="text-[#f9004d]">lio</span>
          <ul>
            <li className="list-[style-type]:none inline-block pt-11 pb-11 pr-6 pl-6">
              <a
                className="text-white decoration-[0] font-bold capitalize hover:text-[#f9004d] hover:duration-[.4s]"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="list-[style-type]:none inline-block pt-11 pb-11 pr-6 pl-6">
              <a
                className="text-white decoration-[0] font-bold capitalize hover:text-[#f9004d] hover:duration-[.4s]"
                href="#"
              >
                About
              </a>
            </li>
            <li className="list-[style-type]:none inline-block pt-11 pb-11 pr-6 pl-6 ">
              <a
                className="text-white decoration-[0] font-bold capitalize hover:text-[#f9004d] hover:duration-[.4s]"
                href="#"
              >
                Skills
              </a>
            </li>
          </ul>
          <a
            className="text-white decoration-[0] font-bold capitalize hover:text-[#f9004d] hover:duration-[.4s]"
            href="#"
          >
            Contact Me
          </a>
        </h2>
      </nav>
    </div>
  );
}
