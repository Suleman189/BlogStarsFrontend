import { NavLink } from 'react-router-dom';
import StarCard from './StarCard';
import { useEffect, useState } from 'react';
import httpService from '../Services/HttpService';
import { toast } from 'react-toastify';

function Home(props) {
  const [stars, setStars] = useState([])

  useEffect(()=> {
    const setData = async () => {
      try {
        let response = await httpService.get('/api/star')
        // debugger

        if (response.status === 200) {

          let {stars} = response.data
          console.log(stars)
          setStars(stars)
        }
      } catch (error) {
        toast('Errorr')
      }
    }

    setData()

  }, [])

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col">
          <NavLink to='/Stars/new' className="btn btn-primary" style={{ float: 'right' }}>
            Add Star
          </NavLink>
        </div>
      </div>
      <div className="row g-4">
        {
          stars.map((star, index) => <StarCard key={index} star={star} /> )
        }
      </div>
    </div>
  );
}

export default Home;
