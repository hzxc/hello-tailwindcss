import React, { ButtonHTMLAttributes, ReactElement } from 'react';

interface BaseProps {
  leftEl?: ReactElement;
  rightEl?: ReactElement;
}

const defaultInitialProps: BaseProps = {
  leftEl: undefined,
  rightEl: undefined,
};

type NativeProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass: string =
  'font-kanit text-purple-900 p-[6px] ring-1 ring-slate-200 rounded-xl align-middle';
export const PanIconButton: React.FC<NativeProps> = (props) => {
  const { className, children, leftEl, rightEl, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;
  return (
    <button className={mergeClass} {...restProps}>
      <div className='flex items-center justify-center space-x-1'>
        <span>{leftEl}</span>
        <span>{children}</span>
        <span>{rightEl}</span>
      </div>
    </button>
  );
};
