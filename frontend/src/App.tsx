import Bouton from "./Bouton";


function App() {

  return (
    <div className='flex bg-red-400 w-screen h-screen'>

      <div className="h-50 w-full bg-blue-300">
        <Bouton name={"Timoté"} />
      </div>

      <div className="h-50 w-full bg-blue-300">
        <Bouton name={"Mohamed"}/>
      </div>

    </div>
  )
}

export default App
