import { useEffect, useState, Suspense } from 'react'
import Gallary from './Component/Gallary';
import SearchBar from './Component/SearchBar';
import { createResource as fetchData } from './helper'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for music')
  let [data, setData] = useState(null)


  
  useEffect( () => {
    if (search){
      setData(fetchData(search))
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  const renderGallery = () => {
    if(data){
       return(
        <Suspense fallback={<h1>Loading...</h1>}>
            <Gallary data={data}/>
        </Suspense>
       )
    }
  }
  return (
    <div>
      <SearchBar handleSearch = {handleSearch}/>
      {message}
      {renderGallery()}
      
    </div>
  );
}

export default App;
