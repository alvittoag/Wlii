// ** Import Components
import Logout from "./Logout";
import SideItems from "./SideItems";

// ** Import Icons
import { SignalIcon } from "@heroicons/react/24/outline";

// ** Import Other
import { sideItems } from "@/constants";

const Sidebar = () => {
  return (
    <div className=" w-[15rem] border-r">
      <div className="fixed w-[15rem] no-scrollbar h-full overflow-y-auto py-5 px-6 space-y-10 ">
        <div className="flex justify-center items-center gap-2 mr-5">
          <SignalIcon className="w-7 h-7 text-gray-900" />
          <h1 className="text-2xl font-bold ">Wlii</h1>
        </div>

        <div className="space-y-4">
          {sideItems.map((item, i) => (
            <SideItems key={i} item={item} />
          ))}
        </div>

        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
