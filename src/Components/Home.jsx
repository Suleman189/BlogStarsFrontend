import { NavLink } from 'react-router-dom';
import StarCard from './StarCard';

function Home(props) {
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
        {Array.from({ length: 10 }, (s, i) => {
          return <StarCard key={i + 1} />;
        })}
      </div>
    </div>
  );
}

export default Home;
