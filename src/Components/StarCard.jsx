import '../Components/StarCard.css';
import viteLogo from '/vite.svg';
function StarCard({star}) {
  let {name, celebrityName, about} = star;
  let imageUrl =
    'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x1600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg';

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={viteLogo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{celebrityName}</h5>
          <p className="card-text">
            {about}
          </p>
          <a href="#" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default StarCard;
