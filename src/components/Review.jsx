import { REVIEW } from "../constants"
import ramsey from "../assets/ramsey.jpg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"
import { motion } from "framer-motion"

const containerVariants = {
	hidden: {opacity: 0},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.8
		}
	}
}

const itemVariants = {
	hidden: {opacity: 0, y: 20},
	show: {
		opacity: 1,
		y: 20,
		transition: {
			duration: 0.5
		}
	}
}


const Review = () => {
	return (
		<section id="review" className="container px-4 mx-auto mt-20">
			<motion.div 
				initial="hidden"
				whileInView="show"
				variants={containerVariants}
				viewport={ {once: true} }
			
			className="flex flex-col">
				<motion.p
				variants={itemVariants}
				className="mb-10 txt-3xl font-light leading-normal
				tracking-tighter lg:mx-40 lg:mt-10 lg:text-[2.5rem] hyphens-auto italic">
					{REVIEW.content}
				</motion.p>
				<motion.div
					variants={itemVariants}
				 className="flex items-center justify-center gap-6">
					<img src={ramsey} width={80} height={80}
						alt={REVIEW.name}
						className="rounded-full border"
					/>
					<div className="tracking-tighter">
						<h6>{REVIEW.name}</h6>
						<p className="text-sm text-neutral-500" >{REVIEW.profession}</p>
					</div>
				</motion.div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="show"
				variants={itemVariants}
				viewport={ {once: true} }
			 className="mt-12 flex flex-col items-center
			justify-center gap-2 md:flex-row" >
				{[customer1, customer2, customer3, customer4].map((customer, index) => (
					<motion.img
					variants={itemVariants}
					key={index} src={customer}
						className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl
						object-cover"
					/>
				))}
			</motion.div>
		</section>
	)
}

export default Review
