"use client";
import * as React from "react";
import { ValueBlock } from "@aristobyte-ui/presets";
import { Icons } from "@aristobyte-ui/utils";

const appearances = [
  { id: "solid", label: "Solid" },
  { id: "glowing", label: "Glowing" },
  { id: "outline", label: "Outline" },
  { id: "outline-dashed", label: "Outline Dashed" },
  { id: "no-outline", label: "No Outline" },
];

export const Appearance = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      {appearances.map((item, index) => (
        <ValueBlock
          key={item.id}
          value={`${index + 1}k`}
          title={item.label}
          subtitle="Revenue"
          variant="secondary"
          appearance={item.id as "solid" | "glowing" | "outline" | "outline-dashed" | "no-outline"}
          icon={Icons.GradientSquare}
        />
      ))}
    </div>
  );
};
