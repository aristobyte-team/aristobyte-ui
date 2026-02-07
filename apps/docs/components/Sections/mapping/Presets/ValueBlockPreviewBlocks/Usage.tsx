'use client';
import * as React from 'react';
import { ValueBlock } from '@aristobyte-ui/presets';
import { Icons } from '@aristobyte-ui/utils';

export const Usage = () => {
  return (
    <ValueBlock value={128} title="Streak" subtitle="days" variant="warning" appearance="outline" icon={Icons.Fire} />
  );
};
