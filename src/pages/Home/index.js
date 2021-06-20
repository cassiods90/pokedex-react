import * as React from 'react'
import { Container, Content, Welcome, SubTitle, Title } from './styles'

function Home() {
    return (
        <Container>
            <Content>
                <Welcome>
                    <Title>Welcome to the PokeWorld</Title>
                    <SubTitle>This project, use the PokeApi to list all pokes, yours stats and a minigame !!! </SubTitle>
                </Welcome>
            </Content>
        </Container>
    )
}

export { Home }