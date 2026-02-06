'use client';
import * as React from 'react';
import { Button } from '@aristobyte-ui/button';

export const Loading = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Button variant="primary" isLoading spinnerAppearance="default">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerAppearance="duo">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerAppearance="gradient">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerAppearance="pulse">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerAppearance="pulse-duo">
        Loading
      </Button>
    </div>
  );
};
