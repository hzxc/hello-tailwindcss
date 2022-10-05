import { LiHTMLAttributes, FC, useContext } from 'react';
import { MenuContext } from './Menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
}

type Props = MenuItemProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string =
  'cursor-pointer hover:bg-zinc-100 [&>*:first-child]:block [&>*:first-child]:px-4 [&>*:first-child]:py-4';
const activeClass: string = 'font-semibold text-violet-600';
const horizontalActiveClass: string = 'font-semibold text-violet-600';

const MenuItem: FC<Props> = (props) => {
  const { index, disabled, className, children } = props;
  const context = useContext(MenuContext);

  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${
    context.mode === 'vertical'
      ? ' border-l-0 border-l-transparent'
      : ' border-b-0 border-b-transparent'
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
