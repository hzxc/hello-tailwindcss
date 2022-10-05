import { LiHTMLAttributes, FC, useContext } from 'react';
import { TabContext } from './Tab';

export interface TabItemProps {
  index?: string;
  disabled?: boolean;
}

type Props = TabItemProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string =
  'cursor-pointer hover:opacity-70 border-b-4 border-b-transparent [&>*:first-child]:px-3 [&>*:first-child]:py-1.5';
const activeClass: string = 'font-semibold text-cyan-500/80 !border-b-cyan-500/80';

const TabItem: FC<Props> = (props) => {
  const { index, disabled, className, children } = props;
  const context = useContext(TabContext);

  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}${
    context.index === index ? ' ' + activeClass : ''
  }`;

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return (
    <li className={mergeClass} style={{ lineHeight: '100%' }} onClick={handleClick}>
      {typeof children === 'string' ? <div className='px-3 py-1.5'>{children}</div> : children}
    </li>
  );
};

TabItem.displayName = 'TabItem';
export { TabItem };
