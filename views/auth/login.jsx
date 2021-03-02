const React = require("react");
const Layout = require("./layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="MyPantry | LOGIN">
        <div className="auth-container">
          <div className="auth-form">
            <form action="/auth/login" method="post">
              <div class="form-group">
                <input
                  type="text"
                  name="username"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <p>
                Not a Member? <a href="/auth/signup">Sign Up</a>
              </p>

              <button
                type="submit"
                value="login"
                class="btn btn-outline-dark btn-sm btn-block">
                Log In
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
