'use client';

import * as React from 'react';

import './TeamCollaborationWidget.scss';

export interface ITeamCollaborationWidget {
  disabled?: boolean;
}

export const TeamCollaborationWidget: React.FC<ITeamCollaborationWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="team-collaboration-widget" />;
};
