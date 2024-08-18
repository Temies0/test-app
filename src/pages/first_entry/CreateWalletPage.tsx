import { Route, Routes } from 'react-router-dom'
import Durev from '../../globals/images/base/durev.svg'
import Notcoin from '../../globals/images/base/notcoin.svg'
import Ton from '../../globals/images/base/ton.svg'
import Tether from '../../globals/images/base/usdt_ton.svg'
import LoadingPage from '../loading/LoadingPage'
import './styles/CreateWallet.scss'

const CreateWalletPage = () => {
	return (
		<>
			<Routes>
				<Route path='loading' element={<LoadingPage />} />
			</Routes>
			<div className='container-create'>
				<section className='main-wrapper'>
					<div className='welcome'>
						<div className='welcome-images'>
							<img src={Ton} alt='Ton' />
							<img src={Tether} alt='Tether' />
							<img src={Notcoin} alt='Notcoin' />
							<img src={Durev} alt='Pavel Durev' />
						</div>
						<span className='welcome-title'>
							<h1>Welcome to BoxTon</h1>
							<h2>
								Create a wallet or log in to start
								<br /> opening boxes
							</h2>
						</span>
					</div>
					<div className='button-container'>
						<a href='/loading'>
							<button title='' className='create-wallet'>
								Create new wallet
							</button>
						</a>
						<a href='test-app/loading'>
							<button title='' className='log-in'>
								Log in
							</button>
						</a>
					</div>
				</section>
			</div>
		</>
	)
}

export default CreateWalletPage
