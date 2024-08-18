import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals/fonts/stylesheet.css'
import './globals/styles/main.scss'
import './globals/styles/reset.css'
// import RoutesConfig from './RoutesConfig'
/// pages
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Route, HashRouter as Routes } from 'react-router-dom'

import CreateWalletPage from './pages/first_entry/CreateWalletPage'
import LoadingPage from './pages/loading/LoadingPage'
import LogInPage from './pages/log_in/LogInPage'
import MainPage from './pages/main/MainPage'
import WalletIsCreatedPage from './pages/wallet_is_created/WalletIsCreatedPage'

const router = createBrowserRouter([
	{
		// path: '/test-app/',
		// element: <CreateWalletPage />,
		children: [
			{
				path: '/test-app/',
				element: <CreateWalletPage key={Date.now()} />,
			},
			{
				path: '/test-app/created',
				element: <WalletIsCreatedPage key={Date.now()} />,
			},
			{
				path: '/test-app/login',
				element: <LogInPage key={Date.now()} />,
			},
			{
				path: '/test-app/main',
				element: <MainPage key={Date.now()} />,
			},
			{
				path: '/test-app/loading',
				element: <LoadingPage key={Date.now()} />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <Routes>
			<Route path='/test-app/' element={<CreateWalletPage />} />
			<Route path='/test-app/loading' element={<LoadingPage />} />
			<Route path='/test-app/created' element={<WalletIsCreatedPage />} />
			<Route path='/test-app/login' element={<LogInPage />} />
			<Route path='/test-app/main' element={<MainPage />} />
		</Routes> */}
	</React.StrictMode>
)
