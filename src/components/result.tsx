import { DefaultParams, RouteComponentProps } from 'wouter'
import { useFetch } from '../hooks'
import { Countries } from './types'
import styles from './styles/styles.module.css'
import { CardMap } from './pure'
import { ContentMap as TryContentMap } from './pure/_contentMap'

export const Result: React.FC<RouteComponentProps<DefaultParams>> = ({
	params
}) => {
	const { keyword } = params
	const url = `https://restcountries.com/v3.1/name/${keyword}`
	const { data, error, loading }: FetchItems = useFetch({ url: url })

	return (
		<>
			<section className={styles.country__section}>
				<ul className={styles.list}>
					{loading && <p>Loading...</p>}
					{error && (
						<p>
							Oops The country you search cannot be found, please check the name
						</p>
					)}
					<CardMap data={data} />
				</ul>
				<TryContentMap data={data} />
			</section>
		</>
	)
}

interface FetchItems {
	data: Countries[]
	error: boolean
	loading: boolean
}
