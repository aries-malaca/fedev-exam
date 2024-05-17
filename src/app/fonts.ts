import localFont from "next/font/local";

export const openSans = localFont({
  src: [
    {
      path: "../assets/fonts/OpenSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
