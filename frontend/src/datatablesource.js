import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

export const hotelColumns = [
  // { field: "id", headerName: "ID", width: 240 },
  {
    field: "name",
    headerName: "Name",
    width: 180
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
    renderCell: (params) =>  <Link to={'/users/'+params.row.user?._id} >{params.row.user?.email}</Link>
  },
  {
    field: "address",
    headerName: "Address",
    width: 380
  },

  {
    field: "phone",
    headerName: "phone",
    width: 120
  },
  {
    field: "stars",
    headerName: "stars",
    width: 140,
    renderCell: (params) => <div className='cell-with-stars'> { 
      Array
      .from({length :params.row.stars})
      .map( (_, i) => <StarIcon key={i} /> )
    } </div>
  },
]

//temporary data
export const userRows = [
  {
    id: 1,
    name: "Snow",
    stars: 1,
    email: "1snow@gmail.com",
    address: "1snow@gmail.com",
    phone: '090012321',
  },
  {
    id: 2,
    name: "Lannister",
    email: "2snow@gmail.com",
    address: "2snow@gmail.com",
    stars: 3,
    phone: '090012321',
  },
  {
    id: 3,
    name: "Lannister",
    email: "3snow@gmail.com",
    address: "3snow@gmail.com",
    stars: 3,
    phone: '090012321',
  },
  {
    id: 4,
    name: "Stark",
    email: "4snow@gmail.com",
    address: "4snow@gmail.com",
    stars: 5,
    phone: '090012321',
  },
];
