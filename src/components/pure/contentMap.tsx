import styles from '../styles/styles.module.css'
import { Countries } from '../types'

export const ContentMap: React.FC<MapData> = ({ data }): React.ReactElement => {
	return (
		<article>
			{data &&
				data.slice(0, 1).map((info) => {
					const nativeName: string | any = info.name.nativeName
					const currencies: any = info.currencies
					const language: any | undefined = info.languages
					function findLanguage() {
						for (let lang in nativeName) {
							const found = language[lang]

							return found
						}
					}
					const languageFound = findLanguage()
						? findLanguage()
						: 'No oficial language'
					function confirmCurrency() {
						for (let currency in currencies) {
							if (currencies[currency].hasOwnProperty('name') || undefined) {
								return currencies[currency].name || undefined
							}
						}
						return ''
					}
					const isCurrencyAvailable = currencies?.EUR
						? currencies.EUR.name
						: confirmCurrency()
					function confirmLang() {
						for (let lang in nativeName) {
							if (nativeName[lang].hasOwnProperty('common') || undefined) {
								return nativeName[lang].common || undefined
							}
						}
						return info.name.common
					}
					const isNativeNameSpanish = nativeName?.spa
						? nativeName.spa.common
						: confirmLang()
					return (
						<div key={info.cca2}>
							<h1 style={{ textAlign: 'center' }}>{info.name.common}</h1>
							<article className={styles.content}>
								<div key={info.area}>
									<p style={{ fontSize: '20px' }}>
										<strong>Native Name: </strong>
										{isNativeNameSpanish && isNativeNameSpanish}
									</p>
									<p style={{ fontSize: '20px' }}>
										<strong>Population: </strong>
										{info.population}
									</p>
									<p style={{ fontSize: '20px' }}>
										<strong>Region: </strong>
										{info.region}
									</p>
									<p style={{ fontSize: '20px' }}>
										<strong>Sub Region: </strong>
										{info.subregion ? info.subregion : 'No Sub Region'}
									</p>
									<p style={{ fontSize: '20px' }}>
										<strong>Continent: </strong>
										{info.continents}
									</p>
								</div>
								<div>
									<p style={{ fontSize: '20px' }}>
										<strong>Top Level Domain:</strong>{' '}
										{info.tld?.map((lvl, index) => {
											return <span key={index}>{lvl}</span>
										})}
									</p>
									<p style={{ fontSize: '20px' }}>
										<strong>Currencies: </strong>
										{isCurrencyAvailable && isCurrencyAvailable}
									</p>
									<p style={{ fontSize: '20px' }}>
										<strong>Languajes: </strong>
										{languageFound && languageFound}
									</p>
								</div>
							</article>
							<p style={{ fontSize: '20px', textAlign: 'center' }}>
								<strong>Border Countries: </strong>

								{info.borders ? (
									info.borders.map((border, index) => {
										return (
											<span key={index} className={styles.border__card}>
												{border}
											</span>
										)
									})
								) : (
									<span>No Countries Bording</span>
								)}
							</p>
							<div style={{ fontSize: '20px', textAlign: 'center' }}>
								<a href={info.maps.googleMaps} target='_blank' rel='noreferrer'>
									<span>Google Maps ↗</span>
								</a>
							</div>
						</div>
					)
				})}
		</article>
	)
}

interface MapData {
	data: Countries[]
}
