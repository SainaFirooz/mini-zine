import Link from "next/link";

import { FiBookOpen } from "react-icons/fi";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FiBookOpen className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
