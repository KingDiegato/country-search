import { FormEvent, useRef } from 'react'
import { useLocation, Link } from 'wouter'
import { countriesPlaceHolder, getRandomString } from './content'
import styles from './styles/styles.module.css'

const randomPlaceholder: string = getRandomString(countriesPlaceHolder)

export function Form() {
	const formRef = useRef<HTMLInputElement>(null)

	const [search, getCountries] = useLocation()

	const handleSubmit = (evt: FormEvent) => {
		evt.preventDefault()
		if (formRef.current === null) return
		const keyword = formRef.current.value
		getCountries(`/search/${keyword}`)

		formRef.current.value = ''
	}

	return (
		<form onSubmit={(evt) => handleSubmit(evt)}>
			<input
				ref={formRef}
				className={styles.input}
				type='text'
				placeholder={randomPlaceholder}
			/>
			<p className={styles.path}>
				<strong>You are on: </strong>{' '}
				<i>
					<Link href='/'>Home</Link>
					{search}
				</i>
			</p>
		</form>
	)
}
