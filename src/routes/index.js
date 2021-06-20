import {Switch, Route} from 'react-router-dom'

import { Home, Pokemons, Pokemon, MiniGame, About } from '../pages'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemons" component={Pokemons} />
            <Route exact path="/minigame" component={MiniGame} />
            <Route exact path="/About" component={About} />
            <Route exact path="/pokemons/:pokemon" component={Pokemon} />
            {/* <Redirect from="*" to="/" /> */}
        </Switch>
    )
}

export { Routes }