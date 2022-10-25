import React from 'react'

const Card = ({ characterName, characterImage, characterId, characterSpecies, characterGender, characterLocation, characterStatus, nightMode, setModalStats, setStats }) => {

  const handleCardStats = (characterId, characterName, characterImage, characterSpecies, characterGender, characterLocation, characterStatus) => {

    setStats([{
      name: characterName,
      id: characterId,
      img: characterImage,
      species: characterSpecies,
      gender: characterGender,
      location: characterLocation,
      status: characterStatus
    }])


    setModalStats(true)
  }

  return (
    <>
      <div onClick={() => handleCardStats(characterId, characterName, characterImage, characterSpecies, characterGender, characterLocation, characterStatus)} className="flex justify-center mt-5 scale-100 hover:scale-110 ease-in duration-100">
        <div className={nightMode === true ? "rounded-lg shadow-lg  bg-slate-800 max-w-sm" : "rounded-lg shadow-lg  bg-white max-w-sm"}>
          <div>
            <img className="rounded object-cover " src={characterImage} alt="card" />
          </div>
          <div className="p-6">
            <h5 className={nightMode === true ? "text-white text-base font-mono mb-2 text-center lg:text-base xl:text-base" : "text-black xl:text-base text-base font-mono mb-2 text-center lg:text-base"}>{characterName}</h5>

          </div>
        </div>
      </div>
    </>
  )
}

export default Card