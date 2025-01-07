import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

import food1 from "../assets/images/food_1.png";

export const dashboardAuthority = ["owner", "staff", "delivery", "admin", "moderator"]

export const navigation = [
  { title: "Home", link: "/", loggedIn: false },
  { title: "About", link: "/about", loggedIn: false },
  { title: "Service", link: "/service", loggedIn: false },
  { title: "Menu", link: "/menu", loggedIn: false },
  { title: "Contact Us", link: "/contact", loggedIn: false },
  { title: "Dashboard", link: "/dashboard/restaurant/list", loggedIn: true },
];
export const navigationRightLink = {
  search: {
    title: "Search",
    icon: <SearchIcon />,
    link: "/search",
    isIcon: true,
  },
  basket: {
    title: "Shopping Basket",
    icon: <ShoppingBasketIcon />,
    link: "/cart",
    isIcon: true,
  },
  signIn: {
    title: "Sign In",
    icon: <DoNotDisturbAltIcon />,
    link: "/signIn",
    isIcon: false,
  },
};

export const logedInNavigation = [
  { title: "Home", link: "/user/home" },
  { title: "Inbox", link: "/user/inbox" },
  { title: "Cart", link: "/user/cart" },
  { title: "Account", link: "/user/account" },
  { title: "More", link: "/user/more" },
];

export const colors = {
  first: {
    color: "#E53935",
    complementary: "#35E5E1",
    lighter1: "#FF6F61",
    lighter2: "#FFA7A0",
    darker1: "#C62828",
    darker2: "#A51313",
    background: "#FFE6E6",
  },
  second: {
    color: "#FF6347",
    complementary: "#47FFFF",
    lighter1: "#FF8A70",
    lighter2: "#FFB19A",
    darker1: "#E64A2E",
    darker2: "#B33B23",
    background: "#FFECE7",
  },
  third: {
    color: "#D32F2F",
    complementary: "#2FD3D3",
    lighter1: "#E57373",
    lighter2: "#FFA4A2",
    darker1: "#B71C1C",
    darker2: "#8E1414",
    background: "#FFEBEB",
  },
  fourth: {
    color: "#FF3D00",
    complementary: "#00FFB3",
    lighter1: "#FF6E40",
    lighter2: "#FFA080",
    darker1: "#E53400",
    darker2: "#B72600",
    background: "#FFEFE6",
  },
  fifth: {
    color: "#B71C1C",
    complementary: "#1CB7B7",
    lighter1: "#D32F2F",
    lighter2: "#E57373",
    darker1: "#990000",
    darker2: "#7A0000",
    background: "#FFEBEB",
  },
};

export const homeFoodCategory = [
  { name: "Appetizers", link: "/appetizers", icon: "🍤", image: food1 },
  { name: "Burgers", link: "/burgers", icon: "🍔", image: food1 },
  { name: "Pizzas", link: "/pizzas", icon: "🍕", image: food1 },
  { name: "Pastas", link: "/pastas", icon: "🍝", image: food1 },
  { name: "Salads", link: "/salads", icon: "🥗", image: food1 },
  { name: "Desserts", link: "/desserts", icon: "🍰", image: food1 },
  { name: "Drinks", link: "/drinks", icon: "🥤", image: food1 },
  { name: "Seafood", link: "/seafood", icon: "🦞", image: food1 },
  { name: "Vegetarian", link: "/vegetarian", icon: "🥦", image: food1 },
  { name: "Steaks", link: "/steaks", icon: "🥩", image: food1 },
  { name: "Sandwiches", link: "/sandwiches", icon: "🥪", image: food1 },
  { name: "Sushi", link: "/sushi", icon: "🍣", image: food1 },
];

export const sideBarData = [
  {
    for: ["owner", "staff", "delivery", "admin", "moderator"],
    title: "Home",
    link: "/",
    mainItem: true,
    open: false,
    selected: false,
    subList: [],
  },
  {
    for: ["admin"],
    title: "Category",
    link: "",
    mainItem: true,
    open: false,
    selected: false,
    subList: [
      { title: "Add", link: "category/add", mainItem: false, selected: false },
      {
        title: "List",
        link: "category/list",
        mainItem: false,
        selected: false,
      },
    ],
  },
  {
    for: ["admin", "moderator"],
    title: "List Restaurant",
    link: "restaurant/list",
    mainItem: true,
    open: false,
    selected: false,
    subList: [],
  },
  {
    for: ["admin", "moderator"],
    title: "Browse Content",
    link: "browse-content/list",
    mainItem: true,
    open: false,
    selected: false,
    subList: [
      // { title: "Manage", link: "/browse-content/manage", mainItem: false, selected: false },
      // { title: "List", link: "/browse-content/list", mainItem: false, selected: false },
    ],
  },
  {
    for: ["admin"],
    title: "Assign Authority",
    link: "assign-authority/moderator",
    mainItem: true,
    open: false,
    selected: false,
    subList: [
      {
        title: "Moderator",
        link: "assign-authority/moderator",
        mainItem: false,
        selected: false,
      },
      {
        title: "Delivery",
        link: "assign-authority/delivery",
        mainItem: false,
        selected: false,
      },
    ],
  },
  {
    for: ["moderator"],
    title: "Assign Authority",
    link: "assign-authority/moderator",
    mainItem: true,
    open: false,
    selected: false,
    subList: [
      // { title: "Assign", link: "assign-authority/moderator", mainItem: false, selected: false },
      {
        title: "Delivery",
        link: "assign-authority/delivery",
        mainItem: false,
        selected: false,
      },
    ],
  },
  // {
  //   for: ["admin"],
  //   title: "Moderator Authority",
  //   link: "assign-authority/moderator",
  //   mainItem: true,
  //   open: false,
  //   selected: false,
  //   subList: [
  //     // { title: "Assign", link: "/assign-authority/", mainItem: false, selected: false },
  //     // { title: "List", link: "", mainItem: false, selected: false },
  //   ],
  // },
  // {
  //   for: ["admin", "moderator"],
  //   title: "Delivery Authority",
  //   link: "assign-authority/delivery",
  //   mainItem: true,
  //   open: false,
  //   selected: false,
  //   subList: [
  //     // { title: "Assign", link: "", mainItem: false, selected: false },
  //     // { title: "List", link: "", mainItem: false, selected: false },
  //   ],
  // },
  {
    for: ["owner"],
    title: "View Restaurant",
    link: "/",
    mainItem: true,
    open: false,
    selected: false,
    subList: [],
  },
  {
    for: ["owner"],
    title: "Menu",
    link: "/",
    mainItem: true,
    open: false,
    selected: false,
    subList: [
      { title: "Add Category", link: "", mainItem: false, selected: false },
      { title: "List Category", link: "", mainItem: false, selected: false },
      { title: "Add Item", link: "", mainItem: false, selected: false },
      { title: "List Item", link: "", mainItem: false, selected: false },
    ],
  },
  // {
  //   for: ["owner","staff","delivery","admin","moderator"],
  //   title: "Log Out",
  //   link: "logout",
  //   mainItem: true,
  //   open: false,
  //   selected: false,
  //   subList: [],
  // },
];
