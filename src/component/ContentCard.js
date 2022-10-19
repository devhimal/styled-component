import React from 'react'
import { CardContainer } from './StyledComponent/HeaderStyledComponent/Body.Styled';

const ContentCard = ({ content }) => {
    console.log(content);
    return (
        <CardContainer layout={ content.id % 2 === 0 && 'row-reverse' }>
            <header>
                <h1>{ content.title }</h1>
                <p>{ content.body }</p>
            </header>
            <div>
                <img src={ `./images/${content.image}` } alt={ content.title } />
            </div>
        </CardContainer>
    )
}

export default ContentCard