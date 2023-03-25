import { Countries } from './types'
import styles from './styles/styles.module.css'
import { CSSProperties, FC } from 'react'
import { Link } from 'wouter'

import { useImageOnLoad } from '../hooks/useImageOnLoad'

interface Props {
	countries: Countries[] | any
}

export const CountriesMain: FC<Props> = ({ countries }) => {
	const { handleImageOnLoad, css } = useImageOnLoad()

	const style: { [key: string]: CSSProperties } = {
		wrap: {
			position: 'relative',
			width: 400,
			aspectRatio: '16/9',
			margin: 'auto'
		},
		image: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: `100%`,
			height: `100%`
		}
	}

	return (
		<ul className={styles.list}>
			{countries.map((countries: any) => {
				return (
					<li
						className={styles.card}
						key={countries.cca3 + countries.cca2}
						style={{ listStyle: 'none' }}
					>
						<div style={style.wrap}>
							<img
								onLoad={handleImageOnLoad}
								loading='lazy'
								className={styles.image}
								style={{ ...style.image, ...(css.thumbnail as CSSProperties) }}
								src={countries.flags.png || countries.flags.svg}
								alt={countries.flags.alt}
							/>
							<img
								onLoad={handleImageOnLoad}
								loading='lazy'
								className={styles.image}
								style={{ ...style.image, ...(css.fullSize as CSSProperties) }}
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
