import "./datatable.scss"

import { DataGrid } from "@mui/x-data-grid"
import { hotelColumns } from "../../utils/datatablesource"

import { Link } from "react-router-dom"


const Datatable = ({data, deleteHandler}) => {
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to={'/hotels/edit/'+params.row.id} className="link">
              <div className="editButton">Edit</div>
            </Link>
            <a onClick={() => deleteHandler(params.row.id)} className="link">
              <div className="deleteButton">Delete</div>
            </a>
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
