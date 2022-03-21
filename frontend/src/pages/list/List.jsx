import "./list.scss"
// Table
import Datatable from '../../components/datatable/Datatable'
// toast
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import { useLocation } from "react-router-dom"
const List = () => {
  const location = useLocation()
  if(location.state === 'success') 
  {
    toast.success('Hotel added successfully')
    location.state = null
  }
  return (
    <div className="list">
      <Datatable />
      <ToastContainer />
    </div>
  )
}

export default List