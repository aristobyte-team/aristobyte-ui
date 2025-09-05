"use client";

import * as React from "react";

import styles from "./TeamCollaborationWidget.module.scss";

export interface ITeamCollaborationWidget {
  disabled?: boolean;
}

export const TeamCollaborationWidget: React.FC<ITeamCollaborationWidget> = ({
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
