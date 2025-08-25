import * as React from "react";
import { Switch } from "@aristobyte-ui/switch";

export const Controlled = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Switch
        variant="primary"
        label={isChecked ? "I am checked :)" : "I am not checked :("}
        alignLabel="horizontal"
        checked={isChecked}
        onChange={() => setIsChecked((prevState) => !prevState)}
      />
    </div>
  );
};
