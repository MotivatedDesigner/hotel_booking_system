// styles
import "./new.scss"
// icons
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
// library
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from "axios"

const New = ({ inputs, title, schema }) => {
  // const [file, setFile] = useState("")
  const navigate = useNavigate()
  const submitHandler = async values => {
    const res = await axios
      .post('http://localhost:9000/api/hotels',{
        ...values,
        user: "620a21ed929707b15d27eee8"
      })
      .catch(err => {console.log(err); return})

      navigate('/hotels',{state: 'success'})
  }
  return (
    <div className="newContainer">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          {/* <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          /> */}
        </div>
        <div className="right">
          <Formik
            initialValues={{
              name: '',
              address: '',
              phone: '',
              stars: 5,
            }}
            validationSchema={schema}
            onSubmit={submitHandler}
          >
            {({ errors, touched }) => (
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

export default New;
