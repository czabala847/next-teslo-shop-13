import { TopMenu } from "@/components";
import React from "react";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <TopMenu />

      {children}
    </div>
  );
};

export default ShopLayout;
