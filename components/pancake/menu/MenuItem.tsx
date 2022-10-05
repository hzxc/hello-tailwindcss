import { LiHTMLAttributes, FC, useContext } from 'react';
import { MenuContext } from './Menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  itemClass?: string;
}

type Props = MenuItemProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string =
  'cursor-pointer hover:bg-zinc-100 [&>*:first-child]:block [&>*:first-child]:px-4 [&>*:first-child]:py-4';
const activeClass: string = 'font-semibold text-violet-600';
const horizontalActiveClass: string = 'font-semibold text-violet-600';

const MenuItem: FC<Props> = (props) => {
  const { index, disabled, className, children, itemClass } = props;
  const context = useContext(MenuContext);
  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${
    itemClass ? ' ' + itemClass : ''
  }${context.index === index && context.mode === 'vertical' ? ' ' + activeClass : ''}${
    context.index === index && context.mode === 'horizontal' ? ' ' + horizontalActiveClass : ''
  }`;
  console.log('className,', className);
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return (
    <li className={`${mergeClass}`} style={{ lineHeight: '100%' }} onClick={handleClick}>
      {/* {typeof children === 'string' ? <div>{children}</div> : children} */}
      {<div>{children}</div>}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';
export { MenuItem };
