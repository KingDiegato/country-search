import { useEffect, useState } from 'react'

export const useFetch = ({ url }: { url: string }): any => {
	const [data, setData] = useState(undefined)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const promise = fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 404) {
					throw new Error(data.message)
				}
				setData(data)
				console.log(data)
			})
			.catch((error) => {
				setError(true)
				console.log(error.message)
			})
			.finally(() => setLoading(false))
	}, [url])
	return { data, error, loading }
}
