import React, { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Dashboard/Layout";
import Platform from "/src/components/Layout/Platform";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState({
    file: null,
    map: null,
  });

  const uploadPDS = (e) => {
    e.preventDefault();

    return;
  };

  return (
    <>
      <Tab.Group as={Fragment}>
        <Platform className="mt-10 mb-5">
          <Tab.List className="flex items-center justify-between gap-1 p-1 bg-gray-200 rounded-md">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={classMerge(
                    "w-full rounded-md p-1.5 font-semibold",
                    selected ? "bg-white" : "hover:bg-gray-50"
                  )}
                >
                  Upload
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={classMerge(
                    "w-full rounded-md p-1.5 font-semibold",
                    selected ? "bg-white" : "hover:bg-gray-50"
                  )}
                >
                  Preview
                </button>
              )}
            </Tab>
          </Tab.List>
        </Platform>
        <Platform>
          <Tab.Panels className="flex items-center justify-center p-2 bg-gray-200 rounded-md">
            <Tab.Panel className="w-full">
              <div>
                <h1 className="text-xl font-medium">Upload</h1>
                <p className="text-sm">
                  Please select the Personal Data Sheet that you want to upload.
                </p>
              </div>
              <div>
                <form className="">
                  <input
                    type="file"
                    className="w-full p-4 mt-4 font-mono text-sm font-semibold rounded-md cursor-pointer hover:bg-gray-100"
                    onChange={(e) => {
                      setSelectedFile({
                        ...selectedFile,
                        file: e.target.files[0],
                      });
                    }}
                  />

                  <div className="flex items-center justify-between w-full">
                    <div />
                    <button
                      type="submit"
                      className={classMerge("mt-2 rounded-md bg-white p-2")}
                      onClick={(e) => {
                        e.preventDefault();
                        if (selectedFile.file === null) {
                          alert("Please select a file");
                          return;
                        }
                      }}
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
              <div></div>
            </Tab.Panel>
            <Tab.Panel className="w-full">Preview Content</Tab.Panel>
          </Tab.Panels>
        </Platform>
      </Tab.Group>
    </>
  );
}

Upload.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal title="Upload">
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
