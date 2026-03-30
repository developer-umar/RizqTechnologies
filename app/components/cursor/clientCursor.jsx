"use client";

import dynamic from "next/dynamic";

// 🔥 cursor lazy load (client side only)
const SplashCursor = dynamic(
  () => import("./SplashCursor"),
  { ssr: false }
);

const ClientCursor = () => {
  return <SplashCursor />;
};

export default ClientCursor;