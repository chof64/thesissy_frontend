import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Platform from "./Platform";
import * as Dialog from "@radix-ui/react-dialog";

function Navigation() {
  const [open, setOpen] = React.useState(false);

  const NAVIGATION = [
    {
      name: "Home",
      href: "/",
      pin: true,
    },
    {
      name: "About",
      href: "/#about",
      pin: false,
    },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Platform className="py-3 ">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <div className="relative aspect-square h-14 w-14">
                <Image
                  src="/wmsu-logo-600x600.png"
                  layout="fill"
                  objectFit="cover"
                  alt="wmsu logo"
                  priority
                />
              </div>
              <div className="ml-2 font-bold text-wmsu-red">
                <p>
                  WESTERN MINDANAO <span>STATE UNIVERSITY</span>
                </p>
              </div>
            </div>
          </Link>
          <Dialog.Trigger>
            {open ? (
              <XIcon className="h-10 w-10 stroke-[3] text-wmsu-red" />
            ) : (
              <MenuIcon className="h-10 w-10 stroke-[3] text-wmsu-red" />
            )}
          </Dialog.Trigger>
        </div>
      </Platform>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex h-full w-full justify-center bg-black/20">
          <Dialog.Content className="mt-32 max-h-[60vh] w-[90vw] rounded-md bg-white p-2">
            <div className="flex flex-col gap-y-0.5">
              <p className="mb-1 text-xs font-bold">Navigation</p>
              {NAVIGATION.map((item, index) => (
                <Link key={index} href={item.href}>
                  <a className="p-2 text-sm font-semibold text-wmsu-red">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Navigation;
