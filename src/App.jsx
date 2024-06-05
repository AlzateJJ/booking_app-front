import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelsIdPage from './pages/HotelsIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { getHotelsThunk } from './store/slices/hotels.slice'
import MainHeader from './components/shared/MainHeader'
import ReservationsPage from './pages/ReservationsPage'
import ProtectedRoutes from './pages/ProtectedRoutes'


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    const url = 'https://booking-app-back-qqhn.onrender.com/hotels'
    dispatch(getHotelsThunk(url))
  }, [])

  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path = '/' element = {<HomePage />}/>
        <Route path = '/hotels/:id' element = {<HotelsIdPage />}/>
        <Route path = '/register' element = {<RegisterPage />}/>
        <Route path = '/login' element = {<LoginPage />}/>
        <Route element = {<ProtectedRoutes />} >
          <Route path = '/reservations' element = {<ReservationsPage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
