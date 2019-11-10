import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CForm } from './styledForm';
import { LangContext } from '../LangContext';

function encode (data){
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
}

export default () => {
	const [ state, setState ] = useState({});
	const [ lang, setLang ] = useContext(LangContext);
	const [ submitted, setSubmitted ] = useState(false);
	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		axios
			.post(
				'/',
				encode({
					'form-name' : form.getAttribute('name'),
					...state,
				}),
				{
					headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
				},
			)
			.then((res) => {
				setSubmitted(true);
			});
	};
	return (
		<CForm className='CForm'>
			{
				submitted ? <div className='thanks'>
					{
						lang === 'en' ? <p>
							Thanks for your message.We'll be in contact with you as soon aspossible.
						</p> :
						<p>Děkuji za vaši zprávu. Ozvu se vám hned jak to bude možné.</p>}
				</div> :
				<form
					className='Form'
					name='contact'
					method='post'
					data-netlify='true'
					data-netlify-honeypot='bot-field'
					onSubmit={handleSubmit}>
					<div style={{ height: 0, overflow: 'hidden' }}>
						<input name='bot-field' onChange={handleChange} />
					</div>
					<input type='email' name='email' onChange={handleChange} placeholder='e-mail' required />
					<textarea
						maxLength='500'
						type='text'
						name='message'
						onChange={handleChange}
						placeholder='...'
						required
					/>
					<input className='button' type='image' name='submit' src='/icons/send.svg' />
				</form>}
		</CForm>
	);
};
