
import Card from './Card'

const ListOfCards = ({ filterCharacters, nightMode, stats, setStats, modalStats, setModalStats }) => {

  return (
    <>
      <div className='mt-5 pb-10 mx-auto flex-wrap w-7/12 sm:w-full md:w-full md:px-3 md:grid gap-5 grid-cols-4 md:mx-auto  lg:grid-cols-4 lg:gap-10 lg:w-full xl:mx-autolg:px-5 xl:grid-cols-5  xl:w-8/12'>

        {filterCharacters.map((character) => (
          <Card key={character.id}
            characterName={character.name}
            characterImage={character.image}
            characterSpecies={character.species}
            characterGender={character.gender}
            characterId={character.id}
            characterLocation={character.location.name}
            characterStatus={character.status}
            nightMode={nightMode}
            stats={stats}
            setStats={setStats}
            modalStats={modalStats}
            setModalStats={setModalStats}

          />
        ))}
      </div>
    </>
  )
}

export default ListOfCards