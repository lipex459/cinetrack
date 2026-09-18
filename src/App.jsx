import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Details from './pages/Details/Details'
import MyList from './pages/MyList/MyList'

function App() {
  const [watchlist, setWatchlist] = useState([])

  function addToList(item) {
    setWatchlist((currentList) => {
      const alreadyExists = currentList.some(
        (savedItem) => savedItem.id === item.id && savedItem.media_type === item.media_type,
      )

      if (alreadyExists) {
        return currentList
      }

      return [...currentList, item]
    })
  }

  function removeFromList(id, type) {
    setWatchlist((currentList) =>
      currentList.filter(
        (item) => !(item.id === id && item.media_type === type),
      ),
    )
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="buscar" element={<Search />} />
        <Route
          path="movie/:id"
          element={<Details addToList={addToList} watchlist={watchlist} />}
        />
        <Route
          path="tv/:id"
          element={<Details addToList={addToList} watchlist={watchlist} />}
        />
        <Route
          path="minha-lista"
          element={
            <MyList
              watchlist={watchlist}
              removeFromList={removeFromList}
            />
          }
        />
      </Route>
    </Routes>
  )
}

export default App
