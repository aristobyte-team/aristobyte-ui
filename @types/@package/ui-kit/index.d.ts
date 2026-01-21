declare module '@package/ui-kit' {
  // @ts-ignore
  import React, { ReactNode } from 'react';

  interface ButtonPropsType {
    name?: string;
    type?: string;
    onClick?: (e: any) => void;
    outfit?: string;
    disabled?: boolean;
    className?: string;
    innerRef?: any;
    children?: any;
  }
}
