import { SetStateAction,Dispatch } from "react"


interface CardProps{
	Image:string,
	CircleImage:string,
	title:string
	setShowModal:Dispatch<SetStateAction<boolean>>
	showModal:boolean
	id:string
	setId:Dispatch<SetStateAction<string>>
}

export default function Card({Image,CircleImage,title,setShowModal,id,setId}:CardProps) {
	const handleOpen = ()=>{
		setShowModal(true)
		setId(id)
	}
	return (
		<div className='cardContainer' id={id}>
			<div className='cardImage'>
				<img src={Image} alt="" />
			</div>
			<div className='cardCircleImage'>
				<img src={CircleImage} alt="" />
			</div>
			<div className='cardInfo'>
				<h3>{title}</h3>
				<button title='showMore' className='buttonShowMore' onClick={handleOpen} >Ver más</button>
			</div>
		</div>
	)
}
