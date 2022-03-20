import "./datatable.scss"

import { DataGrid } from "@mui/x-data-grid"
import { hotelColumns } from "../../utils/datatablesource"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'

const Datatable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const res = await axios
        .get('http://localhost:9000/api/hotels')
        .catch(err => {  console.log(err); return })

      setData( res.data.map(row => ({...row, id: row._id})) )
    })()
  }, [])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to={'/hotels/'+params.row.id} className="link">
              <div className="viewButton">View</div>
            </Link>
            <Link to={'/hotels/'+params.row.id+'/edit'} className="link">
              <div className="editButton">Edit</div>
            </Link>
            <Link to={'/hotels/'+params.row.id} className="link">
              <div className="deleteButton">Delete</div>
            </Link>
          </div>
        )
      },
    },
  ]
  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Hotels
        <Link to="/hotels/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={hotelColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}

export default Datatable
