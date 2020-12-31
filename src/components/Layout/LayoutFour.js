import { HeaderFour } from "../Header";
import { FooterTwo } from "../Footer";

const LayoutFour = ({ children }) => {
  return (
    <div>
      <HeaderFour />
      {children}
      <FooterTwo />
    </div>
  );
};

export default LayoutFour;
