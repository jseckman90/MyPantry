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
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand new-title" href="/items"><img src="/images/logonav.png" width="30" height="30" alt="" loading="lazy"></img>  MyPantry</a>
  
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href={'/items'}>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/items/grocery-list">Grocery List</a>
                </li>
              </ul>
                <a href="/auth/logout" class="btn btn-outline-dark my-2 my-sm-0" >Log Out</a>
              </div>
          </nav>
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