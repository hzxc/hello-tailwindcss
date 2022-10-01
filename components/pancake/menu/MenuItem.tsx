import { LiHTMLAttributes, FC, useContext } from 'react';
import { MenuContext } from './Menu';

interface MenuItemProps {
  index?: string;
  disabled?: boolean;
}

type Props = MenuItemProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string =
  'flex items-center px-4 py-1 rounded-lg cursor-pointer hover:bg-slate-200 border';

const MenuItem: FC<Props> = (props) => {
  const { index, disabled, className, children } = props;
  const context = useContext(MenuContext);

  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

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