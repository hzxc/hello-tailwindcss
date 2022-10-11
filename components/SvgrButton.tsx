import React, { ButtonHTMLAttributes, ReactComponentElement, ReactElement, ReactNode } from 'react';
interface SvgrButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hover?: string | boolean;
  ring?: string | boolean;
  rounded?: string | boolean;
  gap?: boolean;
}

const defaultInitialProps: SvgrButtonProps = {
  leftIcon: undefined,
  rightIcon: undefined,
  ring: 'ring-1 ring-gray-100 p-[6px]',
  hover: 'hover:bg-gray-100 hover:opacity-100',
  rounded: 'rounded-xl',
  gap: true,
};

type Props = SvgrButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string = `font-kanit active:translate-y-px`;
export const SvgrButton: React.FC<Props> = (props) => {
  const { className, children, leftIcon, rightIcon, ring, hover, rounded, gap, ...restProps } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${ring ? ' ' + ring : ''}${
    hover ? ' ' + hover : ''
  }${rounded ? ' ' + rounded : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <div className={`flex ${gap ? 'gap-1' : ''} items-center justify-between`}>
        {leftIcon ? leftIcon : undefined}
        <span>{children}</span>
        {rightIcon ? rightIcon : undefined}
      </div>
    </button>
  );
};
