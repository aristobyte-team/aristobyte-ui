import * as React from "react";
import { MessageBox } from "@aristobyte-ui/message-box";

export const Variants = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <MessageBox withIcon>Default message box</MessageBox>
      <MessageBox variant="primary" withIcon>
        Info message box (Primary)
      </MessageBox>
      <MessageBox variant="secondary" withIcon>
        Info message box (Secondary)
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
