import { ButtonType } from "@/src/types/buttonType";
import Link from "next/link";

const NavLink = ({ href, text, variant }: ButtonType) => {
  if (variant == "outline") {
    return (
      <Link href={href}>
        <p className="text-content-secondary text-sm font-bold font-mono px-4 py-2 rounded-3xl hover:bg-background-primary hover:text-black  transition-all ease-in-out duration-700">
          {text}
        </p>
      </Link>
    );
  } else if (variant == "contain") {
    return (
      <button>
        <Link href={href}>
          <p className="text-white hover:bg-transparent font-semibold font-inter px-3 py-2 rounded-md bg-background-primary hover:text-background-primary border hover:border-background-primary transition-all ease-in-out duration-700">
            {text}
          </p>
        </Link>
      </button>
    );
  } else {
    return (
      <Link href={href}>
        <p className="text-content-secondary font-xs font-semibold font-inter">
          {text}
        </p>
      </Link>
    );
  }
};

export default NavLink;
