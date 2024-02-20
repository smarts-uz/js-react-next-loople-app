import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.js'

import PageNotFound from './pages/pagenotfound.js' 

const Root = () => (
	<ChakraProvider>
	<BrowserRouter>
		<Routes>
			<Route path="/">
				<Route index element={<App />} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>
	</ChakraProvider>
)

export default Root