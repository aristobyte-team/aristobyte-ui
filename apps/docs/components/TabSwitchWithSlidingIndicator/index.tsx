import * as React from "react";

import "./TabSwitchWithSlidingIndicator.scss";

export interface ITabSwitchWithSlidingIndicator {
  tabs: {
    buttonContent?: React.ReactElement | React.ReactNode | string;
    content: React.ReactElement | React.ReactNode | string;
  }[];
}

export const TabSwitchWithSlidingIndicator: React.FC<
  ITabSwitchWithSlidingIndicator
> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const currentIndex = tabs.findIndex((_, i) => i === activeIndex);

  return (
    <div className="tab-switch-with-sliding-indicator">
      <div className="tab-switch-with-sliding-indicator__tabs">
        {tabs.map(({ buttonContent }, index) => (
          <button
            key={index}
            className={
              "tab-switch-with-sliding-indicator__tab" +
              (activeIndex === index
                ? " tab-switch-with-sliding-indicator__tab--active"
                : "")
            }
            onClick={() => setActiveIndex(index)}
          >
            {
              // @TODO: This should be fixed: from consumer level we should be able to pass only string not components - once this is resolved the active tab should have text color white. Since we pass a whole component from consumer level it's hard to identify the most inner component which contains text, so we can change the color of it in different scenarios
              buttonContent || index
            }
          </button>
        ))}
        <span
          className="tab-switch-with-sliding-indicator__bar"
          style={{ left: `${currentIndex * 80}px` }}
        />
      </div>
      <div className="tab-switch-with-sliding-indicator__content">
        {tabs[currentIndex]!.content}
      </div>
    </div>
  );
};
