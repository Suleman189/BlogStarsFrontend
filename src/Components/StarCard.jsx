import '../Components/StarCard.css';
function StarCard(props) {
  let imageUrl =
    'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x1600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg';

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
