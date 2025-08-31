import * as React from "react";
import { MessageBox } from "@aristobyte-ui/message-box";

export const Types = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <MessageBox variant="success" withIcon type="solid">
        Solid message box type
      </MessageBox>
      <MessageBox variant="success" withIcon type="glowing">
        Glowing message box type
      </MessageBox>
      <MessageBox variant="success" withIcon type="outline">
        Outline message box type
      </MessageBox>
      <MessageBox variant="success" withIcon type="outline-dashed">
        Dotted outline message box type
      </MessageBox>
      <MessageBox variant="success" withIcon type="no-outline">
        No-outline message box type
      </MessageBox>
    </div>
  );
};
