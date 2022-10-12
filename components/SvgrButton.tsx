import React, { ButtonHTMLAttributes, ReactComponentElement, ReactElement, ReactNode } from 'react';
interface SvgrButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  gap?: boolean;
}

const defaultInitialProps: SvgrButtonProps = {
  leftIcon: undefined,
  rightIcon: undefined,
  gap: true,
};

type Props = SvgrButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string = `font-kanit active:translate-y-px`;
export const SvgrButton: React.FC<Props> = (props) => {
  const { className, children, leftIcon, rightIcon, gap, ...restProps } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <div className={`flex ${gap ? 'gap-1' : ''} items-center justify-between`}>
        {leftIcon ? leftIcon : undefined}
        {children ? <span>{children}</span> : undefined}
        {rightIcon ? rightIcon : undefined}
      </div>
    </button>
  );
};
