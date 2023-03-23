import { Countries } from './types'
import styles from './styles/styles.module.css'
import { FC } from 'react'
import { Link } from 'wouter'

interface Props {
	countries: Countries[]
}

export const CountriesMain: FC<Props> = ({ countries }) => {
	return (
		<ul className={styles.list}>
			{countries.map((countries) => {
				return (
					<li
						className={styles.card}
						key={countries.cca3 + countries.cca2}
						style={{ listStyle: 'none' }}
					>
						<div>
							<img
								className={styles.image}
								src={countries.flags.png || countries.flags.svg}
								alt={countries.flags.alt}
							/>
						</div>
						<div className={styles.card__content}>
							<Link to={`/search/${countries.name.common}`}>
								<h2 style={{ cursor: 'pointer' }} className={styles.title}>
									{countries.name.common}
								</h2>
							</Link>
							<span style={{ color: '#ffffff88' }}>
								<small>{countries.name.official}</small>
							</span>
							<p>
								<strong>Population: </strong>
								{countries.population}
							</p>
							<p>
								<strong>Region: </strong>
								{countries.region}
							</p>
							<p>
								<strong>Capital: </strong>
								{countries.capital}
							</p>
						</div>
					</li>
				)
			})}
		</ul>
	)
}
