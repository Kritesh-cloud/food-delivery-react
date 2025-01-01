import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

import food1 from "../assets/images/food_1.png";

export const navigation = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Service", link: "/service" },
  { title: "Menu", link: "/menu" },
  { title: "Contact Us", link: "/contact" },
];
export const navigationRightLink = [
  { title: "Search", icon: <SearchIcon />, link: "/search", isIcon: true },
  {
    title: "Shopping Basket",
    icon: <ShoppingBasketIcon />,
    link: "/cart",
    isIcon: true,
  },
  {
    title: "Sign In",
    icon: <DoNotDisturbAltIcon />,
    link: "/signIn",
    isIcon: false,
  },
];

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
