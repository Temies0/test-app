// import ArrowBack from '../../globals/components/ui/ArrowBack'
import { Link } from 'react-router-dom'
// import MainPage from '../main/MainPage'
import './styles/LogIn.scss'

const LogInPage = () => {
	return (
		<>
			<div className='container-login'>
				{/* <ArrowBack /> */}
				<span className='enter-title'>
					<h1>Enter the secret key</h1>
					<h2>
						To restore access, enter the 24 secret words you <br />
						received when creating the wallet
					</h2>
				</span>
				<div className='input-container'>
					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								1
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								2
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								3
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								4
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								5
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								6
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								7
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								8
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								9
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								10
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								11
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								12
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								13
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								14
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								15
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								16
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								17
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								18
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								19
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								20
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								21
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								22
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								23
							</label>
						</div>
					</form>

					<form action='' className='form-container'>
						<div>
							<input type='text' className='secret-key-input' required />
							<label className='numbered-label' htmlFor=''>
								24
							</label>
						</div>
					</form>
				</div>
				<Link to='/test-app/main'>
					<button className='start'>
						<p>Let’s goo</p>
					</button>
				</Link>
			</div>
		</>
	)
}

export default LogInPage
