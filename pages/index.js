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
        <div className="flex w-full flex-col items-center justify-center">
          <div className="h-64 w-full rounded-md bg-[url('/images/hero-background-image.jpg')] bg-cover">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-red-900/50">
              <h1 className="text-center text-xl font-bold text-white">
                WMSU HUMAN RESOURCES INFORMATION{" "}
                <span className="text-wmsu-red">SYSTEM</span>
              </h1>
              <p className="mt-3 text-center text-sm text-white">
                Access all available data in just one click.
              </p>
            </div>
          </div>
          <div className="mt-2 flex w-full flex-col gap-2">
            <Link href="/#login">
              <button className="inline-flex h-14 w-full items-center rounded-md bg-wmsu-red p-2 font-semibold text-white">
                <LogInIcon className="mr-1 aspect-square h-5 stroke-[3]" />
                Login
              </button>
            </Link>
            <Link href="/#learnmore">
              <button className="inline-flex h-14 w-full items-center rounded-md border p-2 font-semibold">
                <InfoIcon className="mr-1 aspect-square h-5 stroke-[3]" />
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div>
          <h1>Abstract</h1>
          <p>Abstract Content</p>
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
