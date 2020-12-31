import { HeaderSix } from "../Header";
import { FooterTwo } from "../Footer";

const LayoutEight = ({ children }) => {
  return (
    <div>
      <HeaderSix />
      {children}
      <FooterTwo />
    </div>
  );
};

export default LayoutEight;
