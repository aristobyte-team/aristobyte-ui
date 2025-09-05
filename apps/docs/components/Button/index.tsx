import * as React from "react";
import { Button as ButtonComponent, type IButton } from "@aristobyte-ui/button";

import "./Button.scss";

export const Button: React.FC<IButton> = ({ className, ...props }) => (
  <ButtonComponent {...props} className={`${className} custom-button`} />
);
