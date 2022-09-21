import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';

interface ButtonProps {
  classes?: string;
  children?: React.ReactNode;
}

const defaultClasses: string = '';

export const PanButton: React.FC<ButtonProps> = (props) => {
  const { classes, children, ...restProps } = props;
  const className = `${defaultClasses} ${classes}`;
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};
