import React, { useState } from "react";
import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Layout/Layout";
import Platform from "/src/components/Layout/Platform";
import Footer from "/src/components/Layout/Footer";
import Link from "next/link";

export default function Index(upload) {

  return (
    <>
      <Platform className="mt-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Select a file</label>
            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"></input>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">XLSX</p>

      </Platform>

    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal title="Upload">
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};