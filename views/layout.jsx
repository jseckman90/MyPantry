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
                
                </div>
                <div className="col-6">
                  <a href={'/items'}><img src="LogoMakr_22Zc7g.png" id="logo" className="img-fluid"/></a>
                </div>
                <div className="col new-btn">
                <a href={"/auth/signup"} className="btn btn-primary btn-nav">Sign Up</a>
                <a href={"/auth/login"} className="btn btn-primary btn-nav">Log In</a>
                <a href={"/auth/logout"} className="btn btn-primary btn-nav">Log Out</a>
                </div>
              </div>
            </div>
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