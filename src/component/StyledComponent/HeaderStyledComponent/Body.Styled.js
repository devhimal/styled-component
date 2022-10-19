import Styled from "styled-components"

// @ts-ignore
export const ContentContainer = Styled.div`

`
//cards
// @ts-ignore
export const CardContainer = Styled.div`
    display:flex;
    flex-direction: ${({ layout }) => layout || 'row'};

    @media (max-width: ${({ theme }) => theme.mobile}){
        flex-direction:column;
        header{
            order:2;
        }
        div{
            order:1;
        }
    }
`