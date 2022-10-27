import React from "react";

import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Dashboard/Layout";

export default function Dashbaord() {
  return <div>Dashbaord</div>;
}

Dashbaord.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal title="Dashboard">
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
