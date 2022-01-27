import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getCatsFetch } from './Redux/catState'

function App() {

  const cats = useSelector(state => state.cats.cats)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of differents species of cats. Lets of cats for your viewing pleasure</p>
      <div className='Gallery'>
        {cats.map(cat =>
          <div key={cat.id} className='row'>
            <div className='column column-left'>
              <img
                src={cat.image.url}
                alt={cat.name}
                width={200}
                height={200} />
            </div>
            <div className='column column-right'>
              <h2>{cat.name}</h2>
              <h3>Tamperament: {cat.temperament}</h3>
              <p>{cat.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
