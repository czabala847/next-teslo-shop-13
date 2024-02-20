import React from "react";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen bg-red-500">{children}</div>;
};

export default ShopLayout;
