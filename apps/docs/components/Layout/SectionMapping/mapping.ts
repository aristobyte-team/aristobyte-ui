import * as React from "react";

import { Intro, Installation, Import } from "@/components";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";
import { CodePreview } from "../CodePreview";

// @TODO: make 'config' and 't' optional props
export type ChildComponentPropsType = {
  category: string;
  unit: string;
  section: string;
  config: ConfigType;
  t: TranslateFunctionType;
};

export type MappingType = {
  [category: string]: {
    [unit: string]: {
      [section: string]: React.ComponentType<ChildComponentPropsType>;
    }[];
  };
};

export const mapping = {
  presets: {
    "social-media-card": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
      { usage: CodePreview },
      { disabled: CodePreview },
    ],
    "music-player": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "statistics-cards": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "settings-panel": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "action-buttons": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "status-indicators": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "navigation-pills": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "quick-actions": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "weather-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "notification-cards": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "todo-list": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "chat-messages": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "activity-feed": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "shopping-cart": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "file-upload-area": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "progress-tracker": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "media-controls": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "pricing-card": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "calendar-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "device-status": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "analytics-dashboard": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "contact-card": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "file-manager": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "quick-stats": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "mini-menu": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "notification-badges": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "profile-badge": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "time-&-location-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "energy-meter": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "cryptocurrency-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "gaming-controller-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "streak-counter": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "layer-stack-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "inspiration-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "nature-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "reading-progress": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "idea-bulb-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "rocket-launch-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "tool-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "color-palette-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "system-status": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "pomodoro-timer": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "database-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "network-status": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "code-stats": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "mouse-tracker": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "design-system": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "ai-assistant": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "office-building-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "team-collaboration-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "health-monitor": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "email-dashboard": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "document-scanner": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "social-engagement": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "video-call-widget": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "task-manager": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "fitness-tracker": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "cloud-storage": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "language-learning": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "stock-market": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "recipe-finder": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "travel-planner": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "budget-tracker": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "password-manager": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "photo-editor": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "music-production": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "shopping-list": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "habit-tracker": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    "code-editor": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
  },
  components: {
    button: [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
      { usage: CodePreview },
      { disabled: CodePreview },
      { sizes: CodePreview },
      { radius: CodePreview },
      { variants: CodePreview },
      { appearance: CodePreview },
      { loading: CodePreview },
      { "with-icon": CodePreview },
      { "button-group": CodePreview },
      { "button-group-disabled": CodePreview },
      { "button-group-alignment": CodePreview },
      { "button-group-size": CodePreview },
      { "button-group-radius": CodePreview },
      { "button-group-variant": CodePreview },
    ],
    card: [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    home: [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
    ],
    spinner: [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
      { usage: CodePreview },
      { variants: CodePreview },
      { types: CodePreview },
      { sizes: CodePreview },
    ],
    "message-box": [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
      { usage: CodePreview },
      { variants: CodePreview },
      { types: CodePreview },
      { radius: CodePreview },
      { "without-icon": CodePreview },
    ],
    switch: [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
      { usage: CodePreview },
      { labeled: CodePreview },
      { "align-label": CodePreview },
      { disabled: CodePreview },
      { checked: CodePreview },
      { variants: CodePreview },
      { sizes: CodePreview },
      { controlled: CodePreview },
      { "track-icon": CodePreview },
      { "thumb-icon": CodePreview },
    ],
    radio: [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
      { usage: CodePreview },
      { disabled: CodePreview },
      { sizes: CodePreview },
      { variants: CodePreview },
      { appearance: CodePreview },
      { "highlight-label": CodePreview },
      { "radio-group-align": CodePreview },
      { "align-label": CodePreview },
      { controlled: CodePreview },
    ],
    dropdown: [
      { intro: Intro },
      { installation: Installation },
      { import: Import },
      { usage: CodePreview },
      { disabled: CodePreview },
      { appearance: CodePreview },
    ],
  },
} as MappingType;
