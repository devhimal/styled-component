import Styled from "styled-components"

// @ts-ignore
export const ContentContainer = Styled.div`

`
//cards
// @ts-ignore
export const CardContainer = Styled.div`
    display:flex;
    height:70vh;
    overflow:hidden;
    flex-direction: ${({ layout }) => layout || 'row'};
    // border:1px solid red;

    @media (max-width: ${({ theme }) => theme.mobile}){
        height:100vh;
        flex-direction:column;
        header{
            order:2;
        }
        div{
            order:1;
        }
    }
`

// @ts-ignore
export const CardHeader = Styled.header`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:3rem;

@media (max-width:${({ theme }) => theme.mobile}){
    
        width:100%;
}
    
`
//@ts-ignore
export const CardBody = Styled.div`
width:50%;
// border:1px solid orange;
display:flex;
align-items:center;
justify-content:center;

    img{
        height:450px;
        width:400px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        &:hover{
            transform:scale(0.98);
            transition-duration:120ms;
        }
    }


@media (max-width:${({ theme }) => theme.mobile}){
    
        width:100%;
}
`