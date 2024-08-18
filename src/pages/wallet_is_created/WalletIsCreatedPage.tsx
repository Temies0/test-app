import { generate } from 'random-words'
import { Route, Routes } from 'react-router-dom'
import ButtonCopy from '../../globals/components/ui/ButtonCopy'
import Done from '../../globals/images/base/done.svg'
import LogInPage from '../log_in/LogInPage'
import './styles/WalletIsCreated.scss'

const generateWalletAddress = (): string => {
	let characters: string =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
	let length: number = 30
	let address: string = ''

	for (let i = 0; i < length; i++) {
		address += characters.charAt(Math.floor(Math.random() * characters.length))
	}

	if (!address.includes('-') || !address.includes('_')) {
		return generateWalletAddress()
	}

	return address
}

let walletAddress: string = generateWalletAddress()
console.log(`Wallet Address is generated: ${walletAddress}`)

const key = String(generate(24))

const WalletIsCreatedPage = () => {
	return (
		<>
			<Routes>
				<Route path='/test-app/login' element={<LogInPage />} />
			</Routes>

			<div className='container'>
				<div className='wrapper-info'>
					<div className='done-image'>
						<img src={Done} alt='Done' />
					</div>
					<span className='title-done'>
						<h1>Wallet is created</h1>
						<h2>
							Write down the secret key <br />
							and keep it in a safe place
						</h2>
					</span>
				</div>
				<div className='wrapper-form'>
					<form action='' className='adress__wallet-adress'>
						<div className='adress__inner-wrapper'>
							<div className='adress__adress-wrapper'>
								<label className='adress__adress-label' htmlFor=''>
									Adress
								</label>
								<p className='adress__adress-name' id='adress-name'>
									{walletAddress}...
								</p>
							</div>
							<ButtonCopy />
						</div>
					</form>

					<form className='secret-key__wallet-secret-key' action=''>
						<div className='secret-key__inner-wrapper'>
							<div className='secret-key__secret-key-wrapper'>
								<label htmlFor='' className='secret-key__secret-key-label'>
									Secret Key
								</label>
								<p className='secret-key__secret-key-name' id='secret-key-name'>
									{key}
								</p>
							</div>
							<ButtonCopy />
						</div>
					</form>
				</div>
				<a href='/test-app/login'>
					<button className='start'>
						<p>Let’s goo</p>
					</button>
				</a>
			</div>
		</>
	)
}

export default WalletIsCreatedPage
