"use client";

import * as React from "react";

export interface IContactCard {
  disabled?: boolean;
}

export const ContactCard: React.FC<IContactCard> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="contact-card" />;
};
