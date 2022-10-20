import React from 'react'
import { CardBody, CardContainer, CardHeader } from './StyledComponent/HeaderStyledComponent/Body.Styled';

const ContentCard = ({ content }) => {
    console.log(content);
    return (
        <CardContainer layout={ content.id % 2 === 0 && 'row-reverse' }>
            <CardHeader>
                <h1>{ content.title }</h1>
                <p>{ content.body }</p>
            </CardHeader>
            <CardBody>
                <img src={ `./images/${content.image}` } alt={ content.title } />
            </CardBody>
        </CardContainer>
    )
}

export default ContentCard