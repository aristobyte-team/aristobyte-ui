"use client";
import * as React from "react";
import { ValueBlock } from "@aristobyte-ui/presets";
import { Icons } from "@aristobyte-ui/utils";

export const Usage = () => {
  return (
    <ValueBlock
      value="128"
      title="New Users"
      subtitle="Last 24 hours"
      variant="primary"
      appearance="solid"
      icon={Icons.UserGroup}
    />
  );
};
