import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon } from "lucide-react";

function Navigation() {
  return (
    <>
      <div className="mt-5 flex item-center justify-center">
        <div className="w-[90vw]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="relative w-14 h-14 aspect-square">
                <Image
                  src="/wmsu-logo-600x600.png"
                  layout="fill"
                  objectFit="cover"
                  alt="wmsu logo"
                  priority
                />
              </div>
              <div className="ml-2 font-bold text-wmsu-red">
                <p>WESTERN MINDANAO</p>
                <p>STATE UNIVERSITY</p>
              </div>
            </div>
            <div>
              <MenuIcon className="aspect-square h-14 stroke-[3] text-wmsu-red" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
