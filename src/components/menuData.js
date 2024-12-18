export const menuData = [
    {
      key: "home",
      name: "Home",
      children: null,
    },
    {
      key: "about",
      name: "About",
      children: [
        {
          key: "team",
          name: "Team",
          children: [
            { key: "leadership", name: "Leadership", children: null },
            { key: "staff", name: "Staff", children: null },
          ],
        },
        { key: "history", name: "History", children: null },
      ],
    },
    {
      key: "services",
      name: "Services",
      children: [
        {
          key: "web",
          name: "Web Development",
          children: null,
        },
        {
          key: "mobile",
          name: "Mobile Development",
          children: [
            { key: "ios", name: "iOS", children: null },
            { key: "android", name: "Android", children: null },
          ],
        },
      ],
    },
    {
      key: "contact",
      name: "Contact",
      children: null,
    },
  ];
  

  