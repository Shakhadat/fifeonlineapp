import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                  <a className="nav-link" href="#">About</a>
                  <a className="nav-link" href="#">Contact</a>
                  <a className="nav-link" href="#">Contact</a>
                  <a className="nav-link active" href="#">Blog</a>
                
                </div>
                </div>
            </div>
        </nav>

        <div className="header text-center p-5 bg-light  border border-bottom">
          <h1 className="pt-5">Welcome to Blog Home!</h1>
          <p className="pb-5 fw-200">A Bootstrap 5 starter layout for your next blog homepage</p>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-md-8 pb-3 mb-4 border-bottom">
              <div className="row">
                <div className="col-md-12">
                <div className="card w-100 mt-5">
                      <div className="card-top bg-secondary">850x350</div>
                      <div className="card-body">
                        <p className="text-secondary">January 1, 2021</p>
                        <h5 className="card-title">Featured Post Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                        <a href="#" className="btn btn-primary">Read more-^</a>
                      </div>
                    </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                <div className="card w-100 mt-5">
                      <div className="card-top bg-secondary">850x350</div>
                      <div className="card-body">
                        <p className="text-secondary">January 1, 2021</p>
                        <h5 className="card-title">Featured Post Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                        <a href="#" className="btn btn-primary">Read more-^</a>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="card w-100 mt-5">
                      <div className="card-top bg-secondary">850x350</div>
                      <div className="card-body">
                        <p className="text-secondary">January 1, 2021</p>
                        <h5 className="card-title">Featured Post Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                        <a href="#" className="btn btn-primary">Read more-^</a>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                <div className="card w-100 mt-5">
                      <div className="card-top bg-secondary">850x350</div>
                      <div className="card-body">
                        <p className="text-secondary">January 1, 2021</p>
                        <h5 className="card-title">Featured Post Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                        <a href="#" className="btn btn-primary">Read more-^</a>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="card w-100 mt-5">
                      <div className="card-top bg-secondary">850x350</div>
                      <div className="card-body">
                        <p className="text-secondary">January 1, 2021</p>
                        <h5 className="card-title">Featured Post Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                        <a href="#" className="btn btn-primary">Read more-^</a>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                  <nav aria-label="..." className="pag my-5">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link">Newer</a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item"><a class="page-link" href="#">4</a></li>
                        <li className="page-item"><a class="page-link" href="#">5</a></li>
                        <li className="page-item"><a class="page-link" href="#">...</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">Older</a>
                        </li>
                      </ul>
                    </nav>
                                      </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  
                <div className="card mt-5">
                    <div className="card-header">
                      Featured
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        
                      <div class="input-group my-2">
                      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-primary" type="button" id="button-addon2">Go!</button>
                      </div>
                      </li>
                      
                    </ul>
</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  
                <div className="card mt-5">
                    <div className="card-header">
                      Featured
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="list">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">Freebies</a></li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="list">
                            <li><a href="#">Web JavaScript</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">Tutorial</a></li>
                          </ul>
                        </div>
                        </div>  
                      
                      </li>
                      
                    </ul>
</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  
                <div className="card mt-5">
                    <div className="card-header">
                    Side Widget
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                      You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
                      
                      </li>
                      
                    </ul>
</div>
                </div>
              </div>
          </div>
        </div>
        </div>
        <div className="footer bg-dark text-center text-white py-5">
          <p>Copyright © Your Website 2021</p>
        </div>
       
    </div>
  );
}

export default App;
