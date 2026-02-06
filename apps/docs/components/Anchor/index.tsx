import * as React from "react";
import { Anchor as AnchorComponent, type IAnchor } from "@aristobyte-ui/anchor";

import "./Anchor.scss";

export const Anchor: React.FC<IAnchor> = ({ className = "", ...props }) => (
  <AnchorComponent {...props} className={`${className} custom-anchor`} />
);
