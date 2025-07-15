import * as React from "react";
import { MessageBox } from "@aristobyte-ui/ui/components/MessageBox/index";

export const Radius = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <MessageBox withIcon radius="none">
        No radius
      </MessageBox>
      <MessageBox withIcon radius="sm">
        Small radius
      </MessageBox>
      <MessageBox withIcon radius="md">
        Medium radius
      </MessageBox>
      <MessageBox withIcon radius="lg">
        Large radius
      </MessageBox>
      <MessageBox withIcon radius="full">
        Full radius
      </MessageBox>
    </div>
  );
};
