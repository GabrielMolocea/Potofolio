import HeaderButtons from './HeaderButtons';

export default function Header(params: any) {
  return (
    <header className="fixed z-[10000] w-[100%] bg-cover bg-center bg-white">
      <nav className="flex items-center justify-between pl-8 pr-8">
        <div className="tracking-wide cursor-pointer font-sans font-bold uppercase hover:text-[#f9004d] hover:duration-[.4s]">
          Gabriel<span className="text-[#f9004d]"> Molocea</span>
        </div>
        <HeaderButtons />
      </nav>
    </header>
  );
}
