import * as React from 'react';
import { Label } from '@aristobyte-ui/label';

export const Radius = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Label text="None" radius="none" variant="default" />
    <Label text="Small" radius="sm" variant="default" />
    <Label text="Medium" radius="md" variant="default" />
    <Label text="Large" radius="lg" variant="default" />
    <Label text="Full" radius="full" variant="default" />
  </div>
);
