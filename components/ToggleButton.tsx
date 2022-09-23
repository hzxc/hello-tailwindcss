import React, { FC, InputHTMLAttributes } from 'react';

interface BaseProps {
  width: string;
  height: string;
}

type NativeInputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
const defaultClass: string =
  'cursor-pointer appearance-none rounded-full border transition-shadow duration-300';

export const ToggleButton: React.FC<NativeInputProps> = (props) => {
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
    />
  );

  // return checked ? (
  //   <input
  //     style={{
  //       width: width,
  //       height: height,
  //       boxShadow: `${height} 0 0 2px rgb(255, 255, 255) inset,0 0 0 2px rgb(255, 255, 255) inset;`,
  //     }}
  //     className={mergeClass}
  //     type='checkbox'
  //     checked
  //     {...restProps}
  //   ></input>
  // ) : (
  //   <input
  //     style={{
  //       width: width,
  //       height: height,
  //       boxShadow: `calc(${height} * -1) 0 0 2px rgb(255, 255, 255) inset,0 0 0 2px rgb(255, 255, 255) inset;`,
  //     }}
  //     className={mergeClass}
  //     type='checkbox'
  //     {...restProps}
  //   ></input>
  // );
};
