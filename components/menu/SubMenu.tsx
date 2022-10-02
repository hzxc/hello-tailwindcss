import { Transition } from 'components';
import { PanIconButton } from 'components/pancake';
import React, { FunctionComponentElement } from 'react';
import { LiHTMLAttributes, useContext, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MenuContext } from './Menu';
import { MenuItemProps } from './MenuItem';

export interface SubMenuProps {
  index?: string;
  title: string;
}

type Props = SubMenuProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string = 'px-4 py-2 border-l-4 border-l-transparent';
const activeClass: string = 'font-semibold border-l-4 border-l-cyan-400';
export const SubMenu: React.FC<Props> = (props) => {
  const { index, title, children, className } = props;
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpend = index && context.mode === 'vertical' ? openedSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpend);

  const mergeClass = `${defaultClass}${className ? ' ' + className : ''}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component');
      }
    });
    return (
      <Transition visible={menuOpen} timeout={300} classNames='zoom-in-top'>
        <ul className='flex flex-col flex-nowrap items-start justify-start gap-1 mt-2'>
          {childrenComponent}
        </ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={mergeClass} {...hoverEvents}>
      <div
        className={`flex items-center cursor-pointer hover:opacity-70 ${
          context.index.startsWith(index + '-') ? 'font-semibold' : ''
        }`}
        style={{ lineHeight: '100%' }}
        {...clickEvents}
      >
        <span>{title}</span>
        <span className='mt-[-6px] mb-[-8px] mx-1'>
          <IoIosArrowDown
            className={`${menuOpen ? 'rotate-180 text-cyan-400' : 'rotate-0'} transition-transform`}
            size={24}
          />
        </span>
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
