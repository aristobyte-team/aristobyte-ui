import * as React from 'react';
import { Card } from '@aristobyte-ui/card';
import { Icons } from '@aristobyte-ui/utils';

export const WithIcon = () => (
  <div style={{ maxWidth: 300 }}>
    <Card
      title="With Icon"
      description="Card header uses a decorative icon for emphasis."
      icon={{ component: Icons.GradientSquare, size: 22, color: '#51a2ff' }}
    />
  </div>
);
