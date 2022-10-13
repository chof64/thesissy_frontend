import React from "react";
import LayoutGlobal from "../src/components/Layout/LayoutGlobal";
import Layout from "../src/components/Layout/Layout";
import Platform from "../src/components/Layout/Platform";
import Link from "next/link";
import { Info as InfoIcon, LogIn as LogInIcon } from "lucide-react";

export default function Index() {
  return (
    <>
      <Platform className="mt-7">
        <div className="flex items-center justify-center w-full">
          <div className="bg-[url('/images/hero-background-image.jpg')] bg-cover w-full h-64 rounded-md">
            <div className="bg-red-900/50 rounded-md h-full w-full flex flex-col justify-center items-center">
              <h1 className="font-bold text-xl text-center text-white">
                WMSU HUMAN RESOURCES INFORMATION{" "}
                <span className="text-wmsu-red">SYSTEM</span>
              </h1>
              <p className="mt-3 text-center text-sm text-white">
                Access all available data in just one click.
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <Link href="/#login">
                <button className="inline-flex items-center w-full p-2 h-14 rounded-md font-semibold bg-wmsu-red text-white">
                  <LogInIcon className="h-5 mr-1 aspect-square stroke-[3]" />
                  Login
                </button>
              </Link>
              <Link href="/#learnmore">
                <button className="inline-flex items-center w-full p-2 h-14 rounded-md font-semibold border">
                  <InfoIcon className="h-5 mr-1 aspect-square stroke-[3]" />
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Platform>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal title="Home">
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
