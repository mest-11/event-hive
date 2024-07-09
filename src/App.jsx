import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import CollegePage from './pages/CollegePage'
import CreateEvent from './pages/CreateEvent'
import EventPage from './pages/EventPage'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Landing/>
    },
    {
      path:'/college/page',
      element: <CollegePage/>
    },
    {
      path:'/create/event',
      element: <CreateEvent/>
    },
    {
      path:'/event/page',
      element: <EventPage/>
    },
    {
      path:'/notfound',
      element: <NotFound/>
    },
    {
      path:'/signin',
      element: <SignIn/>
    },
    {
      path:'/signup',
      element: <SignUp/>
    }

  ])
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
