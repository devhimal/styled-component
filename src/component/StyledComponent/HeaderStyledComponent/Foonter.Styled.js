
import Styled from "styled-components"

// @ts-ignore
export const FooterWrapper = Styled.div`
    height: 40vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.color};
    display:flex;
    font-size:17px;

    //equal flexbox size
    div, header, div{
        flex:1
    }

    //media query for mobile size
    @media (max-width:${({ theme }) => theme.mobile}){
    }
`

//About
// @ts-ignore
export const FooterInfo = Styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    // border: 1px solid blue;
    cursor:pointer;
`
//logo
// @ts-ignore
export const FooterLogo = Styled.header`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // border: 1px solid blue;
    cursor:pointer;
`
//Service
// @ts-ignore
export const FooterService = Styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    // border: 1px solid blue;
    cursor:pointer;
`

//footer logo
// @ts-ignore
export const FLogo = Styled.img`
    height: 6rem;
    width:6rem;
    border-radius:100%;
    margin: 1.5rem 0rem;

    border:1px solid ${({ theme }) => theme.colors.border};

    //media query for mobile size
    @media (max-width:${({ theme }) => theme.mobile}){
        height:5rem;
        width:5rem;
    }

`
//Copyright
// @ts-ignore
export const Copyright = Styled.span`
    margin-top: 3rem;
    font-size: 1rem;

    @media (max-width:${({ theme }) => theme.mobile}){
       font-size:0.8rem;
    }
`

//social icons
// @ts-ignore
export const FooterSocialIcons = Styled.span`
    display:flex;
    list-style:none;
    margin-top:10px;

    li{
        margin-right:10px;
    }

`