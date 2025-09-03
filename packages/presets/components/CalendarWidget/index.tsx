"use client";

import * as React from "react";

import styles from "./CalendarWidget.module.scss";

export interface ICalendarWidget {}

export const ICalendarWidget: React.FC<ICalendarWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`calendar-widget ${styles["calendar-widget"]}`}
    />
  );
};
