import { DefaultParams, RouteComponentProps } from 'wouter'
import { useFetch } from '../hooks'
import { Countries } from './types'
import styles from './styles/styles.module.css'
import { CardMap, ContentMap } from './pure'

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
					{error && <p>An error has occur</p>}
					<CardMap data={data} />
				</ul>
				<ContentMap data={data} />
			</section>
		</>
	)
}

interface FetchItems {
	data: Countries[]
	error: boolean
	loading: boolean
}
