import React from 'react';
import { About } from '../components/styledAbout';
import ContactForm from '../components/contactForm';

export default () => (
	<About>
		<img className='portrait' src='/profileImg.jpg' alt='Marek Kulhavý' />
		<span className='about'>
			<h1>Marek Kulhavý aka Mára Čmára</h1>
			<p>
				Jsem profesionální ilustrátor působící v Praze. Věnuji se především
				užité ilustraci jako je editorial, obálky magazínů, tvorba plakátů či
				komiksů. Má tvorba je specifická svou výraznou barevností a kombinováním
				analogových a digitálních médií. Ilustrace je komunikačním prostředkem,
				a proto k ní vždy přistupuji s moderním postojem. S mými ilustracemi
				jste se mohli setkat například v magazínu RedWay nebo magazínech
				Univerzity Karlovy. Mou tvorbu můžete znát i ze soutěží „Raw Art
				Wrestling“ a „Art Wall“ nebo komiksového festivalu KOMA.
			</p>
			<p>
				Mohu pro Vás ilustrovat články, obálky magazínů a knih, obaly hudebních
				desek, komiksy, weby či návrhy pro mural art. Fantazii se meze nekladou.
			</p>
		</span>
		<span className='contacts'>
			<h1>Kontakty</h1>
			<ContactForm />
        
			<p>Marek Kulhavý</p>
			<a href='mailto:mara.kulhavy@gmail.com'>e-mail: mara.kulhavy@gmail.com</a><br/>
			<a href='tel: +420 732 113 436'>tel: +420 732 113 436</a>

			<p>
				Ič: 07798288
				<br /> V rejstříku od: 14.1.2019
			</p>
            
		</span>
	</About>
);
