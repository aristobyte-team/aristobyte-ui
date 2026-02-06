import * as React from 'react';
import { Card } from '@aristobyte-ui/card';

export const WithLabel = () => (
  <div style={{ maxWidth: 300 }}>
    <Card
      title="With Label"
      description="Add a label badge to the card header."
      label={{
        text: 'New',
        backgroundColor: '#1c398e66',
        borderColor: '#2b7fff4c',
        color: '#8ec5ff',
      }}
    />
  </div>
);
