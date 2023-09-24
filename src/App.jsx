import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './pages/Home'
import Details from './pages/Details'
import Albums from './pages/Albums'
import Music from './pages/Music'
import Lyrics from './pages/Lyrics'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/details',
    element: <Details />
  },
  {
    path: 'albums',
    element: <Albums />
  },
  {
    path: '/music',
    element: <Music />
  },
  {
    path: 'lyrics',
    element: <Lyrics />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
