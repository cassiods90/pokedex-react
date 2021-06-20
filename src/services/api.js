import axios from 'axios'

const api = axios.create({
	// baseURL: 'https://pokeapi.co/api/v2',
	//baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=151' //-- First 150 Pokes
	// baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=891'   // -- All 891 Pokes 
	baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=385'
})


async function getPokemons() {
	try {
		const fetchData = await api.get('/pokemon') // coloca /pokemon no fim do base url do axios no arquivo api.
		// console.log(fetchData.data.results)
		return {
			success: true,
			data: fetchData.data,
		}
	} catch (error) {
		return {
			success: false,
			error,
		}
	}
}


async function getPokemonSpecies(pokemon) {
	const api = axios.create({
		baseURL: 'https://pokeapi.co/api/v2/'
	})

	try {
		const responseData = await api.get(`/pokemon-species/${pokemon}`)
		// console.log('responseData', responseData)
		return {
			success: true,
			pokeSpecies: responseData.data,
		}
	} catch (error) {
		return {
			success: false,
			error,
		}
	}
}


export { api, getPokemons, getPokemonSpecies }