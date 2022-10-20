
import Styled from "styled-components"

// @ts-ignore
export const NavWrapper = Styled.div`
background:${({ theme }) => theme.colors.bg}
`

// @ts-ignore
export const Nav = Styled.nav`
height: 4rem; 
background-color:${({ theme }) => theme.colors.header};
color:#000;
padding:0rem 2rem;
display: flex;
justify-content: space-between;
align-items:center;

@media (max-width:${({ theme }) => theme.mobile}){
    flex-direction: column;
    height: 5.5rem;

    img{
        margin-top:5px;
    }
    button{
        margin-bottom: 10px;
    }
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
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
padding:2rem;
// border:1px solid blue;


@media (max-width:${({ theme }) => theme.mobile}){
    display:flex;
    justify-content:center;
    flex-direction:column;
    p{
        text-align:center;
    }
}
`

//Left
// @ts-ignore
export const Left = Styled.div`
display:flex;
flex-direction:column;
align-items:start;
width:50%;
h1{
    font-size:30px;
}
p{
    font-size:17px;
    text-align:justify;
    
}
button{
    margin-top:50px;
    padding:15px 30px;
    border:1px solid ${({ theme }) => theme.buttons.border};
    background-color:transparent;
    border-radius: 5px;
    cursor:pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover{
    transform:scale(0.98);
    
    }
}

    @media (max-width:${({ theme }) => theme.mobile}){
        width:100%;
        align-items:center;
        order:2;
    }

`

//right
// @ts-ignore
export const Right = Styled.div`
// border:1px solid blue;
display:flex;
align-items:center;
justify-content:center;
width:50%;
img{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height:400px;
    width:300px;
    &:hover{
    transform:scale(1.01);
    }
}


@media (max-width:${({ theme }) => theme.mobile}){
    width:100%;
    order:1;
}
`