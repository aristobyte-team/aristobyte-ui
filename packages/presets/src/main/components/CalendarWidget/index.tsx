'use client';

import * as React from 'react';

import './CalendarWidget.scss';

export interface ICalendarWidget {
  disabled?: boolean;
}

export const CalendarWidget: React.FC<ICalendarWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="calendar-widget" />;
};
