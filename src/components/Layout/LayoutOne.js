import { HeaderOne } from "../Header";
import { HeaderTwo } from "../Header";
import { HeaderThree } from "../Header";
import { HeaderFour } from "../Header";

import { FooterOne } from "../Footer";

const LayoutOne = ({ children, aboutOverlay }) => {
  return (
    <div>
      <HeaderTwo aboutOverlay={aboutOverlay} />
      {children}
      <FooterOne />
    </div>
  );
};

export default LayoutOne;
