import React from 'react'

const NextPrev = ({ page, setPage }) => {

  const prevPage = (e) => {
    e.preventDefault()
    if (page <= 1) {
      setPage(1)
      return
    }
    setPage(page - 1)
  }

  const nextPage = (e) => {
    e.preventDefault()
    if (page >= 42) {
      return;
    }
    setPage(page + 1)
  }

  const handlePageIni = () => {
    setPage(1)
  }

  return (
    <>
      <div className="flex flex-row mx-auto justify-center w-5/12 py-5 pb-5 ">
        <button onClick={prevPage} type="button" className="bg-gray-800 text-white rounded-l-md  border-gray-100 py-2  hover:text-white px-3">
          <div className="flex flex-row align-middle">

            <p className="ml-2 font-bold">Prev</p>
          </div>
        </button>

        <button type="button" className="bg-gray-800 text-white  py-2 border-l border-gray-200  hover:text-white px-3">
          <div className="flex flex-row align-middle">
            <span className=" font-bold">{page}</span>

          </div>
        </button>

        <button onClick={nextPage} type="button" className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200  hover:text-white px-3">
          <div className="flex flex-row align-middle">
            <span className="mr-2 font-bold">Next</span>
          </div>
        </button>

      </div>

      {page === 42 ? <div className="flex flex-row mx-auto justify-center w-5/12 mb-5">
        <button onClick={handlePageIni} type="button" className="bg-gray-800 text-white  py-2 border-l border-gray-200  hover:text-white px-3">
          <div className="flex flex-row align-middle">
            <span className=" font-bold">Go Page 1</span>
          </div>
        </button>
      </div> : null}
    </>


  )
}

export default NextPrev