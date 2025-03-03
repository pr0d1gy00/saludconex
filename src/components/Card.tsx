

interface CardProps{
	Image:string,
	CircleImage:string,
	title:string
}

export default function Card({Image,CircleImage,title}:CardProps) {
	return (
		<div className='cardContainer'>
			<div className='cardImage'>
				<img src={Image} alt="" />
			</div>
			<div className='cardCircleImage'>
				<img src={CircleImage} alt="" />
			</div>
			<div className='cardInfo'>
				<h3>{title}</h3>
				<button title='showMore' className='buttonShowMore' >Ver más</button>
			</div>
		</div>
	)
}
