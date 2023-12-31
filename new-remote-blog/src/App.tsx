import { Fragment } from 'react'
import Blog from './pages/blog'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Fragment>
      <Blog />
      <ToastContainer />
    </Fragment>
  )
}

export default App
