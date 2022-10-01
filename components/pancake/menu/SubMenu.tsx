import { LiHTMLAttributes, useContext, useState } from 'react';
import { MenuContext } from './Menu';

export interface SubMenuProps {
  index?: string;
  title: string;
}

type Props = SubMenuProps & LiHTMLAttributes<HTMLLIElement>;
const defaultClass: string = '';
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

  // const renderChildren = () => {
  //   const subMenuClasses = classNames('viking-submenu', {
  //     'menu-opened': menuOpen,
  //   });
  //   const childrenComponent = React.Children.map(children, (child, i) => {
  //     const childElement = child as FunctionComponentElement<MenuItemProps>;
  //     if (childElement.type.displayName === 'MenuItem') {
  //       return React.cloneElement(childElement, {
  //         index: `${index}-${i}`,
  //       });
  //     } else {
  //       console.error('Warning: SubMenu has a child which is not a MenuItem component');
  //     }
  //   });
  //   return (
  //     <Transition in={menuOpen} timeout={300} animation='zoom-in-top'>
  //       <ul className={subMenuClasses}>{childrenComponent}</ul>
  //     </Transition>
  //   );
  // };

  return <li key={index} className={mergeClass}></li>;
};
