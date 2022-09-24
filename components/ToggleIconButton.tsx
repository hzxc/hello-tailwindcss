import React, { ButtonHTMLAttributes, ReactElement, useEffect, useRef, useState } from 'react';

import { RiCheckboxBlankCircleFill } from 'react-icons/Ri';
interface BaseProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  checked: boolean;
  spread?: 0 | '1px' | '2px' | '3px';
  shadowColor?: string;
  checkedShadowColor?: string;
  outlineColor?: string;
  checkedOutlineColor?: string;
}

const defaultInitialProps: BaseProps = {
  leftIcon: <RiCheckboxBlankCircleFill opacity={0} />,
  rightIcon: <RiCheckboxBlankCircleFill opacity={0} />,
  checked: false,
  spread: '2px',
  shadowColor: 'white',
  checkedShadowColor: 'white',
};

type NativeInputProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
const defaultClass: string = `rounded-full border transition-shadow duration-300`;

export const ToggleIconButton: React.FC<NativeInputProps> = (props) => {
  const refLeft = useRef<any>();
  const refRight = useRef<any>();
  const [widthLeft, setWidthOn] = useState(0);
  const [widthRight, setWidthOff] = useState(0);

  useEffect(() => {
    setWidthOn(refLeft.current.offsetWidth);
    setWidthOff(refRight.current.offsetWidth);
  }, []);

  const {
    className,
    leftIcon,
    rightIcon,
    checked,
    spread,
    shadowColor,
    checkedShadowColor,
    outlineColor,
    checkedOutlineColor,
    ...restProps
  } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass} ${className ? className : 'border-gray-400 bg-gray-400'}`;

  return (
    <button
      style={{
        boxShadow: `${checked ? widthLeft + 'px' : '-' + widthRight + 'px'} 0 0 ${spread} ${
          checked ? checkedShadowColor : shadowColor
        } inset,0 0 0 ${spread} ${checked ? checkedShadowColor : shadowColor} inset`,
      }}
      className={mergeClass}
      {...restProps}
    >
      <div className='flex justify-between items-center p-px'>
        <span
          ref={refLeft}
          className={`grow rounded-full p-1 whitespace-pre delay-100 ${
            !checked && outlineColor ? 'outline ' : ''
          }outline-4 ${outlineColor} outline-offset-[-2px]`}
        >
          {leftIcon}
        </span>
        <span
          ref={refRight}
          className={`grow rounded-full p-1 whitespace-pre delay-100 ${
            checked && checkedOutlineColor ? 'outline ' : ''
          }outline-4 ${checkedOutlineColor} outline-offset-[-2px]`}
        >
          {rightIcon}
        </span>
      </div>
    </button>
  );
};
