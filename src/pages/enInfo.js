import React from 'react';
import { About } from '../components/styledAbout';
import ContactForm from '../components/contactForm';

export default () => (
	<About lang='en'>
		<img
			className='portrait'
			src='/profileImg.jpg'
			alt='Marek Kulhavý'
		/>
		<span className='about'>
			<h1>Marek Kulhavý aka Mára Čmára</h1>
			<p>
				I´m profesional illustrator based in Prague. I focus mainly on editorial
				illustration, illustrating magazine covers, posters or making comics. My
				work is specific for its distinctive colors and combination of analogue
				and digital media. Illustration is a means of communication, which is
				why I always approach it with a modern attitude. You could see my
				illustrations in a magazine, for example RedWay or Charles University
				magazines. You can know my work from competitions "Raw Art Wrestling"
				and "Art Wall" or the comics festival KOMA.
			</p>
			<p>
				I can illustrate for you articles, magazines and book covers, covers for
				music records, comics, websites or mural art designs. There are no
				limits to imagination.
			</p>
		</span>
        <span className='contacts'>
			<h1>Contact</h1>
			<p>Marek Kulhavý</p>
			<a href='mailto:mara.kulhavy@gmail.com'>e-mail: mara.kulhavy@gmail.com</a><br/>
			<a href='tel: +420 732 113 436'>tel: +420 732 113 436</a>

			<ContactForm />
        
		
			<p>
				Ič: 07798288
				<br />In registry since: 14.1.2019
			</p>
            
		</span>
	</About>
);
