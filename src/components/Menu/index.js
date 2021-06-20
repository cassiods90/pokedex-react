import { Container, Content, Link } from './styles';

function Menu() {
    const menuItems = [
        {
            name: "Home",
            linkTo: '/'
        },
        {
            name: "Pokemons",
            linkTo: '/pokemons'
        },
        {
            name: "Mini Game",
            linkTo: '/minigame'
        },
        {
            name: "About",
            linkTo: '/About'
        }
    ]
    return (
        <Container>
            <Content>
                {menuItems.map(item => (
                    <Link exact activeClassName="menu-active" key={item.linkTo} to={item.linkTo}> {item.name}</Link>
                ))}
            </Content>
        </Container>
    ) 
}

export { Menu }