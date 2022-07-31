import { GoMarkGithub } from 'react-icons/go';
import { ImLinkedin } from 'react-icons/im';

export default function SideBar(props: any) {
  return (
    <div className="absolut top-[50%] left-0 h-50 w-16 m-0 flex flex-col bg-white text-black shadow-lg justify-center p-0">
      <SideBarIcon icon={<GoMarkGithub size={28} />} />
      <SideBarIcon icon={<ImLinkedin size={28} />} />
    </div>
  );
}

function SideBarIcon({ icon }: any) {
  return (
    <div className="sidebar-icon group">
      {icon}
      {/* <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span> */}
    </div>
  );
}
