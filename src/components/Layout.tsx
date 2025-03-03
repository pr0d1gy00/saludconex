import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export default function Layout() {
	return (
		<>
			<Header/>
			<Fragment>
				<Body/>
			</Fragment>
			<Footer/>
		</>
	)
}
