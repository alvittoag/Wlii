"use client";

// ** Import Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// ** Import Icons

type Props = {
  name: string;
  link: string;
};

const SideItems = ({ item }: { item: Props }) => {
  const { link, name } = item;

  const active = usePathname();

  return (
    <div
      className={`${
        active === link &&
        "bg-blue-600/75 p-2 rounded-lg text-white transition duration-500"
      }  p-2`}
    >
      <Link href={link}>{name}</Link>
    </div>
  );
};

export default SideItems;
