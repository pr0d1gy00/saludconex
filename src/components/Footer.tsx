import MedicineImage from '../assets/caduceo.png'
import '../index.css'
export default function Footer() {
	return (
		<footer className='footer'>
			<div className='logo'>
				<img src={MedicineImage} alt="Medicine" className='medicineLogo'/>
				<h2 className='title'>SaludConex</h2>
			</div>
			<p>Derechos reservados 2025. Elka</p>
		</footer>
	)
}
