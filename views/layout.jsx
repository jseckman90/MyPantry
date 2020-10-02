const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"></link>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <div className="container">
              <div className="row">
                <div className="col new-btn">
                <a href={"/items/new"} className="btn btn-primary btn-nav">New Item</a>
                </div>
                <div className="col-6">
                  <a href={'/items'}><img src="/images/mypantrylogo.png" id="logo" className="img-fluid"/></a>
                </div>
                <div className="col new-btn">
                <a href={"/auth/logout"} className="btn btn-primary btn-nav">Log Out</a>
                </div>
              </div>
            </div>

            {/* <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Produce</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Dairy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Canned Goods</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Frozen Foods</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Meat and Fish</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Spices</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Condiments / Sauces / Oils</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Breads / Pastas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Snacks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Beverages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cereals</a>
              </li>
            </ul> */}

          </header>

          <main>{this.props.children}</main>
          <footer>
            <h1></h1>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;