import iconGitHub from "../assets/icons/icon-github.png";
import iconWhatsapp from "../assets/icons/icon-whatsapp.png";
import iconLinkedin from "../assets/icons/icon-linkedin.png";
import iconEmail from "../assets/icons/icon-gmail.png";

const optionsIcons = {
  GITHUB: iconGitHub,
  WHATSAPP: iconWhatsapp,
  LINKEDIN: iconLinkedin,
  EMAIL: iconEmail,
};

const contacts = [
  {
    name: "GitHub",
    image: optionsIcons.GITHUB,
    path: "https://github.com/kzanetty",
  },
  {
    name: "Linkedin",
    image: optionsIcons.LINKEDIN,
    path: "https://www.linkedin.com/in/hzanettik/",
  },
  {
    name: "Whatsapp",
    image: optionsIcons.WHATSAPP,
    path: "https://api.whatsapp.com/send?phone=51989585388",
  },
  {
    name: "Email",
    image: optionsIcons.EMAIL,
    path: "hzanettik@gmail.com",
  },
];

export default contacts;
