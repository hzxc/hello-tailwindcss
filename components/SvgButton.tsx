import React, { ButtonHTMLAttributes, ReactComponentElement, ReactElement, ReactNode } from 'react';
interface SvgButtonProps {}

const defaultInitialProps: SvgButtonProps = {};

type Props = SvgButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string = `font-kanit active:translate-y-px hover:opacity-70`;
export const SvgButton: React.FC<Props> = (props) => {
  const { className, children, ...restProps } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  return (
    <button className={mergeClass} {...restProps}>
      <span>{children}</span>
    </button>
  );
};
