import { HeaderOne } from "../Header";
import { FooterOne } from "../Footer";

const LayoutTwo = ({ children, aboutOverlay }) => {
  return (
    <div>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterOne />
    </div>
  );
};

export default LayoutTwo;
