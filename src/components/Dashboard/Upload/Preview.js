import React from "react";

export default function UploadPreview({ receipt }) {
  return <div>{JSON.stringify(receipt)}</div>;
}
