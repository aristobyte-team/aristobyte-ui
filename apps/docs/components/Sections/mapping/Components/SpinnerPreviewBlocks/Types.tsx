import * as React from 'react';
import { Spinner } from '@aristobyte-ui/spinner';

export const Types = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Spinner variant="primary" appearance="default" />
      <Spinner variant="primary" appearance="duo" />
      <Spinner variant="primary" appearance="gradient" />
      <Spinner variant="primary" appearance="pulse" />
      <Spinner variant="primary" appearance="pulse-duo" />
    </div>
  );
};
