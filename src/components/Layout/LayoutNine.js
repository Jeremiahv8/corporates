import { HeaderSeven } from "../Header";
import { FooterFour } from "../Footer";

const LayoutTwo = ({ children, aboutOverlay, AppState, setAppState, ProfileState, setProfileState }) => {
  return (
    <div>
      <HeaderSeven aboutOverlay={aboutOverlay} AppState={AppState} setAppState={setAppState}  ProfileState={ProfileState} setProfileState={setProfileState} />
      {children}
      {/* <!<FooterFour /> */}
    </div>
  );
};

export default LayoutTwo;
