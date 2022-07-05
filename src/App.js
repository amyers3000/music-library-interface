import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallary from './Component/Gallary';
import SearchBar from './Component/SearchBar';
import AlbumView from './Component/AlbumView';
import ArtistView from './Component/ArtistView';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for music')
  let [data, setData] = useState([])


  const API_URL = 'https://itunes.apple.com/search?term='
  
  useEffect( () => {
    if (search){
      const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
      console.log(resData)
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }
  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route path='/' element= {
            <Fragment>
              <SearchBar handleSearch = {handleSearch}/>
              <Gallary data={data}/>
            </Fragment>
          }/>
          <Route path='/album/:id' element={<AlbumView />}/>
          <Route path='/artist/:id' element={<ArtistView />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
