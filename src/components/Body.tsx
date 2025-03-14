import '../index.css'
import informationImage from '../assets/Captura-de-pantalla-2019-02-22-a-las-10.39.10-Photoroom.png'
import GeneralObjectiveImage from '../assets/publico-objetivo.png'
import SpecificObjectiveImage from '../assets/publico-objetivo (1).png'
import	GeneralObjectiveInformationImage from '../assets/ordenador-portatil.png'
import SpecificObjectiveInformationImage1 from '../assets/conferencia.png'
import SpecificObjectiveInformationImage2 from '../assets/agente.png'
import SpecificObjectiveInformationImage3 from '../assets/promover.png'
import ImageAcademicResources from '../assets/repositorios-digitales.jpg'
import CircleImageAcademicResources from '../assets/graduacion.png'
import ImageOnlineVirtualForums from '../assets/12760664_4Z_2101.w017.n001.348B.p15.348-1024x512.jpg'
import CircleImageOnlineVirtualForums from '../assets/chat.png'
import ImageVirtualMentoring from '../assets/ed_12-800x800.png'
import CircleImageVirtualMentoring from '../assets/clase-virtual.png'
import Card from './Card'
import Carousel from './Carousel'
import { useState } from 'react'
import { Box, Modal } from '@mui/material'
import Meeting from '../assets/reunion.png'

export default function Body() {
	const [showModal,setShowModal]=useState(false)
	const [id,setId]=useState('')
	const forums = [
		{
			name: 'Google Meet',
			link: 'https://meet.google.com/landing',
			icon: Meeting
		},
		{
			name: 'Zoom',
			link: 'https://www.zoom.com/es',
			icon: Meeting
		},
		{
			name: 'Microsoft Teams',
			link: 'https://www.microsoft.com/es-es/microsoft-teams/log-in',
			icon: Meeting
		}
	]
	const handleClose = ()=>{
		setShowModal(false)
	}
	return (
		<main className='main'>
			<Carousel/>
			<section className='containerInformation' id='information'>
				<h2 className='titleInformation'>Programa de estrategias virtuales para la gestión del conocimiento dirigido a los profesionales de enfermería de la Coordinación docente</h2>
				<div className='information'>
					<img src={informationImage} alt="informationImage" className='informationImage' />
					<p>La gestión del conocimiento en el ámbito de la salud promueve la investigación, en la que se hace necesario acudir a fuentes de información confiables y verificadas, de tal manera que los hallazgos encontrados sean fidedignos y de gran valor en el campo de la investigación científica. En este sentido, la gestión del conocimiento debe estar acompañada de estrategias virtuales que permitan a los investigadores presentar y adquirir nuevas formas de aprendizaje, en las que logren desarrollar y potenciar sus competencias en la investigación, actualización tecnológica, sistematización de información, manejo de la virtualidad, el desarrollo de la creatividad y la mejor comprensión sobre las nuevas tendencias educativas que le permitan desempeñarse de una manera más amena, confiable y segura en la realización de sus actividades, destacándose tanto en el campo educativo como en el entorno laboral, generando transformaciones sustanciales en la manera de percibir los cambios tecnológicos y sociales en el que se desenvuelve, haciéndose cada vez más competitivo de acuerdo a las exigencias del mundo actual.</p>
				</div>
				<div className='Containerobjectives'>
					<div className='ContainerGeneralObjective'>
						<div className='generalObjective'>
							<img src={GeneralObjectiveImage} alt="objetivo general" className='objectiveImage' />
							<h3>Objetivo General</h3>
						</div>
						<div className='objectiveInformation' >
							<img src={GeneralObjectiveInformationImage} alt="informationobjectivegeneral" />
							<p>
							Proporcionales estrategias virtuales para la gestión del conocimiento dirigido a los profesionales de enfermería de la Coordinación docente del IVSS Hospital General Regional Dr. Pastor Oropeza Riera. Barquisimeto, estado Lara</p>
						</div>
					</div>
					<div className='ContainerSpecificObjective'>
						<div className='specificObjective'>
							<img src={SpecificObjectiveImage} alt="objetivo especifico" className='objectiveImage' />
							<h3>Objetivo Especifico</h3>
						</div>
						<div className='objectiveInformation' >
							<img src={SpecificObjectiveInformationImage1} alt="informationobjectivegeneral" />
							<p>
							Capacitar en el uso de uso de estrategias virtuales para la gestión del conocimiento de los profesionales de enfermería de la Coordinación docente del IVSS Hospital General Regional Dr. Pastor Oropeza Riera. Barquisimeto, estado Lara.</p>
						</div>
						<div className='objectiveInformation' >
							<img src={SpecificObjectiveInformationImage2} alt="informationobjectivegeneral" />
							<p>
							Fomentar intercambio de información a traves de estrategias virtuales para la gestión del conocimiento de los profesionales de enfermería de la Coordinación docente del IVSS Hospital General Regional Dr. Pastor Oropeza Riera. Barquisimeto, estado Lara.</p>
						</div>
						<div className='objectiveInformation' >
							<img src={SpecificObjectiveInformationImage3} alt="informationobjectivegeneral" />
							<p>
							Promover el uso de estrategias virtuales para la gestión del conocimiento de los profesionales de enfermería de la Coordinación docente del IVSS Hospital General Regional Dr. Pastor Oropeza Riera. Barquisimeto, estado Lara</p>
						</div>
					</div>
				</div>
			</section>
			<section className='containerResources' id='resources'>
				<h2 className='titleResources'>Recursos</h2>
				<div className='cardResources'>
					<Card Image={ImageAcademicResources} CircleImage={CircleImageAcademicResources} title={'Repositorio de Recursos Academicos'} setShowModal={setShowModal} showModal={showModal} setId={setId} id='1'/>
					<Card Image={ImageVirtualMentoring} CircleImage={CircleImageVirtualMentoring} title={'Programa de Mentorías Virtuales'} setShowModal={setShowModal} showModal={showModal} setId={setId} id='2'/>
					<Card Image={ImageOnlineVirtualForums} CircleImage={CircleImageOnlineVirtualForums} title={'Foros Virtuales en Linea '} setShowModal={setShowModal} showModal={showModal} setId={setId} id='3'/>
				</div>
			</section>
			<Modal
			open={showModal}
			onClose={handleClose}
			sx={{display:'flex',justifyContent:'center',alignItems:'center'}}
			>	
				<Box sx={{ width: 500,backgroundColor:'white',height:500,borderRadius:10,padding:3 }}>
					<h2 className='titleModal'>Más información</h2>
					{id === '1'?
						<div className='academicResourcesContainer'>
							<a rel='noopener' href="https://drive.google.com/file/d/10_iH4ucqkUtMSCoF0MybF7UBEfBAzyTJ/view?usp=sharing" target='_blank'><button type='button' title='manual' className='academicResourcesManual'>Manual</button></a>
						</div>
						: id === '2' ? 
						<div className='virtualMentoringContainer'>

						</div> 
						:
						<div className='virtualForumsContainer'>
							{
								forums.map(forum=>
									<a href={forum.link} target='__blank' rel='noopener'>
										<button title={forum.name} type='button' className='virtualForumButton'>
											<img src={forum.icon} alt={forum.name} />
											{forum.name}
										</button>
									</a>
								)
							}
						</div>
					}
					
				</Box>
			</Modal>
		</main>
	)
}
