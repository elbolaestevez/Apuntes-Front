import React from "react";
import Header from "@/components/Header";

export default function Template({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="h-screen w-full">
      <Header />
      {children}
    </div>
  );
}
