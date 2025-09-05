"use client";

import * as React from "react";

import styles from "./ContactCard.module.scss";

export interface IContactCard {
  disabled?: boolean;
}

export const ContactCard: React.FC<IContactCard> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`contact-card ${styles["contact-card"]}`}
    />
  );
};
