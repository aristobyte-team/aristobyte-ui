import * as React from 'react';
import { Card } from '@aristobyte-ui/card';
import { MessageBox } from '@aristobyte-ui/message-box';
import { Spinner } from '@aristobyte-ui/spinner';
import { Icons } from '@aristobyte-ui/utils';

export const WithComponents = () => (
  <div style={{ maxWidth: 400 }}>
    <Card
      title="Card With Components"
      description="Embed other UI components as card content."
      icon={{ component: Icons.Success, size: 22, color: '#51ffa5' }}
      label={{
        text: 'New',
        backgroundColor: '#1c8e1c66',
        borderColor: '#47ff2b4b',
        color: '#9fff8e',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Spinner variant="success" size="sm" appearance="duo" />
          <span style={{ color: 'white' }}>Processing background tasks</span>
        </div>
        <MessageBox variant="success" withIcon>
          Everything is synced.
        </MessageBox>
      </div>
    </Card>
  </div>
);
