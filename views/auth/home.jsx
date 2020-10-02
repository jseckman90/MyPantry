const React = require("react");
const Layout = require("./layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="MyPantry | LOGIN">
        <div className="home-container">
          <div className="auth-buttons">
            <a href={"/auth/login"} className="btn btn-primary btn-nav home">Log In</a>
            <a href={"/auth/signup"} className="btn btn-primary btn-nav home">Sign Up</a>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
