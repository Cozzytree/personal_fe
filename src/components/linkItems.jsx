

import Link from "next/link";
const { usePathname } = require("next/navigation");

const LinkItems = ({ label, to }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname === to
          ? "text-zinc-900 dark:text-zinc-100"
          : "text-zinc-600 dark:text-zinc-400"
      }  hover:text-zinc-900 dark:hover:text-zinc-100 px-2 font-bold text-[15px]`}
      href={to}
    >
      {label}
    </Link>
  );
};

export default LinkItems;
