import countries from './mocks/data.json'
import './App.css'
import { Header, CountriesMain, Result, Form } from './components'
import { Route } from 'wouter'
import { ThemeContext } from './context/themeContext'
import { useState } from 'react'

function App(): React.ReactElement {
	const [theme, setTheme] = useState('')
	return (
		<ThemeContext.Provider value={theme}>
			<div className={`App ${theme}`}>
				<Header setTheme={setTheme} />
				<Form />
				<Route path='/search/:keyword' component={Result} />
				<Route path='/'>{() => <CountriesMain countries={countries} />}</Route>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
