import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import httpService from '../Services/HttpService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5).max(80).required(),
  celebrityName: Yup.string().min(5).max(50).required(),
  about: Yup.string().min(10).max(1000).required(),
});

function StarForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const afterSubmission = async (data) => {
    console.log(data);
    const payload = {
      name: data.name,
      celebrityName: data.celebrityName,
      about: data.about,
    };

    let response = await httpService.post('/api/star', payload);
    console.log('STAR Submitted');
    if (response.status == 201) {
      toast.success(`${response.data.message}`);
      navigate('/home');
    } else {
      toast.error(`${toast.data.error}`);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit(afterSubmission)}>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <div className="row form-group">
                <div
                  className="row mb-3 form-group"
                  style={{ paddingRight: '0px' }}
                >
                  <div className="col-3">
                    <label>Name</label>
                  </div>
                  <div className="col-9" style={{ padding: '0px' }}>
                    <input
                      type="text"
                      className="form-control"
                      autoFocus={true}
                      {...register('name', {
                        required: 'Name is required',
                      })}
                    />
                  </div>
                  {errors.name && (
                    <div className="alert alert-danger">
                      {errors.name?.message}
                    </div>
                  )}
                </div>
                <div
                  className="row  mb-3 form-group"
                  style={{ paddingRight: '0px' }}
                >
                  <div className="col-3">
                    <label>Celebrrity Name</label>
                  </div>
                  <div className="col-9" style={{ padding: '0px' }}>
                    <input
                      type="text"
                      className="form-control"
                      {...register('celebrityName')}
                    />
                  </div>
                  {errors.celebrityName && (
                    <div className="alert alert-danger">
                      {errors.celebrityName?.message}
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
                    {...register('about')}
                  ></textarea>
                </div>
                {errors.about && (
                  <div className="alert alert-danger">
                    {errors.about?.message}
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default StarForm;
