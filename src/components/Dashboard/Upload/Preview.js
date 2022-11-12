import React from "react";
import useSWR from "swr";

export default function UploadPreview({ receipt }) {
  const fetcher = (url) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify(receipt),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const { data, error } = useSWR("/api/dashboard/upload/extract", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnMount: true,
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (data.cat === "empty body")
    return (
      <div className="flex h-full w-full flex-col justify-center">
        <h1 className="font-bold">Nothing to preview.</h1>
        <p className="text-sm">
          Upload a PDS in the upload tab and you can preview the extracted data
          here.
        </p>
      </div>
    );

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}
