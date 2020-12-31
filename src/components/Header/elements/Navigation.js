import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

//  Header info
import MenuItemsList from "../../../data/general/menu-items.json";

let count = 0;

function ListSubMenuItems_({subitems_}){
  if(subitems_.length == 0) return null
  return <>
    <IoIosArrowForward />
    <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
      {subitems_.map(function(subitem_) {
        count++;
        return <li key={"T"+ subitem_.id + count}>
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
    <IoIosArrowDown />
    <ul className="sub-menu sub-menu--one-column">
      {subitems.map(function(subitem) {
        count++;
        return <li key={"S"+ subitem.id + count}>
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


 
const Navigation = () => {
  const ListMenuItems = () => (
    <>
      {MenuItemsList.map(function(item) {
        count++;
        return <li key={"P"+ item.id + count}>
          <Link href={item.url} as={process.env.PUBLIC_URL + item.url}>
            <a>{item.label}</a>
          </Link>
          <ListSubMenuItems subitems={item.subitems}/>
        </li>;
      })}
    </>
  );
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <ListMenuItems/>
      </ul>
    </nav>
  );
};

export default Navigation;
