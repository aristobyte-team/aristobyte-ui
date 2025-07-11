import * as React from "react";
import { Button } from "@aristobyte-ui/ui/components/Button/index";

export const Loading = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" isLoading spinnerType="default">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerType="duo">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerType="gradient">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerType="pulse">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerType="pulse-duo">
        Loading
      </Button>
    </div>
  );
};
