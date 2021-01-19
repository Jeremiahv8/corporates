import { HeaderSeven } from "../Header";
import { FooterFour } from "../Footer";

const corpLayout = ({ children, aboutOverlay }) => {
  return (
    <div>
      <HeaderSeven aboutOverlay={aboutOverlay} />
      {children}
      <FooterFour />

    </div>
  );
};

export default corpLayout;
