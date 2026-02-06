import * as React from 'react';
import { Label } from '@aristobyte-ui/label';

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Label text="Extra small" size="xsm" variant="secondary" />
    <Label text="Small" size="sm" variant="secondary" />
    <Label text="Medium" size="md" variant="secondary" />
    <Label text="Large" size="lg" variant="secondary" />
    <Label text="Extra large" size="xlg" variant="secondary" />
  </div>
);
