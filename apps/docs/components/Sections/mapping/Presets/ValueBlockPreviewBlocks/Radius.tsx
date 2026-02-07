"use client";
import * as React from "react";
import { ValueBlock } from "@aristobyte-ui/presets";
import { Icons } from "@aristobyte-ui/utils";

const radiusOptions = [
  { id: "none", label: "None" },
  { id: "sm", label: "Small" },
  { id: "md", label: "Medium" },
  { id: "lg", label: "Large" },
  { id: "full", label: "Full" },
];

export const Radius = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      {radiusOptions.map((item, index) => (
        <ValueBlock
          key={item.id}
          value={`${index + 1}d`}
          title={item.label}
          subtitle="Retention"
          variant="warning"
          appearance="outline"
          radius={item.id as "none" | "sm" | "md" | "lg" | "full"}
          icon={Icons.Star}
        />
      ))}
    </div>
  );
};
