import './App.css'
import { SelectFruits } from './components/features/fruit-list/SelectFruits'

function App() {

  return (
    <div className='h-screen w-screen'>
      <h1>Finofo Demo</h1>
      <div className='w-full flex justify-between'>
        <div className='w-full text-center'>
            <SelectFruits />
        </div>
        <div className='w-full text-center'>Jar</div>
      </div>
    </div>
  )
}

export default App
