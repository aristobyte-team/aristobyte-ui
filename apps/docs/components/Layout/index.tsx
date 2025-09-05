import * as React from "react";
import { Sidebar } from "./Sidebar";

import "./Layout.scss";

export interface ILayout {
  children: React.ReactNode | React.ReactElement | string;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main className="layout">
      <Sidebar />
      {children}
    </main>
  );
};
