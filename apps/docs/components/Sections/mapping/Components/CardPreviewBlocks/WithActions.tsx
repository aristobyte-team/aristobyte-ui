import * as React from 'react';
import { Card } from '@aristobyte-ui/card';
import { Button } from '@aristobyte-ui/button';

export const WithActions = () => (
  <div style={{ maxWidth: 300 }}>
    <Card title="Card With Actions" description="Combine content and actions inside the card body.">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Button variant="primary">Primary Action</Button>
        <Button appearance="outline" variant="secondary">
          Secondary
        </Button>
      </div>
    </Card>
  </div>
);
