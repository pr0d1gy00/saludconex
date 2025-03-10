import { useState } from "react";
import '../index.css'
import Image1 from '../assets/160148195-médicos-médicos-hablando-con-un-especialista-médico-durante-la-teleconferencia-personal-de-medicina.jpg'
import Image2 from '../assets/patient-looking-at-dr-with-x-ray.jpg'
import Image3 from '../assets/AdobeStock_404903585.jpeg'
import Image4 from '../assets/images.jpg'
import ArrowRight from '../assets/flecha-correcta (1).png'
import ArrowLeft from '../assets/flecha-izquierda.png'

export default function Carousel() {
	const images :string[] = [Image1,Image2,Image3,Image4];
	const [selectedIndex,setSelectedIndex]=useState(0)
	const [selectedImage,setSelectedImage]=useState(images[selectedIndex])

	const selectedNewImage = (index: number,images:string[],next=true)=>{
		console.log(index)
		const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
		const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
		setSelectedImage(images[nextIndex])
		setSelectedIndex(nextIndex)
	}

	const previous = ()=>{
		selectedNewImage(selectedIndex,images,false)
	}

	const next = ()=>{
		selectedNewImage(selectedIndex,images)
	}
	return (
		<section className="home" id="home">
			<div className="carouselContainer">
					<button title="previous" onClick={previous} className="buttonSelectedImage">
						<img src={ArrowLeft} alt="" className="arrowImage" />
					</button>
					
				
				<img src={selectedImage} alt="carouselImages" />
				<button title="next" onClick={next} className="buttonSelectedImage">
						<img src={ArrowRight} alt="" className="arrowImage" />
					</button>
			</div>
		</section>
	)
}
