import * as React from "react";
import { Button } from "@aristobyte-ui/button";

const GiftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

export const WithIcon = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" icon={{ component: GiftIcon, align: "left" }}>
        Button
      </Button>
      <Button
        variant="secondary"
        icon={{ component: GiftIcon, align: "right" }}
      >
        Button
      </Button>
      <Button
        isLoading
        variant="primary"
        icon={{ component: GiftIcon, align: "left" }}
      >
        Button
      </Button>
      <Button
        isLoading
        variant="secondary"
        icon={{ component: GiftIcon, align: "right" }}
      >
        Button
      </Button>
      <Button variant="success" icon={{ component: GiftIcon }} />
    </div>
  );
};
