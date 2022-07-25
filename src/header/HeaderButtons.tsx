export default function HeaderButtons(params: any) {
  const listStyle = 'list-[style-type]:none inline-block pt-6 pb-6 pr-6 pl-6';
  const linkStyle =
    'decoration-[0] font-bold capitalize hover:text-[#f9004d] hover:duration-[.4s]';
  return (
    <ul className="items-center justify-center">
      <li className={listStyle}>
        <button className={linkStyle}>Home</button>
      </li>
      <li className={listStyle}>
        <button className={linkStyle}>About</button>
      </li>
      <li className={listStyle}>
        <button className={linkStyle}>Projects</button>
      </li>
      <li className={listStyle}>
        <button className={linkStyle}>Contact</button>
      </li>
    </ul>
  );
}
