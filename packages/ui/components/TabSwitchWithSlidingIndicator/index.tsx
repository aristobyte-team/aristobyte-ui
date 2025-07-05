import * as React from "react";

import styles from "./TabSwitchWithSlidingIndicator.module.scss";

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
    <div className={styles["tab-switch-with-sliding-indicator"]}>
      <div className={styles["tab-switch-with-sliding-indicator__tabs"]}>
        {tabs.map(({ buttonContent }, index) => (
          <button
            key={index}
            className={`${styles["tab-switch-with-sliding-indicator__tab"]} ${activeIndex === index ? styles[" tab-switch-with-sliding-indicator__tab--active"] : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {buttonContent || index}
          </button>
        ))}
        <span
          className={styles["tab-switch-with-sliding-indicator__bar"]}
          style={{ left: `${currentIndex * 80}px` }}
        />
      </div>
      <div className={styles["tab-switch-with-sliding-indicator__content"]}>
        {tabs[currentIndex]!.content}
      </div>
    </div>
  );
};
