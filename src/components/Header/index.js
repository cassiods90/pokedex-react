import { Menu } from '../Menu';
import pokeball from '../../assets/images/pokeball.png'

import{Container, Content, Logo, Title} from './styles'

function Header() {
    return (
        <Container>
            <Content>
                <Logo>
                    <img src={pokeball} alt="Pokeball" width="40" height="40" />
                    <Title>Pokédex</Title>
                </Logo>
                <Menu />
            </Content>
        </Container>
    )   
}

export { Header };