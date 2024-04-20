import { ButtonType } from "@/src/types/buttonType";
import Link from "next/link";
import Image from "next/image";

const Button = ({ href, text, variant }: ButtonType) => {
  if (variant == "simple") {
    return (
      <Link href={href}>
        <button className="bg-button-primary rounded-lg text-sm py-2.5 px-4 w-fit text-white uppercase">
          {text}
        </button>
      </Link>
    );
  } else if (variant == "logo") {
    return (
      <div className="bg-button-primary gap-2 rounded-lg text-sm py-2.5 px-4 w-fit text-white flex justify-center item-center select-none uppercase cursor-pointer">
        <Image
          src="./assets/icons/play.svg"
          width={13}
          height={13}
          alt="logo"
        />
        Learn more
      </div>
    );
  } else {
    return null;
  }
};

export default Button;
