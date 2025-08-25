import * as React from "react";
import { MessageBox } from "@aristobyte-ui/message-box";

export const Variants = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <MessageBox withIcon>Default message box</MessageBox>
      <MessageBox variant="info" withIcon>
        Info message box
      </MessageBox>
      <MessageBox variant="warning" withIcon>
        Warning message box
      </MessageBox>
      <MessageBox variant="success" withIcon>
        Success message box
      </MessageBox>
      <MessageBox variant="error" withIcon>
        Error message box
      </MessageBox>
    </div>
  );
};
