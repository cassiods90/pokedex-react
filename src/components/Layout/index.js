import { Outer, OuterRoutes } from './styles'

function Layout({ children }) {
	return <Outer> {children} </Outer>
}

function RoutesLayout({ children }) {
	return <OuterRoutes> {children} </OuterRoutes>
}

export { Layout, RoutesLayout }
