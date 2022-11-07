import React, { Fragment, useState, useEffect } from "react";
import { Tab } from "@headlessui/react";

import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Dashboard/Layout";
import Platform from "/src/components/Layout/Platform";

import { supabase } from "/src/utils/SupabaseClient";
import { classMerge } from "/src/utils/TailwindUtilities";
import { uniqueString } from "/src/utils/GenerateString";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState({});
  const [storageReceipt, setStorageReceipt] = useState({});

  const uploadPDS = async (e) => {
    e.preventDefault();

    if (selectedFile.file === null) {
      alert("Please select a file");
      return;
    }

    try {
      const fileName = `${uniqueString(8)}.${
        selectedFile.file.name.split(".")[1]
      }`;

      const { error: uploadError } = await supabase.storage
        .from("pds-raw")
        .upload(fileName, selectedFile.file);

      if (uploadError) {
        throw uploadError;
      }

      setStorageReceipt((prev) => ({
        ...prev,
        file_name: fileName,
        default_name: selectedFile.file.name,
      }));
    } catch (error) {
      alert("Supabase Storage: Error uploading file. See console for details.");
      console.log(error);
    }

    const publicUrl = await supabase.storage
      .from("pds-raw")
      .getPublicUrl(storageReceipt.file_name);

    setStorageReceipt((prev) => ({
      ...prev,
      file_url: publicUrl.data.publicUrl,
    }));

    // prepare payload for backend request
  };
  return (
    <>
      <Tab.Group as={Fragment}>
        <Platform className="mt-10 mb-5">
          <Tab.List className="flex items-center justify-between gap-1 rounded-md bg-red-700 p-1">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={classMerge(
                    "w-full rounded-md p-1.5 font-bold text-white",
                    selected
                      ? "bg-white text-black"
                      : "hover:bg-gray-50 hover:text-black"
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
                    "w-full rounded-md p-1.5 font-bold text-white",
                    selected
                      ? "bg-white text-black"
                      : "hover:bg-gray-50 hover:text-black"
                  )}
                >
                  Preview
                </button>
              )}
            </Tab>
          </Tab.List>
        </Platform>
        <Platform>
          <Tab.Panels className="flex items-center justify-center rounded-md bg-gray-200 p-2">
            <Tab.Panel className="w-full">
              <div>
                <h1 className="text-xl font-medium">Upload</h1>
                <p className="mt-2 text-sm">
                  Please select the Personal Data Sheet that you want to upload.
                </p>
              </div>
              <div>
                <form onSubmit={uploadPDS}>
                  <input
                    type="file"
                    className="mt-4 w-full cursor-pointer rounded-md p-4 font-mono text-sm font-semibold hover:bg-gray-100"
                    onChange={(e) => {
                      if (
                        e.target.files[0].type !==
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      ) {
                        e.target.value = null;
                        alert("Please upload an excel file");
                        return;
                      }

                      setSelectedFile((prev) => ({
                        ...prev,
                        file: e.target.files[0],
                      }));
                    }}
                  />

                  <div className="mt-2 flex w-full items-center justify-end gap-x-2">
                    <button
                      type="reset"
                      className={classMerge(
                        "rounded-md p-2 text-sm uppercase hover:bg-red-500"
                      )}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={classMerge(
                        "rounded-md bg-white p-2 text-sm font-semibold uppercase hover:bg-green-500"
                      )}
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
