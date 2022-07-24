export default function Header(params: any) {
  const listStyle = 'list-[style-type]:none inline-block pt-6 pb-6 pr-6 pl-6';
  const linkStyle =
    'decoration-[0] font-bold capitalize hover:text-[#f9004d] hover:duration-[.4s';
  return (
    <div className="h-[100vh] w-[100%] bg-cover bg-center bg-white">
      <nav className="flex items-center justify-between pl-8 pr-8">
        <h2 className=" font-4xl tracking-wide cursor-pointer font-sans">
          Gabriel<span className="text-[#f9004d]"> Molocea</span>
        </h2>
        <ul className="items-center justify-center">
          <li className={listStyle}>
            <a className={linkStyle} href="./index.html">
              Home
            </a>
          </li>
          <li className={listStyle}>
            <a className={linkStyle} href="">
              About
            </a>
          </li>
          <li className={listStyle}>
            <a className={linkStyle} href="">
              Projects
            </a>
          </li>
          <li className={listStyle}>
            <a className={linkStyle} href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
