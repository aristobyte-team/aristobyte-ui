import * as React from 'react';
import { Card } from '@aristobyte-ui/card';
import { Button } from '@aristobyte-ui/button';

export const WithContent = () => (
  <div style={{ maxWidth: 300 }}>
    <Card title="Card With Content" description="Cards can render arbitrary content blocks.">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </Card>
  </div>
);
