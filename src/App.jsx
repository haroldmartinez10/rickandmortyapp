import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import SearchBar from './components/SearchBar'
import ListOfCards from './components/ListOfCards'
import NextPrev from './components/NextPrev'
import NightButton from './components/NightButton'
import img from './img/rickandmorty.png'
import StatsCard from './components/StatsCard'

const App = () => {

  const [nightMode, setNightMode] = useState(false)
  const [characters, setCharacters] = useState([])
  const [filterCharacters, setFilterCharacters] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [modalStats, setModalStats] = useState(false)
  const [stats, setStats] = useState([])


  useEffect(() => {

    const getRickAndMorty = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      const response = await data.json()
      setFilterCharacters(response.results)
      setCharacters(response.results)
    }
    getRickAndMorty()
  }, [page])


  useEffect(() => {
    setError(false)
  }, [page])


  const handleSubmit = (e) => {
    e.preventDefault()
    const filterCharacter = characters.filter((character) => (
      character.name.toLowerCase().includes(inputValue) || character.name.includes(inputValue) ||
      character.name.toUpperCase().includes(inputValue)
    ))

    setFilterCharacters(filterCharacter)
    if (filterCharacter.length <= 0) {
      setError(true)
    } else {
      setError(false)
    }
    setInputValue('')
  }

  return (
    <>
      <div className={nightMode === true ? 'bg-slate-800' : 'bg-white-800 h-full'}>
        {modalStats === false ? <img className='w-6/12 mx-auto object-fit sm:w-3/12 sm:mx-auto xl:w-1/12' src={img}></img> : null}
        <div className='sm:mx-auto sm:w-12/12'>
          {modalStats === false ? <h1 className={nightMode === true ? 'text-2xl text-center font-extrabold sm:text-2xl text-white' : 'text-2xl text-center font-extrabold sm:text-2xl text-white text-black'}>Rick and Morty App</h1> : null}
        </div>

        {modalStats === false ? <NightButton nightMode={nightMode} setNightMode={setNightMode} /> : null}
        {modalStats === false ? <SearchBar error={error} nightMode={nightMode} inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} /> :
          stats.map((item) => (
            <StatsCard key={item.id}
              nightMode={nightMode}
              name={item.name}
              image={item.img}
              specie={item.species}
              gender={item.gender}
              location={item.location}
              status={item.status}
              setModalStats={setModalStats} />
          ))}

        {modalStats === false ?
          <ListOfCards
            modalStats={modalStats}
            setModalStats={setModalStats}
            stats={stats} setStats={setStats}
            nightMode={nightMode}
            characters={characters}
            inputValue={inputValue}
            setCharacters={setCharacters}
            filterCharacters={filterCharacters} />
          : null}
      </div>

      {modalStats === false ? <NextPrev setPage={setPage} page={page} />
        : null}

      {modalStats === true ? <div className='flex justify-center mt-5 mb-5'>
        <button onClick={() => setModalStats(false)} type="button" className="bg-gray-800 text-white  py-2 border-l border-gray-200  hover:text-white px-3">
          <span className=" font-bold">Go Back</span>
        </button>
      </div>
        : null}
    </>
  )
}

export default App