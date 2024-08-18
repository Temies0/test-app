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
				<Route path='/test-app/' element={<CreateWalletPage />} />
				<Route path='/test-app/loading' element={<LoadingPage />} />
				<Route path='/test-app/created' element={<WalletIsCreatedPage />} />
				<Route path='/test-app/login' element={<LogInPage />} />
				<Route path='/test-app/main' element={<MainPage />} />
			</Routes>
		</>
	)
}

export default RoutesConfig
