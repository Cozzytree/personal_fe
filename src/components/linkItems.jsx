import Link from "next/link";
import { Button } from "./ui/button";
const { usePathname } = require("next/navigation");

const LinkItems = ({ label, to, onClick }) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={onClick}
      className={`${
        pathname === to
          ? "text-zinc-900 dark:text-zinc-50"
          : "text-zinc-900 dark:text-zinc-400"
      } w-full hover:text-zinc-900 dark:hover:text-zinc-100 px-2 py-1 font-bold text-[15px]`}
      href={to}
    >
      {label}
    </Link>
  );
};

export default LinkItems;
