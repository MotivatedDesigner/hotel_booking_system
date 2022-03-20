import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { hotelColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to={'/hotels/view/'+params.row.id} className="link">
              <div className="viewButton">View</div>
            </Link>
            <Link to={'/hotels/edit/'+params.row.id} className="link">
              <div className="editButton">Edit</div>
            </Link>
            <Link to={'/hotels/'+params.row.id} className="link">
              <div className="deleteButton">Delete</div>
            </Link>
          </div>
        );
      },
    },
  ];
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
  );
};

export default Datatable;
