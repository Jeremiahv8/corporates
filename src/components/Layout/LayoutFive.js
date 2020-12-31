import { HeaderFive } from "../Header";
import { FooterTwo } from "../Footer";

const LayoutFive = ({ children }) => {
  return (
    <div>
      <HeaderFive />
      {children}
      <FooterTwo />
    </div>
  );
};

export default LayoutFive;
