export const countriesPlaceHolder: string[] = [
	'Uruguay..., Germany..., Vietnam...',
	'Venezuela..., Korea..., Kazajistan...',
	'Guinea..., Angola..., Suriname...',
	'Peru..., Austria..., Russia...',
	'Libano..., Turkey..., Tunisia...',
	'Japan..., Ghana..., Poland...',
	'Azerbajan..., United State..., Argentina...'
]

export function getRandomString(arr: string[]): string {
	const randomKey = Math.random() * arr.length
	const randomKeyInt = Math.floor(randomKey)
	const getRandomValue = arr[randomKeyInt]
	return getRandomValue
}
