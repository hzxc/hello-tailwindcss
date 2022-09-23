import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';

interface Props {
  classes?: string;
  children?: React.ReactNode;
}

const defaultClass: string =
  'px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2';

export const NextImage: React.FC<Props> = (props) => {
  return <div></div>;
};
