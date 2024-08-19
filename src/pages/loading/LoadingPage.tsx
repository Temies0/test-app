import { useEffect } from 'react'
import Durev from '../../globals/images/base/durev.svg'
import Notcoin from '../../globals/images/base/notcoin.svg'
import Ton from '../../globals/images/base/ton.svg'
import Tether from '../../globals/images/base/usdt_ton.svg'
import './styles/Loading.scss'
// import WalletIsCreatedPage from '../wallet_is_created/WalletIsCreatedPage'
// import { Link } from 'react-router-dom'

const LoadingPage = () => {
	useEffect(() => {
		const redirectTimer = setTimeout(() => {
			window.location.href = '/test-app/created' // Замените ссылку на нужную
		}, 6000)

		return () => clearTimeout(redirectTimer)
	}, [])

	return (
		<>
			<div className='conatiner-loading'>
				<div className='wrapper'>
					<div className='loading-container'>
						<img className='notcoin-1' src={Notcoin} alt='Notcoin' />
						<img className='durev-1' src={Durev} alt='Pavel Durev' />
						<img className='ton-1' src={Ton} alt='Ton' />
						<img className='tether-1' src={Tether} alt='Tether' />
						<img className='notcoin-2' src={Notcoin} alt='Notcoin' />
						<img className='durev-2' src={Durev} alt='Pavel Durev' />
						<img className='ton-2' src={Ton} alt='Ton' />
						<img className='tether-2' src={Tether} alt='Tether' />
					</div>
					<span className='loading-title'>
						<h1>Creating a wallet...</h1>
						<h2>Almost done</h2>
					</span>
				</div>
			</div>
		</>
	)
}

export default LoadingPage
