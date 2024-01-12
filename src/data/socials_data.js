import GithubIcon from "@static/icons/github.png";
import InstagramIcon from "@static/icons/instagram.png";
import FacebookIcon from "@static/icons/facebook.svg";
import DiscordIcon from "@static/icons/discord.png";

export const socials = {
  email: "amacss.uoft@gmail.com",
  instagram: "amacss_utsc",
  discord: "https://discord.gg/9nB958kxTJ",
  youtube: "https://www.youtube.com/@amacssutsc/",
};

export const SOCIAL_NAV = [
  {
    icon: GithubIcon,
    link: "https://github.com/amacss-utsc",
  },
  {
    icon: InstagramIcon,
    link: `https://instagram.com/${socials.instagram}/`,
  },
  {
    icon: FacebookIcon,
    link: "https://facebook.com/AMACSSUTSC",
  },
  {
    icon: DiscordIcon,
    link: socials.discord,
  },
];
