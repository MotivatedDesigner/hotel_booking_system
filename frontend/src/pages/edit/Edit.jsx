// styles
import "./new.scss"
// icons
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
// library
import { useNavigate, useParams  } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from "axios"

const Edit = ({ setShowToast, title, schema, data }) => {
  const navigate = useNavigate()
  const { hotelId } = useParams()
  const hotel = data.find(dt => dt._id == hotelId)
  const submitHandler = async values => {
    const hotel ={
      ...values,
      user: "620a21ed929707b15d27eee8"
    }

    await axios
      .patch('http://localhost:9000/api/hotels/'+hotelId, hotel)
      .catch(err => {console.log(err); return})

    setShowToast('Updated')
    navigate('/hotels')
  }

  return (
    <div className="newContainer">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
        </div>
        <div className="right">
          <Formik
            initialValues={{
              name: hotel.name,
              address: hotel.address,
              phone: hotel.phone,
              stars: hotel.stars,
            }}
            validationSchema={schema}
            onSubmit={submitHandler}
          >
            {() => (
              <Form method="post">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <Field id="name" name="name" placeholder="Please Enter UR Name"/>
                  <ErrorMessage name="name" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <Field id="phone" name="phone" placeholder="Please Enter UR Phone"/>
                  <ErrorMessage name="phone" />
                </div>
                <div className="field">
                  <label htmlFor="address">Address</label>
                  <Field id="address" name="address" placeholder="Please Enter UR Address"/>
                  <ErrorMessage name="address" />
                </div>
                <div className="field">
                  <label htmlFor="stars">Stars</label>
                  <Field as="select" id="stars" name="stars">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Field>
                  <ErrorMessage name="phone" />
                </div>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Edit;
