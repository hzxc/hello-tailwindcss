import { LiHTMLAttributes, FC, useContext } from 'react';
import { MenuContext } from './Menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
}

type Props = MenuItemProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string = 'cursor-pointer px-4 py-2 hover:opacity-70';
const activeClass: string = 'font-semibold border-l-4 border-l-cyan-400';
const MenuItem: FC<Props> = (props) => {
  const { index, disabled, className, children } = props;
  const context = useContext(MenuContext);

  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${
    context.index === index ? ' ' + activeClass : ' border-l-4 border-l-transparent'
  }`;

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return (
    <li className={mergeClass} style={{ lineHeight: '100%' }} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';
export { MenuItem };
