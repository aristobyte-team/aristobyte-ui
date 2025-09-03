"use client";
import * as React from "react";
import { SocialMediaCard } from "@aristobyte-ui/presets";
import { Icons } from "@aristobyte-ui/utils";

export const Usage = () => {
  return (
    <SocialMediaCard
      title="Sarah Johnson"
      subtitle="UI/UX Designer"
      button={{ children: "Follow" }}
      content="Just shipped a new design system for our mobile app! 🎨 Excited to see how users respond to the improved experience."
      tags={[
        { children: "ui__ux" },
        { children: "ui_gradient" },
        { children: "ui_ux" },
        { children: "ui디자인" },
        { children: "ui_design_inspiration" },
        { children: "ui_design" },
        { children: "morrre_ui" },
        { children: "ui_lab" },
        { children: "ui_ux_idea" },
        { children: "ui銀行" },
        { children: "ui_trends" },
        { children: "ui_uxdesign" },
        { children: "ui_designer" },
      ]}
      metrics={[
        { icon: Icons.Heart, value: "247" },
        { icon: Icons.Comment, value: "32" },
        { icon: Icons.Share, value: "Share" },
      ]}
      avatar={{ icon: Icons.User }}
    />
  );
};
