"use client";

import * as React from "react";
import { Config } from "@/config";

const ConfigContext = React.createContext({
  config: Config,
});

export type ConfigProviderPropsType = {
  children: React.ReactNode;
};

export const ConfigProvider = ({ children }: ConfigProviderPropsType) => (
  <ConfigContext.Provider value={{ config: Config }}>
    {children}
  </ConfigContext.Provider>
);

export const useConfig = () => {
  return React.useContext(ConfigContext);
};
