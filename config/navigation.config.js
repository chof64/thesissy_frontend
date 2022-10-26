module.exports = {
  primary: [
    {
      group: "Pages",
      items: [
        {
          name: "Home",
          href: "/",
          pin: true,
          external: false,
        },
        {
          name: "Dashboard",
          href: "/dashboard",
          pin: false,
          external: false,
        },
      ],
    },
  ],
  dashboard: [
    {
      group: "Dashboard",
      items: [
        {
          name: "Overview",
          href: "/dashboard",
          external: false,
          pin: false,
        },
        {
          name: "Upload",
          href: "/dashboard/upload",
          external: false,
          pin: false,
        },
      ],
    },
    {
      group: "Pages",
      items: [
        {
          name: "Home",
          href: "/",
          pin: true,
          external: false,
        },
        {
          name: "Dashboard",
          href: "/dashboard",
          pin: false,
          external: false,
        },
      ],
    },
  ],
};
