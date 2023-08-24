import { createContext } from "react";

import iconAgree from "../../images/icon-agree.jpg";
import iconSponsor from "../../images/icon-sponsor.png";
import linkedinImage from "../../images/linkedin.png";
import googleImage from "../../images/google1.png";
import helpMe from "../../images/help.png";
import shake from "../../images/shake.jpg";
import facebook from "../../images/facebook.png";
import apple from "../../images/apple.png";
import avatar from "../../images/me.jpg";

const initialState = {
  iconAgree,
  iconSponsor,
  linkedinImage,
  googleImage,
  helpMe,
  shake,
  facebook,
  apple,
  avatar
};

const initialContext = {
  state: initialState,
  dispatch: () => null,
};

export default createContext(initialContext);
