'use client';

import { Button } from '@aristobyte-ui/button';

export default function Component() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Button appearance="solid" variant="primary" text="Primary Button" />
      <Button appearance="outline" variant="success" text="Success Button" />
    </div>
  );
}
