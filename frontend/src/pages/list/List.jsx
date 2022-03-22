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

const List = ({toastify, ctx}) => {
  if(toastify.showToast) {
    toast.success(`Hotel ${toastify.showToast} successfully`,{toastId: "success1"})
    toastify.setShowToast(false)
  }
  
  useEffect(() => {
    (async () => {
      const res = await axios
        .get('http://localhost:9000/api/hotels')
        .catch(err => {  console.log(err); return })

      ctx.setData( res.data.map(row => ({...row, id: row._id})) )
    })()
  }, [])

  const deleteHandler = async hotelId => {
    MySwal.fire({
      title: 'Do you Really wanna Delete this Hotel ?',
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Delete`,
    }).then(async (result) => {
      if (result.isDenied) 
      {
        MySwal.fire('Removed!', '', 'success')
        await axios
          .delete(`http://localhost:9000/api/hotels/${hotelId}`)
          .catch(err => {  console.log(err); return })

        ctx.setData( ctx.data.filter(row => row._id != hotelId) )
      }
    })
  }

  return (
    <div className="list">
      <Datatable data={ctx.data} deleteHandler={deleteHandler}/>
      <ToastContainer />
    </div>
  )
}

export default List