import Durev from '../../globals/images/base/durev.svg'
import Notcoin from '../../globals/images/base/notcoin.svg'
import Ton from '../../globals/images/base/ton.svg'
import Tether from '../../globals/images/base/usdt_ton.svg'
// import LoadingPage from '../loading/LoadingPage'
import { Link } from 'react-router-dom'
import './styles/CreateWallet.scss'

const CreateWalletPage = () => {
	return (
		<>
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
						<Link to='/test-app/loading'>
							<button title='' className='create-wallet'>
								Create new wallet
							</button>
						</Link>
						<Link to='/test-app/loading'>
							<button title='' className='log-in'>
								Log in
							</button>
						</Link>
					</div>
				</section>
			</div>
		</>
	)
}

export default CreateWalletPage
