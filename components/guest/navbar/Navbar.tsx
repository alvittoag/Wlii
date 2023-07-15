// ** Import Constant
import { navItems } from "@/constants";

// ** Import Components
import NavItem from "./NavItem";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex  py-10 px-24">
      <Image src="/next.svg" alt="logo" width={100} height={100} />

      <div className="flex mx-auto">
        <ul className="flex gap-10">
          {navItems.map((item, i) => (
            <NavItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
