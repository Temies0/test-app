import { Route, Routes } from 'react-router-dom'

import CreateWalletPage from './pages/first_entry/CreateWalletPage'
import LoadingPage from './pages/loading/LoadingPage'
import LogInPage from './pages/log_in/LogInPage'
import MainPage from './pages/main/MainPage'
import WalletIsCreatedPage from './pages/wallet_is_created/WalletIsCreatedPage'

const RoutesConfig = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<CreateWalletPage />} />
				<Route path='/loading' element={<LoadingPage />} />
				<Route path='/created' element={<WalletIsCreatedPage />} />
				<Route path='/login' element={<LogInPage />} />
				<Route path='/main' element={<MainPage />} />
			</Routes>
		</>
	)
}

export default RoutesConfig
