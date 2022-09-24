import React, {
  ButtonHTMLAttributes,
  ReactElement,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { IconType } from 'react-icons';
import { FiSun, FiMoon } from 'react-icons/fi';
interface BaseProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  checked?: boolean;
  spread?: '1px' | '2px' | '3px';
  shadowColor?: string;
  checkedShadowColor?: string;
}

const defaultInitialProps: BaseProps = {
  leftIcon: <FiSun size={20} className=' text-amber-400' />,
  rightIcon: <FiMoon size={20} className=' text-purple-400' />,
  checked: false,
  spread: '1px',
  shadowColor: 'rgb(238, 234, 244)',
  checkedShadowColor: 'rgb(49, 208, 170)',
};

type NativeInputProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
const defaultClass: string = 'rounded-full border transition-shadow duration-200';

export const ToggleIconButton: React.FC<NativeInputProps> = (props) => {
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
    leftIcon,
    rightIcon,
    checked,
    spread,
    shadowColor,
    checkedShadowColor,
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
          {leftIcon}
        </span>
        <span ref={refRight} className='grow rounded-full p-1 whitespace-pre'>
          {rightIcon}
        </span>
      </div>
    </button>
  );
};
