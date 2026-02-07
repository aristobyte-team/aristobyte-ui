'use client';
import * as React from 'react';
import { ValueBlock } from '@aristobyte-ui/presets';
import { Icons } from '@aristobyte-ui/utils';

const variants = [
  { id: 'default', label: 'Default', icon: Icons.Components },
  { id: 'primary', label: 'Primary', icon: Icons.ArrowRight },
  { id: 'secondary', label: 'Secondary', icon: Icons.GalleryVertical },
  { id: 'success', label: 'Success', icon: Icons.Success },
  { id: 'warning', label: 'Warning', icon: Icons.Warning },
  { id: 'error', label: 'Error', icon: Icons.Error },
];

export const Variants = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {variants.map((item, index) => (
        <ValueBlock
          key={item.id}
          value={index + 1}
          title={item.label}
          subtitle="This week"
          variant={item.id as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'}
          appearance="glowing"
          icon={item.icon}
        />
      ))}
    </div>
  );
};
