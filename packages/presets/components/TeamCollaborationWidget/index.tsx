"use client";

import * as React from "react";

import styles from "./TeamCollaborationWidget.module.scss";

export interface ITeamCollaborationWidget {}

export const ITeamCollaborationWidget: React.FC<ITeamCollaborationWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`team-collaboration-widget ${styles["team-collaboration-widget"]}`}
    />
  );
};
