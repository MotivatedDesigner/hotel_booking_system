import * as Yup from 'yup'

export const hotelInputs = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Name and surname",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
]

export const newHotelSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(24, 'Too Long!')
    .required('Required'),
  address: Yup.string()
  .max(100, 'Too Long!')
  .required('Required'),
  phone: Yup.string()
    .min(8, 'Too Short!')
    .max(24, 'Too Long!')
    .required('Required'),
  stars: Yup.string()
  .required('Required'),
})
