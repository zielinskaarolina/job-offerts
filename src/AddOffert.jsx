import React, { useEffect, useState } from 'react';

function AddOffert() {
	const [currentDate, setCurrentDate] = useState('');

	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [minPriceInput, setMinPriceInput] = useState(0);
	const [maxPriceInput, setMaxPriceInput] = useState(1000);

	//wyświetlanie daty

	useEffect(() => {
		const date = new Date().toISOString().slice(0, 10);
		setCurrentDate(date);
	}, []);

	//slidery kwoty

	useEffect(() => {
		setMinPriceInput(minPrice);
	}, [minPrice]);

	useEffect(() => {
		setMaxPriceInput(maxPrice);
	}, [maxPrice]);

	const updateMinPrice = (value) => {
		let minValue = parseInt(value);
		let maxValue = parseInt(maxPrice);
		if (minValue >= maxValue) {
			minValue = maxValue - 100;
		}
		setMinPrice(minValue);
		setMinPriceInput(minValue);
	};

	const updateMaxPrice = (value) => {
		let minValue = parseInt(minPrice);
		let maxValue = parseInt(value);
		if (maxValue <= minValue) {
			maxValue = minValue + 100;
		}
		setMaxPrice(maxValue);
		setMaxPriceInput(maxValue);
	};

	const updateMinPriceInput = (value) => {
		let minValue = parseInt(value);
		let maxValue = parseInt(maxPriceInput);
		if (minValue >= maxValue) {
			minValue = maxValue - 100;
		}
		setMinPriceInput(minValue);
		setMinPrice(minValue);
	};

	const updateMaxPriceInput = (value) => {
		let minValue = parseInt(minPriceInput);
		let maxValue = parseInt(value);
		if (maxValue <= minValue) {
			maxValue = minValue + 100;
		}
		setMaxPriceInput(maxValue);
		setMaxPrice(maxValue);
	};

	useEffect(() => {
		const form = document.querySelector('form');
		const successMessage = document.getElementById('myModal');
		const closeButton = document.querySelector('.close');

		const handleSubmit = (event) => {
			event.preventDefault();
			successMessage.style.display = 'block';
		};

		const handleClose = () => {
			successMessage.style.display = 'none';
		};

		form.addEventListener('submit', handleSubmit);
		closeButton.addEventListener('click', handleClose);

		// Cleanup event listeners on component unmount
		return () => {
			form.removeEventListener('submit', handleSubmit);
			closeButton.removeEventListener('click', handleClose);
		};
	}, []);

	useEffect(() => {
		document.getElementById('phone').addEventListener('input', function (e) {
			let input = e.target.value.replace(/\D/g, '').substring(0, 9);
			let formatted = '';
			for (let i = 0; i < input.length; i++) {
				if (i > 0 && i % 3 === 0) {
					formatted += ' ';
				}
				formatted += input[i];
			}
			e.target.value = formatted;
		});
	}, []);

	return (
		<div id='form-container'>
			<span id='submission-date'>
				Data wysłania formularza: <span id='current-date'>{currentDate}</span>
			</span>
			<h2>Formularz zgłoszeniowy</h2>
			<form action='NazwaPlikuGdzieBędzieTenFormularz' method='post'>
				<div className='form-group'>
					<label htmlFor='fullname'>Imię i Nazwisko:</label>
					<input type='text' id='fullname' name='fullname' required />
				</div>
				<div className='form-group'>
					<label htmlFor='email'>E-mail:</label>
					<input
						type='email'
						id='email'
						name='email'
						required
						pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
						title='Wprowadź poprawny adres e-mail'
						className='input-with-placeholder'
						placeholder='example@mail.com'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='phone_code'>Kierunkowy:</label>
					<select id='phone_code' name='phone_code' required>
						<option value=''>Wybierz kierunkowy</option>
						<option value=''>Wybierz kierunkowy</option>
						<option value='+93'>Afganistan (+93)</option>
						<option value='+355'>Albania (+355)</option>
						<option value='+213'>Algeria (+213)</option>
						<option value='+376'>Andora (+376)</option>
						<option value='+244'>Angola (+244)</option>
						<option value='+1264'>Anguilla (+1264)</option>
						<option value='+1268'>Antigua i Barbuda (+1268)</option>
						<option value='+599'>Antyle Holenderskie (+599)</option>
						<option value='+966'>Arabia Saudyjska (+966)</option>
						<option value='+54'>Argentyna (+54)</option>
						<option value='+374'>Armenia (+374)</option>
						<option value='+297'>Aruba (+297)</option>
						<option value='+61'>Australia (+61)</option>
						<option value='+43'>Austria (+43)</option>
						<option value='+994'>Azerbejdżan (+994)</option>
						<option value='+1242'>Bahama (+1242)</option>
						<option value='+973'>Bahrajn (+973)</option>
						<option value='+880'>Bangladesz (+880)</option>
						<option value='+1246'>Barbados (+1246)</option>
						<option value='+680'>Belau (+680)</option>
						<option value='+32'>Belgia (+32)</option>
						<option value='+501'>Belize (+501)</option>
						<option value='+229'>Benin (+229)</option>
						<option value='+1441'>Bermudy (+1441)</option>
						<option value='+975'>Bhutan (+975)</option>
						<option value='+375'>Białoruś (+375)</option>
						<option value='+591'>Boliwia (+591)</option>
						<option value='+267'>Bostwana (+267)</option>
						<option value='+387'>Bośnia i Hercegowina (+387)</option>
						<option value='+55'>Brazylia (+55)</option>
						<option value='+673'>Brunei (+673)</option>
						<option value='+359'>Bułgaria (+359)</option>
						<option value='+226'>Burkina Faso (+226)</option>
						<option value='+257'>Burundi (+257)</option>
						<option value='+56'>Chile (+56)</option>
						<option value='+86'>Chiny (+86)</option>
						<option value='+385'>Chorwacja (+385)</option>
						<option value='+682'>Cooka w-py (+682)</option>
						<option value='+357'>Cypr (+357)</option>
						<option value='+235'>Czad (+235)</option>
						<option value='+420'>Czechy (+420)</option>
						<option value='+45'>Dania (+45)</option>
						<option value='+246'>Diego Garcia (+246)</option>
						<option value='+1767'>Dominika (+1767)</option>
						<option value='+1809'>Dominikana (+1809)</option>
						<option value='+1284'>Dziewicze Wyspy Brytyjskie (+1284)</option>
						<option value='+1340'>
							Dziewicze Wyspy Stanów Zjednoczonych (+1340)
						</option>
						<option value='+253'>Dżibuti (+253)</option>
						<option value='+20'>Egipt (+20)</option>
						<option value='+593'>Ekwador (+593)</option>
						<option value='+291'>Erytrea (+291)</option>
						<option value='+372'>Estonia (+372)</option>
						<option value='+251'>Etiopia (+251)</option>
						<option value='+500'>Falklandy (+500)</option>
						<option value='+679'>Fidżi (+679)</option>
						<option value='+63'>Filipiny (+63)</option>
						<option value='+358'>Finlandia (+358)</option>
						<option value='+33'>Francja (+33)</option>
						<option value='+241'>Gabon (+241)</option>
						<option value='+220'>Gambia (+220)</option>
						<option value='+233'>Ghana (+233)</option>
						<option value='+350'>Gibraltar (+350)</option>
						<option value='+30'>Grecja (+30)</option>
						<option value='+299'>Grenlandia (+299)</option>
						<option value='+995'>Gruzja (+995)</option>
						<option value='+1671'>Guam (+1671)</option>
						<option value='+592'>Gujana (+592)</option>
						<option value='+594'>Gujana Francuska (+594)</option>
						<option value='+590'>Gwadelupa (+590)</option>
						<option value='+502'>Gwatemala (+502)</option>
						<option value='+224'>Gwinea (+224)</option>
						<option value='+245'>Gwinea Bissau (+245)</option>
						<option value='+240'>Gwinea Równikowa (+240)</option>
						<option value='+509'>Haiti (+509)</option>
						<option value='+34'>Hiszpania (+34)</option>
						<option value='+31'>Holandia (+31)</option>
						<option value='+504'>Honduras (+504)</option>
						<option value='+852'>Hongkong (+852)</option>
						<option value='+91'>Indie (+91)</option>
						<option value='+62'>Indonezja (+62)</option>
						<option value='+964'>Irak (+964)</option>
						<option value='+98'>Iran (+98)</option>
						<option value='+353'>Irlandia (+353)</option>
						<option value='+354'>Islandia (+354)</option>
						<option value='+972'>Izrael (+972)</option>
						<option value='+1876'>Jamajka (+1876)</option>
						<option value='+81'>Japonia (+81)</option>
						<option value='+967'>Jemen (+967)</option>
						<option value='+962'>Jordania (+962)</option>
						<option value='+1345'>Kajmany (+1345)</option>
						<option value='+855'>Kambodża (+855)</option>
						<option value='+237'>Kamerun (+237)</option>
						<option value='+1'>Kanada (+1)</option>
						<option value='+34'>Kanaryjskie Wyspy (+34)</option>
						<option value='+974'>Katar (+974)</option>
						<option value='+7'>Kazachstan (+7)</option>
						<option value='+254'>Kenia (+254)</option>
						<option value='+996'>Kirgistan (+996)</option>
						<option value='+686'>Kiribati (+686)</option>
						<option value='+57'>Kolumbia (+57)</option>
						<option value='+269'>Komory (+269)</option>
						<option value='+242'>Kongo (+242)</option>
						<option value='+243'>Kongo R.D. (Zair) (+243)</option>
						<option value='+82'>Korea Południowa (+82)</option>
						<option value='+850'>Koreańska R.L.D. (+850)</option>
						<option value='+506'>Kostaryka (+506)</option>
						<option value='+53'>Kuba (+53)</option>
						<option value='+965'>Kuwejt (+965)</option>
						<option value='+856'>Laos (+856)</option>
						<option value='+266'>Lesotho (+266)</option>
						<option value='+961'>Liban (+961)</option>
						<option value='+231'>Liberia (+231)</option>
						<option value='+218'>Libia (+218)</option>
						<option value='+4175'>Lichtenstein (+4175)</option>
						<option value='+370'>Litwa (+370)</option>
						<option value='+352'>Luksemburg (+352)</option>
						<option value='+371'>Łotwa (+371)</option>
						<option value='+389'>Macedonia (+389)</option>
						<option value='+261'>Madagaskar (+261)</option>
						<option value='+853'>Makau (+853)</option>
						<option value='+265'>Malawi (+265)</option>
						<option value='+960'>Malediwy (+960)</option>
						<option value='+60'>Malezja (+60)</option>
						<option value='+223'>Mali (+223)</option>
						<option value='+356'>Malta (+356)</option>
						<option value='+1670'>Mariany (Saipan) (+1670)</option>
						<option value='+212'>Maroko (+212)</option>
						<option value='+692'>Marshalla Wyspy (+692)</option>
						<option value='+596'>Martynika (+596)</option>
						<option value='+222'>Mauretania (+222)</option>
						<option value='+230'>Mauritius (+230)</option>
						<option value='+52'>Meksyk (+52)</option>
						<option value='+95'>Mianmar (Birma) (+95)</option>
						<option value='+691'>Mikronezja (+691)</option>
						<option value='+373'>Mołdawia (+373)</option>
						<option value='+377'>Monako (+377)</option>
						<option value='+976'>Mongolia (+976)</option>
						<option value='+1664'>Monserrat (+1664)</option>
						<option value='+258'>Mozambik (+258)</option>
						<option value='+264'>Namibia (+264)</option>
						<option value='+674'>Nauru (+674)</option>
						<option value='+977'>Nepal (+977)</option>
						<option value='+49'>Niemcy (+49)</option>
						<option value='+227'>Niger (+227)</option>
						<option value='+234'>Nigeria (+234)</option>
						<option value='+505'>Nikaragua (+505)</option>
						<option value='+683'>Niue (+683)</option>
						<option value='+672'>Norfolk Wyspa (+672)</option>
						<option value='+47'>Norwegia (+47)</option>
						<option value='+687'>Nowa Kaledonia (+687)</option>
						<option value='+64'>Nowa Zelandia (+64)</option>
						<option value='+968'>Oman (+968)</option>
						<option value='+298'>Owcze Wyspy (+298)</option>
						<option value='+92'>Pakistan (+92)</option>
						<option value='+507'>Panama (+507)</option>
						<option value='+675'>Papua Nowa Gwinea (+675)</option>
						<option value='+595'>Paragwaj (+595)</option>
						<option value='+51'>Peru (+51)</option>
						<option value='+689'>Polinezja Francuska (+689)</option>
						<option value='+48'>Polska (+48)</option>
						<option value='+351'>Portugalia (+351)</option>
						<option value='+1787'>Puerto Rico (+1787)</option>
						<option value='+27'>Republika Południowej Afryki (+27)</option>
						<option value='+236'>Republika Środkowoafrykańska (+236)</option>
						<option value='+262'>Reunion (+262)</option>
						<option value='+7'>Rosja (+7)</option>
						<option value='+40'>Rumunia (+40)</option>
						<option value='+250'>Rwanda (+250)</option>
						<option value='+1869'>Saint Christopher i Nevis (+1869)</option>
						<option value='+1758'>Saint Lucia (+1758)</option>
						<option value='+1809'>Saint Vincent (+1809)</option>
						<option value='+677'>Salomona Wyspy (+677)</option>
						<option value='+503'>Salwador (+503)</option>
						<option value='+684'>Samoa (+684)</option>
						<option value='+685'>Samoa Zachodnie (+685)</option>
						<option value='+378'>San Marino (+378)</option>
						<option value='+221'>Senegal (+221)</option>
						<option value='+248'>Seszele (+248)</option>
						<option value='+232'>Sierra Leone (+232)</option>
						<option value='+65'>Singapur (+65)</option>
						<option value='+421'>Słowacja (+421)</option>
						<option value='+386'>Słowenia (+386)</option>
						<option value='+252'>Somalia (+252)</option>
						<option value='+94'>Sri Lanka (+94)</option>
						<option value='+1'>Stany Zjednoczone Ameryki (+1)</option>
						<option value='+268'>Suazi (+268)</option>
						<option value='+249'>Sudan (+249)</option>
						<option value='+597'>Surinam (+597)</option>
						<option value='+963'>Syria (+963)</option>
						<option value='+41'>Szwajcaria (+41)</option>
						<option value='+46'>Szwecja (+46)</option>
						<option value='+290'>Św. Heleny Wyspa (+290)</option>
						<option value='+508'>Św. Piotra i Mikeleona Wyspy (+508)</option>
						<option value='+239'>Św. Tomasza Wyspy (+239)</option>
						<option value='+7'>Tadżykistan (+7)</option>
						<option value='+66'>Tajlandia (+66)</option>
						<option value='+886'>Tajwan (+886)</option>
						<option value='+255'>Tanzania (+255)</option>
						<option value='+228'>Togo (+228)</option>
						<option value='+690'>Tokelau (+690)</option>
						<option value='+676'>Tonga (+676)</option>
						<option value='+1868'>Trynidad i Tobago (+1868)</option>
						<option value='+216'>Tunezja (+216)</option>
						<option value='+90'>Turcja (+90)</option>
						<option value='+993'>Turkmenistan (+993)</option>
						<option value='+1649'>Turkis Caicos?(wyspy) (+1649)</option>
						<option value='+688'>Tuvalu (+688)</option>
						<option value='+256'>Uganda (+256)</option>
						<option value='+380'>Ukraina (+380)</option>
						<option value='+598'>Urugwaj (+598)</option>
						<option value='+7'>Uzbekistan (+7)</option>
						<option value='+678'>Vanuatu (+678)</option>
						<option value='+681'>Walia (+681)</option>
						<option value='+396'>Watykan (+396)</option>
						<option value='+58'>Wenezuela (+58)</option>
						<option value='+36'>Węgry (+36)</option>
						<option value='+44'>Wielka Brytania (+44)</option>
						<option value='+84'>Wietnam (+84)</option>
						<option value='+39'>Włochy (+39)</option>
						<option value='+247'>Wniebowstąpienia Wyspy (+247)</option>
						<option value='+225'>Wybrzeże Kości Słoniowej (+225)</option>
						<option value='+225'>Jamusukro (+225)</option>
						<option value='+260'>Zambia (+260)</option>
						<option value='+259'>Zanzibar (+259)</option>
						<option value='+263'>Zimbabwe (+263)</option>
						<option value='+971'>Zjednoczone Emiraty Arabskie (+971)</option>
					</select>
					<br />
					<br />
					<label htmlFor='phone'>Numer Telefonu:</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						required
						pattern='[0-9\s]{9,13}'
						title='Wprowadź 9-cyfrowy numer telefonu'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='Position'>Stanowisko:</label>
					<input type='text' id='Position' name='Position' required />
				</div>
				<div className='container'>
					<div className='range-slider'>
						<div className='labels'>
							<label htmlFor='minPrice'>Min:</label>
							<label htmlFor='maxPrice'>Max:</label>
						</div>
						<input
							type='range'
							id='minPrice'
							min='0'
							max='10000'
							value={minPrice}
							step='100'
							onChange={(e) => updateMinPrice(e.target.value)}
						/>
						<br />
						<input
							type='range'
							id='maxPrice'
							min='0'
							max='10000'
							value={maxPrice}
							step='100'
							onChange={(e) => updateMaxPrice(e.target.value)}
						/>
						<br />
						<div className='price-input'>
							<label htmlFor='minPriceInput'>Minimalna kwota:</label>
							<div className='input-wrapper'>
								<input
									type='number'
									id='minPriceInput'
									value={minPriceInput}
									min='0'
									max='10000'
									step='100'
									onChange={(e) => updateMinPriceInput(e.target.value)}
								/>
								<span className='currency'>zł</span>
							</div>
							<label htmlFor='maxPriceInput'>Maksymalna Kwota:</label>
							<div className='input-wrapper'>
								<input
									type='number'
									id='maxPriceInput'
									value={maxPriceInput}
									min='0'
									max='10000'
									step='100'
									onChange={(e) => updateMaxPriceInput(e.target.value)}
								/>
								<span className='currency'>zł</span>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className='form-group' id='success-message'>
					<button type='submit' value='Wyślij' id='myBtn'>
						Wyślij formularz
					</button>
				</div>
				<div id='myModal' className='modal'>
					<div className='modal-content'>
						<span className='close'>&times;</span>
						<p>Formularz został pomyślnie wysłany!</p>
					</div>
				</div>
			</form>

			<div id='panel' className='panel'>
				<div className='panel-header'>
					<h2>Kompetencje IT</h2>
					<span className='close-panel'>&times;</span>
				</div>
			</div>
		</div>
	);
}

export default AddOffert;
