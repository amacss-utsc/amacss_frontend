import React, { Component } from "react";
import { Link } from "gatsby";
import Scrollspy from "react-scrollspy";

import { Container } from "@components/global";
import { Mobile, MobileMenu, Nav, NavItem, NavListWrapper, StyledContainer } from "./style";
import { ReactComponent as AMACSSLogo } from "@images/logos/amacss_logo.svg";
import { ReactComponent as MenuIcon } from "@static/icons/menu.svg";
import ExternalLink from "@common/ExternalLink";
import GithubIcon from "@static/icons/github.png";
import InstagramIcon from "@static/icons/instagram.png";
import FacebookIcon from "@static/icons/facebook.svg";
import DiscordIcon from "@static/icons/discord.png";
import Constitution from "@static/docs/constitution.pdf";
import styled from "styled-components";

const HOME_URL = "/#home";
const NAV_ITEMS = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Events",
    url: "/events",
  },
  {
    name: "Resources",
    url: "/resources",
  },
  {
    name: "Team",
    url: "/team",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
  {
    name: "FAQs",
    url: "/faq"
  }
];
const CONSTITUTION = Constitution;
const SOCIAL = [
  {
    icon: GithubIcon,
    link: "https://github.com/amacss-utsc",
  },
  {
    icon: InstagramIcon,
    link: "https://instagram.com/amacss_utsc/",
  },
  {
    icon: FacebookIcon,
    link: "https://facebook.com/AMACSSUTSC",
  },
  {
    icon: DiscordIcon,
    link: "https://discord.gg/9nB958kxTJ",
  },
];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map((item) => item.name)}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(({ name, url }) => (
          <NavItem key={name}>
            <Link to={url} onClick={this.closeMobileMenu}>
              {name}
            </Link>
          </NavItem>
        ))}
        <NavItem>
          <a target="_blank" rel="noreferrer" href={CONSTITUTION}>
            Constitution
          </a>
        </NavItem>
        <SocialIcons>
          {SOCIAL.map(({ icon, link }) => (
            <ExternalLink href={link}>
              <img src={icon} alt="link" />
            </ExternalLink>
          ))}
        </SocialIcons>
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <a href={HOME_URL}>
            <AMACSSLogo />
          </a>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: "black" }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

export default Navbar;
