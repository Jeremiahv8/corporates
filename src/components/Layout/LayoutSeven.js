import { HeaderSix } from "../Header";
import { FooterOne } from "../Footer";

const LayoutSeven = ({ children }) => {
  return (
    <div>
      <HeaderSix />
      {children}
      <FooterOne />
    </div>
  );
};

export default LayoutSeven;
