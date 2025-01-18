import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import hero from "../assets/hero.png"
import { motion } from "framer-motion"


const HeroSection = () => {
	return (
		<section className="relative flex h-screen items-center justify-center">
			<div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
				<video
					src={video} className="h-full w-full object-cover"
					muted autoPlay loop playsInline poster={hero}></video>
			</div>
			<div className="absolute inset-0 -z-10 bg-gradient-to-b
				from-transparent from-70% to-black"></div>
			<div className="relative z-20 flex h-screen
				flex-col justify-end items-center  pb-20">
					<motion.img
					initial={{ opacity:0, y: 50}}
					animate={{ opacity:1, y: 0}}
					transition={{duration: 0.5}}
					 src={logo} alt="со вкусом"
					className="w-1/2 p-4"></motion.img>
					<p className="p-8 text-2xl tracking-tighter
					text-white">Ресторан
					</p>
			</div>
		
		</section>
	)
}

export default HeroSection