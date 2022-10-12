import React, { ButtonHTMLAttributes, ReactComponentElement, ReactElement, ReactNode } from 'react';
interface PanSvgrButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hover?: string | boolean;
  ring?: string | boolean;
  rounded?: string | boolean;
}

const defaultInitialProps: PanSvgrButtonProps = {
  leftIcon: undefined,
  rightIcon: undefined,
  ring: 'ring-1 ring-gray-100 p-[6px]',
  hover: 'hover:bg-gray-100 hover:opacity-100',
  rounded: 'rounded-xl',
};

type Props = PanSvgrButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string = `font-kanit active:translate-y-px`;
export const PanSvgrButton: React.FC<Props> = (props) => {
  const { className, children, leftIcon, rightIcon, ring, hover, rounded, ...restProps } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${ring ? ' ' + ring : ''}${
    hover ? ' ' + hover : ''
  }${rounded ? ' ' + rounded : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <div className={`flex gap-1 items-center justify-between`}>
        {leftIcon ? leftIcon : undefined}
        {children ? <span>{children}</span> : undefined}
        {rightIcon ? rightIcon : undefined}
      </div>
    </button>
  );
};
