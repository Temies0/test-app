import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals/fonts/stylesheet.css'
import './globals/styles/main.scss'
import './globals/styles/reset.css'
import RoutesConfig from './RoutesConfig'
/// pages
// import CreateWalletPage from './pages/first_entry/CreateWalletPage'
// import WalletIsCreatedPage from './pages/wallet_is_created/WalletIsCreatedPage'
// import LogInPage from './pages/log_in/LogInPage'
// import MainPage from './pages/main/MainPage'
// import LoadingPage from './pages/loading/LoadingPage'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HashRouter>
			<RoutesConfig />
		</HashRouter>
		{/* <LogInPage /> */}
		{/* <MainPage /> */}
		{/* <CreateWalletPage /> */}
		{/* <LoadingPage /> */}
		{/* <WalletIsCreatedPage /> */}
	</React.StrictMode>
)
