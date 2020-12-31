import { HeaderThree } from "../Header";
import { FooterThree } from "../Footer";

const LayoutThree = ({ children }) => {
  return (
    <div>
      <HeaderThree />
      {children}
      <FooterThree />
    </div>
  );
};

export default LayoutThree;
