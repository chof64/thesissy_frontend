import { primary } from "/config/navigation.config";

import React, { forwardRef } from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

import Platform from "./Platform";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function Navigation() {
  const NAVIGATION = primary;

  const MenuLink = forwardRef((props, ref) => {
    MenuLink.displayName = "MenuLink";
    let { external = false, href, children, ...rest } = props;

    if (external) {
      return (
        <a
          href={href}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  });

  return (
    <Menu>
      {({ open }) => (
        <>
          <Platform className="py-3 ">
            <div className="flex items-center justify-between w-full">
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
                    <p className="flex flex-col">
                      WESTERN MINDANAO <span>STATE UNIVERSITY</span>
                    </p>
                  </div>
                </div>
              </Link>
              <Menu.Button>
                {open ? (
                  <XIcon className="h-10 w-10 stroke-[3] text-wmsu-red" />
                ) : (
                  <MenuIcon className="h-10 w-10 stroke-[3] text-wmsu-red" />
                )}
              </Menu.Button>
            </div>
          </Platform>
          <div className="absolute w-full">
            <div className="absolute flex justify-center w-full mt-8">
              {/* // TODO: Adjust tray sizes across different viewports. */}
              <Menu.Items
                as="div"
                className="flex max-h-[55vh] w-[95vw] flex-col gap-y-2.5 overflow-auto rounded-lg border border-neutral-300 bg-gray-200 p-2 shadow-md shadow-gray-200/50 focus:outline-none md:w-[70vw] md:p-4 lg:w-[50vw]"
              >
                {NAVIGATION.map((group) => (
                  <div key={group.group}>
                    <h2 className="text-xs font-bold text-gray-400 uppercase">
                      {group.group}
                    </h2>
                    <div className="flex flex-col mt-1 gap-y-1">
                      {group.items.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <MenuLink
                              href={item.href}
                              external={item.external}
                              className={classMerge(
                                "flex items-center gap-x-2 rounded-md bg-gray-50 px-4 py-3 font-bold",
                                active ? "bg-neutral-100 text-teal-600" : null
                              )}
                            >
                              {item.name}
                            </MenuLink>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </div>
                ))}
              </Menu.Items>
            </div>
            <div
              className={classMerge(
                open
                  ? "fixed inset-0 -z-50 h-full w-full bg-black/20 backdrop-blur"
                  : null
              )}
            />
          </div>
        </>
      )}
    </Menu>
  );
}
