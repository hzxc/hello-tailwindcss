import { LiHTMLAttributes, FC, useContext } from 'react';
import { MenuContext } from './Menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
}

type Props = MenuItemProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string = 'cursor-pointer hover:opacity-70 chidren-padding';
const activeClass: string = 'font-semibold text-cyan-400 !border-l-cyan-400';
const horizontalActiveClass: string = 'font-semibold text-cyan-400 !border-b-cyan-400';

const MenuItem: FC<Props> = (props) => {
  const { index, disabled, className, children } = props;
  const context = useContext(MenuContext);

  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${
    context.mode === 'vertical'
      ? ' border-l-4 border-l-transparent'
      : ' border-b-4 border-b-transparent'
  }${context.index === index && context.mode === 'vertical' ? ' ' + activeClass : ''}${
    context.index === index && context.mode === 'horizontal' ? ' ' + horizontalActiveClass : ''
  }`;

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return (
    <li className={mergeClass} style={{ lineHeight: '100%' }} onClick={handleClick}>
      {typeof children === 'string' ? <div>{children}</div> : children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';
export { MenuItem };
