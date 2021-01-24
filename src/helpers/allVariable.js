import Soruio from "../assets/images/soruio.png";
import Ufakca from "../assets/images/ufakca.png";
import Hangiliman from "../assets/images/hangiliman.png";
import { Mail, Phone, Location } from "../icons";
export const fontSize = {
  xSm: "16px",
  sm: "18px",
  md: "20px",
  lg: "25px",
  xLg: "32px",
  xxLg: "48px",
};

export const NavMenuTitles = [
  {
    title: "Home",
    onClick: () => (window.location.href = "#home"),
  },
  {
    title: "Experiences",
    onClick: () => (window.location.href = "#experiences"),
  },
  { title: "Works", onClick: () => (window.location.href = "#works") },
  { title: "About", onClick: () => (window.location.href = "#about") },
];

export const HomeSideData = {
  title: "Let’s Talk Bussiness",
  subFeatures: [
    {
      text: "Fixing Problem",
    },
    {
      text: "Thinking solutions",
    },
    {
      text: "100% Customer Happiness",
    },
    {
      text: "Frontend Development",
    },
  ],
};
export const WorksCardsData = [
  {
    title: "Hangiliman",
    description:
      "Hangiliman, Denizseverlerin tekne, yat vb. deniz taşıtlarını bu platform üzerinden kiralayabilmesini sağlayan web tabanlı bir uygulama",
    src: Hangiliman,
  },
  {
    title: "Ufak.ca",
    description:
      "Ufak.ca, Upuzun linklerinizi hızlı ve kolay bir biçimde kısaltabileceğiniz web tabanlı bir uygulama",
    src: Ufakca,
  },
  {
    title: "Soru.io",
    description:
      "Soru.io event oluşturabiliceğiniz, oluşturduğunuz eventlar sayesinde insanlarla etkileşimde bulunabileceğiniz Sli.do tarzi bir web tabanlı uygulama",
    src: Soruio,
  },
];

export const HireInformationData = [
  { icon: <Phone />, text: "+90 530 820 69 55" },
  { icon: <Mail />, text: "alperenkaraguzel@gmail.com" },
  { icon: <Location />, text: "Samsun, Turkey" },
];
