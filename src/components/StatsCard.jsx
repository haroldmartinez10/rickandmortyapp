import React from 'react'

const StatsCard = ({ name, image, specie, gender, location, status, nightMode }) => {

  return (
    <>
      {<h1 className={nightMode === true ? 'text-center  font-extrabold text-4xl text-white py-5' : 'text-center  font-extrabold text-4xl text-black py-5'}>Rick and Morty App</h1>}
      <div className="flex justify-center pt-5">

        <div className={nightMode === true ? "rounded-lg shadow-lg  bg-slate-800 max-w-sm mb-5" : 'rounded-lg shadow-lg  bg-white max-w-sm mb-5'}>
          <div>
            <img className="rounded w-full" src={image} alt="card" />
          </div>
          <div className="mt-5 mb-5">
            <h5 className={nightMode === true ? "text-white text-base font-mono mb-2 text-center md:text-base" : "text-black text-base font-mono mb-2 text-center md:text-base"}>Name: {name}</h5>
            <h5 className={nightMode === true ? "text-white text-base font-mono mb-2 text-center md:text-base" : "text-black text-base font-mono mb-2 text-center md:text-base "}>Specie: {specie}</h5>
            <h5 className={nightMode === true ? "text-white text-base font-mono mb-2 text-center md:text-base" : "text-black text-base font-mono mb-2 text-center md:text-base"}>Gender: {gender}</h5>
            <h5 className={nightMode === true ? "text-white text-base font-mono mb-2 text-center md:text-base" : "text-black text-base font-mono mb-2 text-center md:text-base"}>Location: {location}</h5>
            <h5 className={nightMode === true ? "text-white text-base font-mono mb-2 text-center md:text-base" : "text-black text-base font-mono mb-2 text-center md:text-base"}>Status: {status}</h5>
          </div>
        </div>
      </div>


    </>
  )
}

export default StatsCard