"use client";

import * as React from "react";
import { createPortal } from "react-dom";

export const Portal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof window === "undefined") return null;
  return createPortal(children, document.body);
};
