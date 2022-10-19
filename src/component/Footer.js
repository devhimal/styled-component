import React from 'react'
import { Copyright, FLogo, FooterInfo, FooterLogo, FooterService, FooterSocialIcons, FooterWrapper } from './StyledComponent/HeaderStyledComponent/Foonter.Styled'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLogo>
                <FLogo src='./images/logo.svg' alt='flogo' />
                <span>himal@outlook.com</span>
                <span>98********</span>
            </FooterLogo>
            <FooterInfo>
                <span>About Us</span>
                <span>FAQ</span>
                <span>What we do?</span>
            </FooterInfo>
            <FooterService>
                <span>Career</span>
                <span>Blog</span>
                <FooterSocialIcons>
                    <li>
                        <BsFacebook />
                    </li>
                    <li>
                        {/* <BsFacebook /> */ }
                        <BsTwitter />
                    </li>
                    <li>
                        <BsInstagram />
                        {/* <BsFacebook /> */ }
                    </li>
                </FooterSocialIcons>
                <Copyright>2022, all copy rights reserved by huddle.com</Copyright>
            </FooterService>
        </FooterWrapper>
    )
}

export default Footer