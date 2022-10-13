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
          <div className="h-64 w-full rounded-md bg-[url('/images/hero-background-image.jpg')] bg-cover">
            <div className="flex flex-col items-center justify-center w-full h-full rounded-md bg-red-900/50">
              <h1 className="text-xl font-bold text-center text-white">
                WMSU HUMAN RESOURCES INFORMATION{" "}
                <span className="text-wmsu-red">SYSTEM</span>
              </h1>
              <p className="mt-3 text-sm text-center text-white">
                Access all available data in just one click.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Link href="/#login">
                <button className="inline-flex items-center w-full p-2 font-semibold text-white rounded-md h-14 bg-wmsu-red">
                  <LogInIcon className="mr-1 aspect-square h-5 stroke-[3]" />
                  Login
                </button>
              </Link>
              <Link href="/#learnmore">
                <button className="inline-flex items-center w-full p-2 font-semibold border rounded-md h-14">
                  <InfoIcon className="mr-1 aspect-square h-5 stroke-[3]" />
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
