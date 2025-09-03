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
  presets: {
    "social-media-card": {
      usage: Presets.SocialMediaCardPreviewBlocks.Usage,
      disabled: Presets.SocialMediaCardPreviewBlocks.Disabled,
    },
    "music-player": {
      usage: Presets.MusicPlayerPreviewBlocks.Usage,
      disabled: Presets.MusicPlayerPreviewBlocks.Disabled,
    },
    "statistics-cards": {
      usage: Presets.StatisticsCardsPreviewBlocks.Usage,
      disabled: Presets.StatisticsCardsPreviewBlocks.Disabled,
    },
    "settings-panel": {
      usage: Presets.SettingsPanelPreviewBlocks.Usage,
      disabled: Presets.SettingsPanelPreviewBlocks.Disabled,
    },
    "action-buttons": {
      usage: Presets.ActionButtonsPreviewBlocks.Usage,
      disabled: Presets.ActionButtonsPreviewBlocks.Disabled,
    },
    "status-indicators": {
      usage: Presets.StatusIndicatorsPreviewBlocks.Usage,
      disabled: Presets.StatusIndicatorsPreviewBlocks.Disabled,
    },
    "navigation-pills": {
      usage: Presets.NavigationPillsPreviewBlocks.Usage,
      disabled: Presets.NavigationPillsPreviewBlocks.Disabled,
    },
    "quick-actions": {
      usage: Presets.QuickActionsPreviewBlocks.Usage,
      disabled: Presets.QuickActionsPreviewBlocks.Disabled,
    },
    "weather-widget": {
      usage: Presets.WeatherWidgetPreviewBlocks.Usage,
      disabled: Presets.WeatherWidgetPreviewBlocks.Disabled,
    },
    "notification-cards": {
      usage: Presets.NotificationCardsPreviewBlocks.Usage,
      disabled: Presets.NotificationCardsPreviewBlocks.Disabled,
    },
    "todo-list": {
      usage: Presets.TodoListPreviewBlocks.Usage,
      disabled: Presets.TodoListPreviewBlocks.Disabled,
    },
    "chat-messages": {
      usage: Presets.ChatMessagesPreviewBlocks.Usage,
      disabled: Presets.ChatMessagesPreviewBlocks.Disabled,
    },
    "activity-feed": {
      usage: Presets.ActivityFeedPreviewBlocks.Usage,
      disabled: Presets.ActivityFeedPreviewBlocks.Disabled,
    },
    "shopping-cart": {
      usage: Presets.ShoppingCartPreviewBlocks.Usage,
      disabled: Presets.ShoppingCartPreviewBlocks.Disabled,
    },
    "file-upload-area": {
      usage: Presets.FileUploadAreaPreviewBlocks.Usage,
      disabled: Presets.FileUploadAreaPreviewBlocks.Disabled,
    },
    "progress-tracker": {
      usage: Presets.ProgressTrackerPreviewBlocks.Usage,
      disabled: Presets.ProgressTrackerPreviewBlocks.Disabled,
    },
    "media-controls": {
      usage: Presets.MediaControlsPreviewBlocks.Usage,
      disabled: Presets.MediaControlsPreviewBlocks.Disabled,
    },
    "pricing-card": {
      usage: Presets.PricingCardPreviewBlocks.Usage,
      disabled: Presets.PricingCardPreviewBlocks.Disabled,
    },
    "calendar-widget": {
      usage: Presets.CalendarWidgetPreviewBlocks.Usage,
      disabled: Presets.CalendarWidgetPreviewBlocks.Disabled,
    },
    "device-status": {
      usage: Presets.DeviceStatusPreviewBlocks.Usage,
      disabled: Presets.DeviceStatusPreviewBlocks.Disabled,
    },
    "analytics-dashboard": {
      usage: Presets.AnalyticsDashboardPreviewBlocks.Usage,
      disabled: Presets.AnalyticsDashboardPreviewBlocks.Disabled,
    },
    "contact-card": {
      usage: Presets.ContactCardPreviewBlocks.Usage,
      disabled: Presets.ContactCardPreviewBlocks.Disabled,
    },
    "file-manager": {
      usage: Presets.FileManagerPreviewBlocks.Usage,
      disabled: Presets.FileManagerPreviewBlocks.Disabled,
    },
    "quick-stats": {
      usage: Presets.QuickStatsPreviewBlocks.Usage,
      disabled: Presets.QuickStatsPreviewBlocks.Disabled,
    },
    "mini-menu": {
      usage: Presets.MiniMenuPreviewBlocks.Usage,
      disabled: Presets.MiniMenuPreviewBlocks.Disabled,
    },
    "notification-badges": {
      usage: Presets.NotificationBadgesPreviewBlocks.Usage,
      disabled: Presets.NotificationBadgesPreviewBlocks.Disabled,
    },
    "profile-badge": {
      usage: Presets.ProfileBadgePreviewBlocks.Usage,
      disabled: Presets.ProfileBadgePreviewBlocks.Disabled,
    },
    "time-location-widget": {
      usage: Presets.TimeLocationWidgetPreviewBlocks.Usage,
      disabled: Presets.TimeLocationWidgetPreviewBlocks.Disabled,
    },
    "energy-meter": {
      usage: Presets.EnergyMeterPreviewBlocks.Usage,
      disabled: Presets.EnergyMeterPreviewBlocks.Disabled,
    },
    "cryptocurrency-widget": {
      usage: Presets.CryptocurrencyWidgetPreviewBlocks.Usage,
      disabled: Presets.CryptocurrencyWidgetPreviewBlocks.Disabled,
    },
    "gaming-controller-widget": {
      usage: Presets.GamingControllerWidgetPreviewBlocks.Usage,
      disabled: Presets.GamingControllerWidgetPreviewBlocks.Disabled,
    },
    "streak-counter": {
      usage: Presets.StreakCounterPreviewBlocks.Usage,
      disabled: Presets.StreakCounterPreviewBlocks.Disabled,
    },
    "layer-stack-widget": {
      usage: Presets.LayerStackWidgetPreviewBlocks.Usage,
      disabled: Presets.LayerStackWidgetPreviewBlocks.Disabled,
    },
    "inspiration-widget": {
      usage: Presets.InspirationWidgetPreviewBlocks.Usage,
      disabled: Presets.InspirationWidgetPreviewBlocks.Disabled,
    },
    "nature-widget": {
      usage: Presets.NatureWidgetPreviewBlocks.Usage,
      disabled: Presets.NatureWidgetPreviewBlocks.Disabled,
    },
    "reading-progress": {
      usage: Presets.ReadingProgressPreviewBlocks.Usage,
      disabled: Presets.ReadingProgressPreviewBlocks.Disabled,
    },
    "idea-bulb-widget": {
      usage: Presets.IdeaBulbWidgetPreviewBlocks.Usage,
      disabled: Presets.IdeaBulbWidgetPreviewBlocks.Disabled,
    },
    "rocket-launch-widget": {
      usage: Presets.RocketLaunchWidgetPreviewBlocks.Usage,
      disabled: Presets.RocketLaunchWidgetPreviewBlocks.Disabled,
    },
    "tool-widget": {
      usage: Presets.ToolWidgetPreviewBlocks.Usage,
      disabled: Presets.ToolWidgetPreviewBlocks.Disabled,
    },
    "color-palette-widget": {
      usage: Presets.ColorPaletteWidgetPreviewBlocks.Usage,
      disabled: Presets.ColorPaletteWidgetPreviewBlocks.Disabled,
    },
    "system-status": {
      usage: Presets.SystemStatusPreviewBlocks.Usage,
      disabled: Presets.SystemStatusPreviewBlocks.Disabled,
    },
    "pomodoro-timer": {
      usage: Presets.PomodoroTimerPreviewBlocks.Usage,
      disabled: Presets.PomodoroTimerPreviewBlocks.Disabled,
    },
    "database-widget": {
      usage: Presets.DatabaseWidgetPreviewBlocks.Usage,
      disabled: Presets.DatabaseWidgetPreviewBlocks.Disabled,
    },
    "network-status": {
      usage: Presets.NetworkStatusPreviewBlocks.Usage,
      disabled: Presets.NetworkStatusPreviewBlocks.Disabled,
    },
    "code-stats": {
      usage: Presets.CodeStatsPreviewBlocks.Usage,
      disabled: Presets.CodeStatsPreviewBlocks.Disabled,
    },
    "mouse-tracker": {
      usage: Presets.MouseTrackerPreviewBlocks.Usage,
      disabled: Presets.MouseTrackerPreviewBlocks.Disabled,
    },
    "design-system": {
      usage: Presets.DesignSystemPreviewBlocks.Usage,
      disabled: Presets.DesignSystemPreviewBlocks.Disabled,
    },
    "ai-assistant": {
      usage: Presets.AIAssistantPreviewBlocks.Usage,
      disabled: Presets.AIAssistantPreviewBlocks.Disabled,
    },
    "office-building-widget": {
      usage: Presets.OfficeBuildingWidgetPreviewBlocks.Usage,
      disabled: Presets.OfficeBuildingWidgetPreviewBlocks.Disabled,
    },
    "team-collaboration-widget": {
      usage: Presets.TeamCollaborationWidgetPreviewBlocks.Usage,
      disabled: Presets.TeamCollaborationWidgetPreviewBlocks.Disabled,
    },
    "health-monitor": {
      usage: Presets.HealthMonitorPreviewBlocks.Usage,
      disabled: Presets.HealthMonitorPreviewBlocks.Disabled,
    },
    "email-dashboard": {
      usage: Presets.EmailDashboardPreviewBlocks.Usage,
      disabled: Presets.EmailDashboardPreviewBlocks.Disabled,
    },
    "document-scanner": {
      usage: Presets.DocumentScannerPreviewBlocks.Usage,
      disabled: Presets.DocumentScannerPreviewBlocks.Disabled,
    },
    "social-engagement": {
      usage: Presets.SocialEngagementPreviewBlocks.Usage,
      disabled: Presets.SocialEngagementPreviewBlocks.Disabled,
    },
    "video-call-widget": {
      usage: Presets.VideoCallWidgetPreviewBlocks.Usage,
      disabled: Presets.VideoCallWidgetPreviewBlocks.Disabled,
    },
    "task-manager": {
      usage: Presets.TaskManagerPreviewBlocks.Usage,
      disabled: Presets.TaskManagerPreviewBlocks.Disabled,
    },
    "fitness-tracker": {
      usage: Presets.FitnessTrackerPreviewBlocks.Usage,
      disabled: Presets.FitnessTrackerPreviewBlocks.Disabled,
    },
    "cloud-storage": {
      usage: Presets.CloudStoragePreviewBlocks.Usage,
      disabled: Presets.CloudStoragePreviewBlocks.Disabled,
    },
    "language-learning": {
      usage: Presets.LanguageLearningPreviewBlocks.Usage,
      disabled: Presets.LanguageLearningPreviewBlocks.Disabled,
    },
    "stock-market": {
      usage: Presets.StockMarketPreviewBlocks.Usage,
      disabled: Presets.StockMarketPreviewBlocks.Disabled,
    },
    "recipe-finder": {
      usage: Presets.RecipeFinderPreviewBlocks.Usage,
      disabled: Presets.RecipeFinderPreviewBlocks.Disabled,
    },
    "travel-planner": {
      usage: Presets.TravelPlannerPreviewBlocks.Usage,
      disabled: Presets.TravelPlannerPreviewBlocks.Disabled,
    },
    "budget-tracker": {
      usage: Presets.BudgetTrackerPreviewBlocks.Usage,
      disabled: Presets.BudgetTrackerPreviewBlocks.Disabled,
    },
    "password-manager": {
      usage: Presets.PasswordManagerPreviewBlocks.Usage,
      disabled: Presets.PasswordManagerPreviewBlocks.Disabled,
    },
    "photo-editor": {
      usage: Presets.PhotoEditorPreviewBlocks.Usage,
      disabled: Presets.PhotoEditorPreviewBlocks.Disabled,
    },
    "music-production": {
      usage: Presets.MusicProductionPreviewBlocks.Usage,
      disabled: Presets.MusicProductionPreviewBlocks.Disabled,
    },
    "shopping-list": {
      usage: Presets.ShoppingListPreviewBlocks.Usage,
      disabled: Presets.ShoppingListPreviewBlocks.Disabled,
    },
    "habit-tracker": {
      usage: Presets.HabitTrackerPreviewBlocks.Usage,
      disabled: Presets.HabitTrackerPreviewBlocks.Disabled,
    },
    "code-editor": {
      usage: Presets.CodeEditorPreviewBlocks.Usage,
      disabled: Presets.CodeEditorPreviewBlocks.Disabled,
    },
  },
  components: {
    button: {
      usage: Components.ButtonPreviewBlocks.Usage,
      disabled: Components.ButtonPreviewBlocks.Disabled,
      loading: Components.ButtonPreviewBlocks.Loading,
      sizes: Components.ButtonPreviewBlocks.Sizes,
      radius: Components.ButtonPreviewBlocks.Radius,
      variants: Components.ButtonPreviewBlocks.Variants,
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
      usage: Components.SpinnerPreviewBlocks.Usage,
      sizes: Components.SpinnerPreviewBlocks.Sizes,
      types: Components.SpinnerPreviewBlocks.Types,
      variants: Components.SpinnerPreviewBlocks.Variants,
    },
    "message-box": {
      usage: Components.MessageBoxPreviewBlocks.Usage,
      types: Components.MessageBoxPreviewBlocks.Types,
      variants: Components.MessageBoxPreviewBlocks.Variants,
      radius: Components.MessageBoxPreviewBlocks.Radius,
      "without-icon": Components.MessageBoxPreviewBlocks.WithoutIcon,
    },
    switch: {
      checked: Components.SwitchPreviewBlocks.Checked,
      usage: Components.SwitchPreviewBlocks.Usage,
      variants: Components.SwitchPreviewBlocks.Variants,
      labeled: Components.SwitchPreviewBlocks.Labeled,
      "align-label": Components.SwitchPreviewBlocks.AlignLabel,
      disabled: Components.SwitchPreviewBlocks.Disabled,
      sizes: Components.SwitchPreviewBlocks.Sizes,
      controlled: Components.SwitchPreviewBlocks.Controlled,
      "track-icon": Components.SwitchPreviewBlocks.TrackIcon,
      "thumb-icon": Components.SwitchPreviewBlocks.ThumbIcon,
    },
    radio: {
      usage: Components.RadioPreviewBlocks.Usage,
      disabled: Components.RadioPreviewBlocks.Disabled,
      sizes: Components.RadioPreviewBlocks.Sizes,
      variants: Components.RadioPreviewBlocks.Variants,
      appearance: Components.RadioPreviewBlocks.Appearance,
      "highlight-label": Components.RadioPreviewBlocks.HighlightLabel,
      "radio-group-align": Components.RadioPreviewBlocks.RadioGroupAlign,
      "align-label": Components.RadioPreviewBlocks.AlignLabel,
      controlled: Components.RadioPreviewBlocks.Controlled,
    },
    dropdown: {
      usage: Components.DropdownPreviewBlocks.Usage,
      disabled: Components.DropdownPreviewBlocks.Disabled,
      appearance: Components.DropdownPreviewBlocks.Appearance,
    },
  },
};
