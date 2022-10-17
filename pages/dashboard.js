import React, { useState } from "react";
import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Layout/Layout";
import Platform from "/src/components/Layout/Platform";
import Link from "next/link";


export default function Dashboard() {

  return (
    <>
      <Platform className="mt-6">
         <div class="container w-full px-8 py-8 overflow-hidden bg-gray-100">
            <div className="">
                <h1>Welcome, Admin!</h1>
            </div>
            <div className="container">
                <div class="grid grid-cols-4 gap-4 md:grid-cols-4 ">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-white">01</div>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-white">02</div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
            <div className="container my-5">
                <div class="grid grid-cols-4 gap-4 ">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-8 py-6">
                            <div class="font-bold text-xl mb-2 text-white">01</div>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-8 py-6">
                            <div class="font-bold text-xl mb-2 text-white">01</div>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-8 py-6">
                            <div class="font-bold text-xl mb-2 text-white">01</div>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-8 py-6">
                            <div class="font-bold text-xl mb-2 text-white">01</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
            <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-2 rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-18 py-16">
                            <div class="font-bold text-xl mb-2 text-white"></div>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-18 py-16">
                            <div class="font-bold text-xl mb-2 text-white"></div>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-18 py-16">
                            <div class="font-bold text-xl mb-2 text-white"></div>
                        </div>
                    </div>
                    <div class="col-span-2 rounded overflow-hidden shadow-lg bg-red-600">
                        <div class="px-18 py-16">
                            <div class="font-bold text-xl mb-2 text-white"></div>
                        </div>
                    </div>
            </div>
            </div>
      </Platform>
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal title="Dashboard">
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
