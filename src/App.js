import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Header, Layout, RoutesLayout } from './components'
import GlobalStyle from './styles/global'
import { Routes } from './routes'


function App() {
  const history = createBrowserHistory()

	return (
		<>
			<GlobalStyle />	
			<Router history={history}>
				<Layout>
					<Header />
					<RoutesLayout>
						<Routes />
						
					</RoutesLayout>
				</Layout>
			</Router>
		</>
	)
}

export default App;
