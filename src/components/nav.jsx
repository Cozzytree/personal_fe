import Link from "next/link";
import { Button } from "./ui/button";
import { GlobeIcon, HomeIcon } from "@radix-ui/react-icons";

const Nav = () => {
  return (
    <nav className="container mx-auto flex items-center justify-evenly">
      <Link href="/">
        <Button
          className="font-bold flex items-center gap-2"
          variant="outline"
          size="sm"
        >
          <HomeIcon /> Home
        </Button>
      </Link>
      <Link href="/news">
        <Button
          className="font-bold flex items-center gap-2"
          variant="outline"
          size="sm"
        >
          <GlobeIcon /> News
        </Button>
      </Link>
    </nav>
  );
};
export default Nav;
