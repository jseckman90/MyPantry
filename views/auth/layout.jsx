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
                 <img src="/images/mypantrylogo.png" id="logo" className="img-fluid"/>
                </div>
                <div className="col new-btn">

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