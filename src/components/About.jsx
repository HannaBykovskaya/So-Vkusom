import about from "../assets/about.jpeg"
import { ABOUT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
	return (
		<section className="container mx-auto mb-8  px-4 lg:pl-4"
		id="about">
			<h2 className="mb-8 text-center text-3xl tracking-tighter
			 lg:text-4xl">
				О нас
			</h2>
			<div className="flex flex-wrap mx-auto">
				<div className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
					<img src={about}
					className="rounded-2xl lg:-rotate-3 md:-rotate-3"/>
				</div>
				<div className="w-full flex flex-col pb-8
				 pl-2 lg:w-1/2 md:w-1/2 sm:w-1/2 lg:pl-6 md:pl-6 sm:pl-6">
					<motion.h2 
					initial={{ opacity:0, y: 50}}
					whileInView={{ opacity:1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6, delay: 0.2}}
					className="text-2xl tracking-tighter
					 pt-4 lg:text-4xl lg:pt-0 md:pt-0 sm:pt-0">
						{ABOUT.header}
					</motion.h2>
					<motion.div
					initial={{ opacity:0, y: 50}}
					whileInView={{ opacity:1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6, delay: 0.2}}
					
					 className="h-2 w-36
					bg-rose-300 lg:-rotate-3 md:-rotate-3 sm:-rotate-3 "></motion.div>
					<motion.p 
					initial={{ opacity:0, y: 50}}
					whileInView={{ opacity:1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6, delay: 0.6}}
					
					className="text-lg lg:text-2xl leading-relaxed pt-4
					tracking-tighter lg:max-w-xl">
						{ABOUT.content}
					</motion.p>
				</div>
			</div>
		</section>
	)
}

export default About