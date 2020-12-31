import { HeaderThree } from "../Header";
import { FooterTwo } from "../Footer";

const LayoutThree = ({ children }) => {
  return (
    <div>
      <HeaderThree />
      {children}
      <FooterTwo />
    </div>
  );
};

export default LayoutThree;
