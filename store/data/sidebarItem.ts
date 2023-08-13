export default [
  {
    isTitle: true,
    name: "Menu",
    url: "",
    icon: "",
    submenu: [],
  },
  {
    isTitle: false,
    name: "Dashboard",
    url: "/",
    icon: "home",
    submenu: [],
  },
  {
    isTitle: false,
    name: "Donasi",
    url: "",
    icon: "dollar-sign",
    submenu: [
      {
        isTitle: false,
        name: "List Donasi",
        url: "/donasi",
        icon: "chevron-right",
        submenu: [],
      },
      {
        isTitle: false,
        name: "Buat Donasi",
        url: "/donasi/tambah",
        icon: "chevron-right",
        submenu: [],
      },
    ],
  },
  {
    isTitle: false,
    name: "Laporan",
    url: "",
    icon: "clipboard",
    submenu: [
      {
        isTitle: false,
        name: "Laporan Transaksi",
        url: "/dashboard",
        icon: "chevron-right",
        submenu: [],
      },
      {
        isTitle: false,
        name: "Laporan Distribusi",
        url: "/dashboard",
        icon: "chevron-right",
        submenu: [],
      },
    ],
  },
  {
    isTitle: false,
    name: "Admin",
    url: "",
    icon: "user",
    submenu: [
      {
        isTitle: false,
        name: "List Admin",
        url: "/dashboard",
        icon: "chevron-right",
        submenu: [],
      },
      {
        isTitle: false,
        name: "Tambah Admin",
        url: "/dashboard",
        icon: "chevron-right",
        submenu: [],
      },
    ],
  },
];
