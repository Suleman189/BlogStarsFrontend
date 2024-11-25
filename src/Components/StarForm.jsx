function StarForm() {
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
                    />
                  </div>
                </div>
                <div className="row  mb-3 form-group" style={{paddingRight: '0px'}}>
                  <div className="col-3">
                    <label>Celebrrity Name</label>
                  </div>
                  <div className="col-9" style={{padding: '0px'}}>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label>About</label>
                </div>
                <div className="col-12">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
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
