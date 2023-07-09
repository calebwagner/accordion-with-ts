import React from "react";

interface TabProps {
  title: string;
  children: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => {
  return <div>{children}</div>;
};
