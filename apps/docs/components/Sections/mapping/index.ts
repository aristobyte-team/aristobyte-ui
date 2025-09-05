import * as React from "react";

import * as Components from "./Components";
import * as Presets from "./Presets";

export type MappingType = {
  [category: string]: {
    [unit: string]: {
      [section: string]: () => React.JSX.Element;
    };
  };
};

export const mapping: MappingType = {
  "get-started": { overview: {} },
  presets: {
    "social-media-card": {
      disabled: Presets.SocialMediaCardPreviewBlocks.Disabled,
    },
    "music-player": {
      disabled: Presets.MusicPlayerPreviewBlocks.Disabled,
    },
    "statistics-cards": {
      disabled: Presets.StatisticsCardsPreviewBlocks.Disabled,
    },
    "settings-panel": {
      disabled: Presets.SettingsPanelPreviewBlocks.Disabled,
    },
    "action-buttons": {
      disabled: Presets.ActionButtonsPreviewBlocks.Disabled,
    },
    "status-indicators": {
      disabled: Presets.StatusIndicatorsPreviewBlocks.Disabled,
    },
    "navigation-pills": {
      disabled: Presets.NavigationPillsPreviewBlocks.Disabled,
    },
    "quick-actions": {
      disabled: Presets.QuickActionsPreviewBlocks.Disabled,
    },
    "weather-widget": {
      disabled: Presets.WeatherWidgetPreviewBlocks.Disabled,
    },
    "notification-cards": {
      disabled: Presets.NotificationCardsPreviewBlocks.Disabled,
    },
    "todo-list": {
      disabled: Presets.TodoListPreviewBlocks.Disabled,
    },
    "chat-messages": {
      disabled: Presets.ChatMessagesPreviewBlocks.Disabled,
    },
    "activity-feed": {
      disabled: Presets.ActivityFeedPreviewBlocks.Disabled,
    },
    "shopping-cart": {
      disabled: Presets.ShoppingCartPreviewBlocks.Disabled,
    },
    "file-upload-area": {
      disabled: Presets.FileUploadAreaPreviewBlocks.Disabled,
    },
    "progress-tracker": {
      disabled: Presets.ProgressTrackerPreviewBlocks.Disabled,
    },
    "media-controls": {
      disabled: Presets.MediaControlsPreviewBlocks.Disabled,
    },
    "pricing-card": {
      disabled: Presets.PricingCardPreviewBlocks.Disabled,
    },
    "calendar-widget": {
      disabled: Presets.CalendarWidgetPreviewBlocks.Disabled,
    },
    "device-status": {
      disabled: Presets.DeviceStatusPreviewBlocks.Disabled,
    },
    "analytics-dashboard": {
      disabled: Presets.AnalyticsDashboardPreviewBlocks.Disabled,
    },
    "contact-card": {
      disabled: Presets.ContactCardPreviewBlocks.Disabled,
    },
    "file-manager": {
      disabled: Presets.FileManagerPreviewBlocks.Disabled,
    },
    "quick-stats": {
      disabled: Presets.QuickStatsPreviewBlocks.Disabled,
    },
    "mini-menu": {
      disabled: Presets.MiniMenuPreviewBlocks.Disabled,
    },
    "notification-badges": {
      disabled: Presets.NotificationBadgesPreviewBlocks.Disabled,
    },
    "profile-badge": {
      disabled: Presets.ProfileBadgePreviewBlocks.Disabled,
    },
    "time-location-widget": {
      disabled: Presets.TimeLocationWidgetPreviewBlocks.Disabled,
    },
    "energy-meter": {
      disabled: Presets.EnergyMeterPreviewBlocks.Disabled,
    },
    "cryptocurrency-widget": {
      disabled: Presets.CryptocurrencyWidgetPreviewBlocks.Disabled,
    },
    "gaming-controller-widget": {
      disabled: Presets.GamingControllerWidgetPreviewBlocks.Disabled,
    },
    "streak-counter": {
      disabled: Presets.StreakCounterPreviewBlocks.Disabled,
    },
    "layer-stack-widget": {
      disabled: Presets.LayerStackWidgetPreviewBlocks.Disabled,
    },
    "inspiration-widget": {
      disabled: Presets.InspirationWidgetPreviewBlocks.Disabled,
    },
    "nature-widget": {
      disabled: Presets.NatureWidgetPreviewBlocks.Disabled,
    },
    "reading-progress": {
      disabled: Presets.ReadingProgressPreviewBlocks.Disabled,
    },
    "idea-bulb-widget": {
      disabled: Presets.IdeaBulbWidgetPreviewBlocks.Disabled,
    },
    "rocket-launch-widget": {
      disabled: Presets.RocketLaunchWidgetPreviewBlocks.Disabled,
    },
    "tool-widget": {
      disabled: Presets.ToolWidgetPreviewBlocks.Disabled,
    },
    "color-palette-widget": {
      disabled: Presets.ColorPaletteWidgetPreviewBlocks.Disabled,
    },
    "system-status": {
      disabled: Presets.SystemStatusPreviewBlocks.Disabled,
    },
    "pomodoro-timer": {
      disabled: Presets.PomodoroTimerPreviewBlocks.Disabled,
    },
    "database-widget": {
      disabled: Presets.DatabaseWidgetPreviewBlocks.Disabled,
    },
    "network-status": {
      disabled: Presets.NetworkStatusPreviewBlocks.Disabled,
    },
    "code-stats": {
      disabled: Presets.CodeStatsPreviewBlocks.Disabled,
    },
    "mouse-tracker": {
      disabled: Presets.MouseTrackerPreviewBlocks.Disabled,
    },
    "design-system": {
      disabled: Presets.DesignSystemPreviewBlocks.Disabled,
    },
    "ai-assistant": {
      disabled: Presets.AIAssistantPreviewBlocks.Disabled,
    },
    "office-building-widget": {
      disabled: Presets.OfficeBuildingWidgetPreviewBlocks.Disabled,
    },
    "team-collaboration-widget": {
      disabled: Presets.TeamCollaborationWidgetPreviewBlocks.Disabled,
    },
    "health-monitor": {
      disabled: Presets.HealthMonitorPreviewBlocks.Disabled,
    },
    "email-dashboard": {
      disabled: Presets.EmailDashboardPreviewBlocks.Disabled,
    },
    "document-scanner": {
      disabled: Presets.DocumentScannerPreviewBlocks.Disabled,
    },
    "social-engagement": {
      disabled: Presets.SocialEngagementPreviewBlocks.Disabled,
    },
    "video-call-widget": {
      disabled: Presets.VideoCallWidgetPreviewBlocks.Disabled,
    },
    "task-manager": {
      disabled: Presets.TaskManagerPreviewBlocks.Disabled,
    },
    "fitness-tracker": {
      disabled: Presets.FitnessTrackerPreviewBlocks.Disabled,
    },
    "cloud-storage": {
      disabled: Presets.CloudStoragePreviewBlocks.Disabled,
    },
    "language-learning": {
      disabled: Presets.LanguageLearningPreviewBlocks.Disabled,
    },
    "stock-market": {
      disabled: Presets.StockMarketPreviewBlocks.Disabled,
    },
    "recipe-finder": {
      disabled: Presets.RecipeFinderPreviewBlocks.Disabled,
    },
    "travel-planner": {
      disabled: Presets.TravelPlannerPreviewBlocks.Disabled,
    },
    "budget-tracker": {
      disabled: Presets.BudgetTrackerPreviewBlocks.Disabled,
    },
    "password-manager": {
      disabled: Presets.PasswordManagerPreviewBlocks.Disabled,
    },
    "photo-editor": {
      disabled: Presets.PhotoEditorPreviewBlocks.Disabled,
    },
    "music-production": {
      disabled: Presets.MusicProductionPreviewBlocks.Disabled,
    },
    "shopping-list": {
      disabled: Presets.ShoppingListPreviewBlocks.Disabled,
    },
    "habit-tracker": {
      disabled: Presets.HabitTrackerPreviewBlocks.Disabled,
    },
    "code-editor": {
      disabled: Presets.CodeEditorPreviewBlocks.Disabled,
    },
  },
  components: {
    button: {
      variants: Components.ButtonPreviewBlocks.Variants,
      disabled: Components.ButtonPreviewBlocks.Disabled,
      loading: Components.ButtonPreviewBlocks.Loading,
      sizes: Components.ButtonPreviewBlocks.Sizes,
      radius: Components.ButtonPreviewBlocks.Radius,
      appearance: Components.ButtonPreviewBlocks.Appearance,
      "with-icon": Components.ButtonPreviewBlocks.WithIcon,
      "button-group": Components.ButtonPreviewBlocks.ButtonGroup,
      "button-group-disabled":
        Components.ButtonPreviewBlocks.ButtonGroupDisabled,
      "button-group-alignment":
        Components.ButtonPreviewBlocks.ButtonGroupAlignment,
      "button-group-radius": Components.ButtonPreviewBlocks.ButtonGroupRadius,
      "button-group-size": Components.ButtonPreviewBlocks.ButtonGroupSize,
      "button-group-variant": Components.ButtonPreviewBlocks.ButtonGroupVariant,
    },
    spinner: {
      variants: Components.SpinnerPreviewBlocks.Variants,
      sizes: Components.SpinnerPreviewBlocks.Sizes,
      types: Components.SpinnerPreviewBlocks.Types,
    },
    "message-box": {
      variants: Components.MessageBoxPreviewBlocks.Variants,
      types: Components.MessageBoxPreviewBlocks.Types,
      radius: Components.MessageBoxPreviewBlocks.Radius,
      "without-icon": Components.MessageBoxPreviewBlocks.WithoutIcon,
    },
    switch: {
      variants: Components.SwitchPreviewBlocks.Variants,
      checked: Components.SwitchPreviewBlocks.Checked,
      labeled: Components.SwitchPreviewBlocks.Labeled,
      "align-label": Components.SwitchPreviewBlocks.AlignLabel,
      disabled: Components.SwitchPreviewBlocks.Disabled,
      sizes: Components.SwitchPreviewBlocks.Sizes,
      controlled: Components.SwitchPreviewBlocks.Controlled,
      "track-icon": Components.SwitchPreviewBlocks.TrackIcon,
      "thumb-icon": Components.SwitchPreviewBlocks.ThumbIcon,
    },
    radio: {
      variants: Components.RadioPreviewBlocks.Variants,
      disabled: Components.RadioPreviewBlocks.Disabled,
      sizes: Components.RadioPreviewBlocks.Sizes,
      appearance: Components.RadioPreviewBlocks.Appearance,
      "highlight-label": Components.RadioPreviewBlocks.HighlightLabel,
      "radio-group-align": Components.RadioPreviewBlocks.RadioGroupAlign,
      "align-label": Components.RadioPreviewBlocks.AlignLabel,
      controlled: Components.RadioPreviewBlocks.Controlled,
    },
    dropdown: {
      disabled: Components.DropdownPreviewBlocks.Disabled,
      appearance: Components.DropdownPreviewBlocks.Appearance,
    },
  },
};
