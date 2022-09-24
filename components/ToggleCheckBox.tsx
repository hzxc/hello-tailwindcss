import React, { FC, InputHTMLAttributes } from 'react';

interface BaseProps {
  width: string;
  height: string;
}

type NativeInputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
const defaultClass: string =
  'cursor-pointer appearance-none rounded-full border transition-shadow duration-200';

export const ToggleCheckBox: React.FC<NativeInputProps> = (props) => {
  const { className, width, height, checked, ...restProps } = props;
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;
  return (
    <input
      style={{
        width: width,
        height: height,
        boxShadow: `${
          checked ? height : '-' + height
        } 0 0 2px rgb(255, 255, 255) inset,0 0 0 2px rgb(255, 255, 255) inset`,
      }}
      className={mergeClass}
      type='checkbox'
      checked
      {...restProps}
    ></input>
  );
};
