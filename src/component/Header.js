import React from 'react'
import { NavWrapper, Nav, Logo, Button, Left, Right, Flex } from './StyledComponent/HeaderStyledComponent/Header.Styled';

const Header = () => {
    return (
        <NavWrapper>
            <Nav>
                <Logo src="./images/logo.svg" alt='logo' />
                {/* <span>hello</span> */ }
                <Button>Try it for free</Button>
            </Nav>
            <Flex>
                <Left>
                    <h1>Build The Community Your Fans Will Love</h1>

                    <p>
                        Huddle re-imagines the way we build communities. You have a voice,
                        but so does your audience. Create connections with your users as
                        you engage in genuine discussion.
                    </p>
                    <button>Get started for free</button>
                </Left>
                <Right>
                    <img src='./images/illustration-mockups.svg' alt='cover_photo' />
                </Right>
            </Flex>
        </NavWrapper>
    )
}

export default Header