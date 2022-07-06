import { Fragment, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallary from './Component/Gallary';
import SearchBar from './Component/SearchBar';
import AlbumView from './Component/AlbumView';
import ArtistView from './Component/ArtistView';
import { DataContext } from './Context/DataContext'
import { SearchContext } from './Context/SearchContext'

function App() {
  
  let [message, setMessage] = useState('Search for music')
  let [data, setData] = useState([])
  let searchInput = useRef('')


  const API_URL = 'https://itunes.apple.com/search?term='
  
  

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
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
  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route path='/' element= {
            <Fragment>
              <SearchContext.Provider value={ {
                term: searchInput,
                handleSearch: handleSearch
              }}>
                  <SearchBar />
              </SearchContext.Provider>
              <DataContext.Provider value={data}>
                  <Gallary />
              </DataContext.Provider>
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
