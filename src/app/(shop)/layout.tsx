import { Sidebar, TopMenu } from "@/components";
import React from "react";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <TopMenu />

      <Sidebar />

      <div className="px:0 md:px-10">{children}</div>
    </div>
  );
};

export default ShopLayout;
