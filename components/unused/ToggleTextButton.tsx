import React, { ButtonHTMLAttributes, useLayoutEffect, useRef, useState } from 'react';
interface BaseProps {
  leftText?: string;
  rightText?: string;
  checked?: boolean;
  spread?: '1px' | '2px' | '3px';
  shadowColor?: string;
  checkedShadowColor?: string;
}

const defaultInitialProps: BaseProps = {
  leftText: '      ',
  rightText: '      ',
  checked: false,
  spread: '2px',
  shadowColor: 'rgb(238, 234, 244)',
  checkedShadowColor: 'rgb(49, 208, 170)',
};

type NativeInputProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
const defaultClass: string = 'rounded-full border transition-all duration-200';

export const ToggleTextButton: React.FC<NativeInputProps> = (props) => {
  const refLeft = useRef<any>();
  const refRight = useRef<any>();
  const [widthLeft, setWidthOn] = useState(0);
  const [widthRight, setWidthOff] = useState(0);

  useLayoutEffect(() => {
    setWidthOn(refLeft.current.offsetWidth);
    setWidthOff(refRight.current.offsetWidth);
  }, []);

  const {
    className,
    checked,
    spread,
    shadowColor,
    checkedShadowColor,
    leftText,
    rightText,
    ...restProps
  } = {
    ...defaultInitialProps,
    ...props,
  };
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;
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
        <span ref={refLeft} className='grow rounded-full p-1 whitespace-pre'>
          {leftText}
        </span>
        <span ref={refRight} className='grow rounded-full p-1 whitespace-pre'>
          {rightText}
        </span>
      </div>
    </button>
  );
};
