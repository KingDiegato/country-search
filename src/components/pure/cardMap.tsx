import { Countries } from '../types'
import styles from '../styles/styles.module.css'

export const CardMap: React.FC<MapData> = ({ data }): React.ReactElement => {
	return (
		<>
			{data &&
				data.slice(0, 1).map((data) => (
					<li
						style={{ listStyle: 'none', margin: '0' }}
						className={styles.card__mapped}
						key={data.area}
					>
						<div>
							<img
								className={styles.img__map}
								src={data.flags.svg}
								alt={data.flags.alt}
								style={{ aspectRatio: '16/9' }}
								width={720}
							/>
						</div>
						<div style={{ textAlign: 'center' }}>
							<h2>
								Capital:{' '}
								<span style={{ fontWeight: 'normal' }}>{data.capital}</span>
							</h2>
							<h2>
								Area:{' '}
								<span style={{ fontWeight: 'normal' }}>{data.area} m2</span>
							</h2>
						</div>
					</li>
				))}
		</>
	)
}

interface MapData {
	data: Countries[]
}
