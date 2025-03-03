import '../index.css'
import MedicineImage from '../assets/caduceo.png'
import Home from '../assets/pagina-de-inicio (2).png'
import Information from '../assets/informacion.png'
import Resource from '../assets/productividad.png'
import { useEffect, useState } from 'react'
export default function Header() {
	const [activeOption,setActiveOption]=useState('home')

	const handleOptionClick = (option:string)=>{
		setActiveOption(option)
	}

	useEffect(() => {
		const handleScroll = () => {
		  const sections = document.querySelectorAll('section');
		  const scrollPosition = window.scrollY + window.innerHeight / 2;
	
		  sections.forEach(section => {
			if (
			  scrollPosition >= section.offsetTop &&
			  scrollPosition < section.offsetTop + section.offsetHeight
			) {
			  handleOptionClick(section.id);
			}
		  });
		};
	
		window.addEventListener('scroll', handleScroll);
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);
	return (
		<header className='header'>
			<div className='logo'>
				<img src={MedicineImage} alt="Medicine" className='medicineLogo'/>
				<h2 className='title'>SaludConex</h2>
			</div>
			<div className='containerOptions'>
				<div className={`option ${activeOption === 'home' ? 'optionActive' : ''}`}
					onClick={()=>handleOptionClick('home')}
				>
					<img src={Home} alt="home" className='imageOption' />
					<a href="#home">Inicio</a>
				</div>
				<div className={`option ${activeOption === 'information' ? 'optionActive' : ''}`}
					onClick={()=>handleOptionClick('information')}>
					<img src={Information} alt="information" className='imageOption' />
					<a href="#information">Información</a>
				</div>
				<div className={`option ${activeOption === 'resources' ? 'optionActive' : ''}`}
					onClick={()=>handleOptionClick('resources')}>
					<img src={Resource} alt="resources" className='imageOption' />
					<a href="#resources">Recursos</a>
				</div>
			</div>
		</header>
	)
}
