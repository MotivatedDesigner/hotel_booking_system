import "./list.scss"
import { useState, useEffect } from "react"
import axios from 'axios'
// Table
import Datatable from '../../components/datatable/Datatable'
// toast
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
// sweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const List = ({showToast}) => {
  const [data, setData] = useState([])

  if(showToast)
    toast.success('Hotel added successfully',{toastId: "success1"})
  
  useEffect(() => {
    (async () => {
      const res = await axios
        .get('http://localhost:9000/api/hotels')
        .catch(err => {  console.log(err); return })

      setData( res.data.map(row => ({...row, id: row._id})) )
    })()
  }, [])

  const deleteHandler = async hotelId => {
    MySwal.fire({
      title: <p>Hello World</p>,
      footer: 'Copyright 2018',
      didOpen: () => {
        MySwal.clickConfirm()
        MySwal.clickCancel()
      }
    }).then(() => {
      return MySwal.fire(<p>Shorthand works too</p>)
    })
    await axios
      .delete(`http://localhost:9000/api/hotels/${hotelId}`)
      .catch(err => {  console.log(err); return })

    setData( data.filter(row => row._id != hotelId) )
  }

  return (
    <div className="list">
      <Datatable data={data} deleteHandler={deleteHandler}/>
      <ToastContainer />
    </div>
  )
}

export default List