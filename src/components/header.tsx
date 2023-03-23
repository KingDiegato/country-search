import React, { useState } from 'react'

// Styles
import styles from './styles/styles.module.css'

interface Props {
	setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const Header: React.FC<Props> = ({ setTheme }): React.ReactElement => {
	const [action, setAction] = useState(false)
	const handleDarkTheme = () => {
		setTheme('dark-mode')
		setAction(false)
	}
	const handleLightTheme = () => {
		setTheme('light-theme')
		setAction(true)
	}
	return (
		<header className={styles.header}>
			<h1>Where in the World?</h1>
			{action ? (
				<span className={styles.interaction} onClick={handleDarkTheme}>
					🌙 Dark Mode
				</span>
			) : (
				<span className={styles.interaction} onClick={handleLightTheme}>
					🌞 Light theme
				</span>
			)}
		</header>
	)
}
