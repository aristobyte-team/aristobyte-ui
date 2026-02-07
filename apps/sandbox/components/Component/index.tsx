'use client';

import { ValueBlock } from '@aristobyte-ui/presets';
import { Icons } from '@aristobyte-ui/utils';

export default function Component() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ValueBlock value={47} title="Streak" subtitle="days" appearance="solid" icon={Icons.Fire} color="#ff8904" />
      <ValueBlock value={12} title="Layers" subtitle="active" appearance="solid" icon={Icons.Layers} color="#51A2ff" />
      <ValueBlock
        value="98.7%"
        title="Network"
        subtitle="uptime"
        appearance="solid"
        icon={Icons.Branching}
        color="#05df72"
      />
      <ValueBlock value="2.1K" title="Code" subtitle="lines" appearance="solid" icon={Icons.Code} color="#c27aff" />
      <ValueBlock
        value="32"
        title="Ideas"
        subtitle="Captured today"
        appearance="solid"
        icon={Icons.Bulb}
        color="#fdc700"
      />
    </div>
  );
}
