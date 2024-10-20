import React from 'react'

const App = () => {
  let marks = 80
  return (
    <>
    <h1 className = "font-bold text-xxl text-red-600">My total marks were {marks}</h1>
    <button onclick className = "bg-slate-500 px-5 py-2 rounded-md text-white">Update</button>
    </>
  )
}

export default App
