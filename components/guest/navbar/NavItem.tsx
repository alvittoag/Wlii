"use client";

// ** Import Next
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: string;
  name: string;
};

const NavItem = ({ item }: { item: Props }) => {
  const { link, name } = item;

  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`${pathname === link && "border-b-[3px] border-[#4461F2]"}`}
    >
      {name}
    </Link>
  );
};

export default NavItem;
