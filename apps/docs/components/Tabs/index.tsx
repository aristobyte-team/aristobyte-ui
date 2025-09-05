import * as React from "react";

import styles from "./Tabs.module.scss";
import { Button } from "@aristobyte-ui/button";

export interface ITabs {
  tabs: {
    buttonContent?: React.ReactElement | React.ReactNode | string;
    content: React.ReactElement | React.ReactNode | string;
  }[];
}

export const Tabs: React.FC<ITabs> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className={`tabs ${styles["tabs"]}`}>
      <div className={styles["tabs__buttons"]}>
        {tabs.map(({ buttonContent }, index) => (
          <Button
            key={index}
            className={`${styles["tabs__button"]} ${
              activeIndex === index ? styles["tabs__button--active"] : ""
            }`}
            onClick={() => setActiveIndex(index)}
            transparent
          >
            {
              // @TODO: This should be fixed: from consumer level we should be able to pass only string not components - once this is resolved the active tab should have text color white. Since we pass a whole component from consumer level it's hard to identify the most inner component which contains text, so we can change the color of it in different scenarios
              (buttonContent as React.ReactElement) || index
            }
          </Button>
        ))}
      </div>
      {tabs[activeIndex]!.content}
    </div>
  );
};
