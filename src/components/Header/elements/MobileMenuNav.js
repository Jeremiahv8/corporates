import { useEffect } from "react";
import Link from "next/link";

import MenuItemsList from "../../../data/general/menu-items.json";


let count = 0;

function ListSubMenuItems_({subitems_}){
  if(subitems_.length == 0) return null
  return <>
    <ul className="mobile-sub-menu">
      {subitems_.map(function(subitem_) {
        count++;
        return <li key={"mT"+ subitem_.id + count}>
          <Link
            href={subitem_.url}
            as={process.env.PUBLIC_URL + subitem_.label}
          >
            <a>{subitem_.label}</a>
          </Link>
        </li>
      })}                
    </ul>
  </>;
}

function ListSubMenuItems({subitems}){
  if(subitems.length == 0) return null
  return <>
    <ul className="mobile-sub-menu">
      {subitems.map(function(subitem) {
        count++; 
        return <li className="menu-item-has-children" key={"mS"+ subitem.id + count}>
          <Link
            href={subitem.url}
            as={process.env.PUBLIC_URL + subitem.url}
          >
            <a>{subitem.label}</a>
          </Link>
          <ListSubMenuItems_ subitems_={subitem.subitems}/>
        </li>;
      })}
    </ul>
  </>;
}

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  
  return (
    <nav
      className="offcanvas-mobile-menu__navigation"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        {MenuItemsList.map(function(item) {
          count++; 
          return <li className="menu-item-has-children" key={"mP"+ item.id + count}>
            <Link href="/" as={item.url}>
                <a>{item.label}</a>
            </Link>
            <ListSubMenuItems subitems={item.subitems}/>
            </li>
        })}
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
