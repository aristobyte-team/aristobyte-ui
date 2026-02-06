import * as React from 'react';
import { Card } from '@aristobyte-ui/card';
import { Icons } from '@aristobyte-ui/utils';

export const FullHeader = () => (
  <div style={{ maxWidth: 300 }}>
    <Card
      title="Full Header"
      description="Title, icon, and label rendered together for emphasis."
      icon={{ component: Icons.GradientSquare, size: 22, color: '#c27aff' }}
      label={{
        text: 'Featured',
        backgroundColor: '#59168b66',
        borderColor: '#ad46ff4c',
        color: '#dab2ff',
      }}
    />
  </div>
);
