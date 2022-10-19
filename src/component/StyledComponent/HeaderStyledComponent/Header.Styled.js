
// @ts-ignore
import Styled from "styled-components"

// @ts-ignore
export const NavWrapper = Styled.div`
// border:1px solid black;
background:${({ theme }) => theme.colors.bg}
`

// @ts-ignore
export const Nav = Styled.nav`
height: 4rem; 
background-color:${({ theme }) => theme.colors.header};
// border: 1px solid black;
color:#000;
padding:0rem 2rem;
display: flex;
justify-content: space-between;
align-items:center;

@media (max-width:${({ theme }) => theme.mobile}){
    flex-direction: column;
}
`
// @ts-ignore
export const Logo = Styled.img`
    height:30px;
    width: fit;
`
// @ts-ignore
export const Button = Styled.button`
    padding: 0.5rem 1.5rem;
    border:none;
    color:${({ theme }) => theme.buttons.color};
    background-color:transparent;
    cursor:pointer;
    font-family:sans-serif;
    border:1px solid ${({ theme }) => theme.buttons.border};
    border-radius: 2rem;
    &:hover{
        opacity:0.9;
        transform:scale(0.98);
    }
`
// flex component
// @ts-ignore
export const Flex = Styled.div`
display:flex;
width:100%;
`

//Left
// @ts-ignore
export const Left = Styled.div`
border:1px solid red;
width:50%`

//right
// @ts-ignore
export const Right = Styled.div`
border:1px solid blue;
width:50%;
img{
    height:400px;
    width:300px;
}

`