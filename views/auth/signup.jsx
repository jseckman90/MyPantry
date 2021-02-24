const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <div className="auth-container">
        <div className="auth-form">
        <form action="/auth/signup" method="post">
          <div class="form-group">
            <input type="text" name="username" class="form-control" placeholder="Username"/>
          </div>
          <div class="form-group">
            <input type="text" name="password" class="form-control" placeholder="Password"/>
          </div>
          <p>Already a Member? <a href="/auth/login">Log In</a></p>
          <button type="submit" value="signup" class="btn btn-outline-dark btn-sm btn-block">Sign Up</button>
        </form>
        </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
