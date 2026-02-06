import * as React from "react";
import { Label } from "@aristobyte-ui/label";

export const CustomColors = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <Label
      text="Info"
      color="#8ec5ff"
      backgroundColor="#1c398e66"
      borderColor="#2b7fff4c"
    />
    <Label
      text="Success"
      color="#5ee9b5"
      backgroundColor="#004f3b66"
      borderColor="#00bc7d85"
    />
    <Label
      text="Warning"
      color="#ffd36e"
      backgroundColor="#8b5e0033"
      borderColor="#ffb54766"
    />
  </div>
);
