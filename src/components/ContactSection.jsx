import { CONTACT } from "../constants"


const ContactSection = () => {
	return (
		<section className="container mx-auto mt-8 py-4" id="contact">
			<h2 className="mt-20 mb-12 text-center lg:text-4xl">
				Наши контакты
			</h2>
			<div className="text-neutral-400">
				{CONTACT.map((detail) => (
					<p key={detail.key} 
					className="my-8 border-b-2 border-dotted
					border-neutral-700 pb-12 text-center text-xl tracking-tighter lg:text-2xl">
						{detail.value}
					</p>
				))}
			</div>
		</section>
	)
}

export default ContactSection
