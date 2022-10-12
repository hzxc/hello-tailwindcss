import { FC, LiHTMLAttributes, useContext } from 'react';
import { MenuButtonContext } from './MenuButton';

export interface MenuButtonItemProps {
  index?: string;
  disabled?: boolean;
  itemClass?: string;
}

type Props = MenuButtonItemProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string =
  'cursor-pointer hover:bg-zinc-100 [&>*:first-child]:block [&>*:first-child]:px-4 [&>*:first-child]:py-4';

const activeClass: string = 'font-semibold text-violet-600';

export const MenuButtonItem: FC<Props> = (props) => {
  const { index, className, children, itemClass, disabled, ...restProps } = props;
  const context = useContext(MenuButtonContext);

  const mergeClass = `${defaultClass} ${className ? className : ''} ${
    itemClass ? ' ' + itemClass : ''
  } ${context.index === index ? activeClass : ''}`;

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return (
    <li className={mergeClass} style={{ lineHeight: '100%' }} {...restProps} onClick={handleClick}>
      {typeof children === 'string' ? <div>{children}</div> : children}
    </li>
  );
};

MenuButtonItem.displayName = 'MenuButtonItem';
