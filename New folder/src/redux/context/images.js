import { createContext } from "react";

import linkedinImage from "../../images/linkedin.png";
import googleImage from "../../images/google1.png";
import helpMe from "../../images/help.png";
import shake from "../../images/shake.jpg";
import facebook from "../../images/facebook.png";
import apple from "../../images/apple.png";
import avatar from "../../images/me.jpg";
import back from "../../images/back.png";
import tv from "../../images/tv.png";
import outside from "../../images/outside.png";
import home from "../../images/home.png";
import medicine from "../../images/medicine.png";
import doctor from "../../images/doctor.png";
import meeting from "../../images/meeting.png";
import shopping from "../../images/shopping.png";
import other from "../../images/other.png";
import girl from "../../images/girl.png";
import guy from '../../images/guy.png';

const initialState = {
  linkedinImage,
  googleImage,
  helpMe,
  shake,
  facebook,
  apple,
  avatar,
  back,
  tv,
  outside,
  home,
  medicine,
  doctor,
  meeting,
  shopping,
  other,
  girl,
  guy
};

const initialContext = {
  state: initialState,
  dispatch: () => null,
};

export default createContext(initialContext);
