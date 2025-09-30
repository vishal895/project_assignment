const fileExplorerData = {
  id: 1,
  name: "root",
  type: "folder",
  children: [
    {
      id: 2,
      name: "src",
      type: "folder",
      children: [
        {
          id: 3,
          name: "index.js",
          type: "file",
        },
        {
          id: 4,
          name: "App.js",
          type: "file",
        },
        {
          id: 5,
          name: "components",
          type: "folder",
          children: [
            {
              id: 6,
              name: "Header.js",
              type: "file",
            },
            {
              id: 7,
              name: "Footer.js",
              type: "file",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "public",
      type: "folder",
      children: [
        {
          id: 9,
          name: "index.html",
          type: "file",
        },
        {
          id: 10,
          name: "favicon.ico",
          type: "file",
        },
      ],
    },
    {
      id: 11,
      name: "package.json",
      type: "file",
    },
    {
      id: 12,
      name: "README.md",
      type: "file",
    },
  ],
};

export default fileExplorerData;
