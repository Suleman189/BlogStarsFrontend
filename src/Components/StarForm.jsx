import { useState } from "react";
import * as Yup from 'yup'

function StarForm() {
  const [formData, setFormData] = useState({
    data: {
      name: '',
      celebrityName: '',
      about: ''
    },
    errors: {
      name: '',
      celebrityName: '',
      about: ''
    }
  })

  const validationSchema = Yup.object({
    name: Yup.string().min(5).max(80).required(),
    celebrityName: Yup.string().min(5).max(50).required(),
    about: Yup.string().min(10).max(1000).required(),
  })

  const handleInput = async (e) => {
    let name = e.target.name
    let value = e.target.value
    debugger
    let data = {...formData.data, [name]: value}
    let errors = {}
    // data[name] = value

    try {
      await validationSchema.validateAt(name, data)
    } catch (validationError) {
      errors[name] = validationError.message
    }

    // setFormData({data, errors})
  }

  const validateForm = async () => {
    let data = formData.data
    let errors = {}

    try {
      await validationSchema.validate(data)
      return true
    } catch (validationErrors) {
      validationErrors.inner.forEach(error => {
        errors[error.path] = error.message
      })

      setFormData({data, errors})

      return false
    }
  }
  const handleSubmission = async (e) => {
    e.preventDefault()

    let data = formData.data
    let errors = formData.errors


    let isValid = await validateForm()

    if(isValid){

    }
    else  {
      console.log("####### FORM NOT SUBMITTED")
    }

  }

  return (
    <div className="container">
      <div className="row">
        <form action="">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <div className="row form-group">
                <div className="row mb-3 form-group" style={{paddingRight: '0px'}}>
                  <div className="col-3">
                    <label>Name</label>
                  </div>
                  <div className="col-9" style={{padding: '0px'}}>
                    <input
                      type="text"
                      className="form-control"
                      autoFocus={true}
                      name="name"
                      onChange={handleInput}
                      value={formData.data.name}
                    />
                  </div>
                  {formData.errors.name && (
                    <div className="alert alert-danger">
                      {formData.errors.name}
                    </div>
                  )}
                </div>
                <div className="row  mb-3 form-group" style={{paddingRight: '0px'}}>
                  <div className="col-3">
                    <label>Celebrrity Name</label>
                  </div>
                  <div className="col-9" style={{padding: '0px'}}>
                    <input
                      type="text"
                      className="form-control"
                      name="celebrityName"
                      value={formData.data.celebrityName}
                      onChange={handleInput}
                    />
                  </div>
                  {formData.errors.celebrityName && (
                    <div className="alert alert-danger">
                      {formData.errors.celebrityName}
                    </div>
                  )}
                </div>
                <div className="col-12">
                  <label>About</label>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="about"
                    value={formData.data.about}
                    onChange={handleInput}
                  ></textarea>
                </div>
                {formData.errors.about && (
                    <div className="alert alert-danger">
                      {formData.errors.about}
                    </div>
                )}
              </div>
              <div className="row form-group">
                <div className="col-6"></div>
                <div className="col-6"></div>
              </div>
              <button
                style={{ float: 'right' }}
                className="my-4 btn btn-danger submit"
              >
                Create
              </button>
            </div>
            <div className="col-3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StarForm;
