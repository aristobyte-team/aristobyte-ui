"use client";

import * as React from "react";

import styles from "./ContactCard.module.scss";

export interface IContactCard {}

export const IContactCard: React.FC<IContactCard> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`contact-card ${styles["contact-card"]}`}
    />
  );
};
