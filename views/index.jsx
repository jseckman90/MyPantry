const React = require("react");
const Layout = require("./layout.jsx");

const catArray = [
  "produce",
  "dairy",
  "canned-goods",
  "frozen-foods",
  "meat-and-fish",
  "spices",
  "condiments-sauces-oils",
  "breads-pastas",
  "snacks",
  "beverages",
  "cereals",
];

const useButton = (item) => {
  if (item.qty > 0) {
    return (
      <div>
        <form action={`/items/${item._id}?_method=PUT`} method="POST">
          <input type="hidden" name="qty" value={item.qty - 1} />
          <input
            type="submit"
            value="Use One"
            className="info btn btn-outline-light btn-sm"
          />
        </form>
      </div>
    );
  } else {
    return <h5>You are out of {item.name}</h5>;
  }
};

class Index extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <Layout title="My Pantry">
        <div class="jumbotron darken">
          <h1 class="display-4">MyPantry</h1>
          <p class="lead">
            Keep track of your home pantry items | Create, Edit, Delete pantry
            items | Add to your Grocery List.
          </p>
          <hr class="my-4" />
          <a
            class="btn btn-outline-light btn-lg"
            href="/items/new"
            role="button">
            Add Pantry Item
          </a>
        </div>

        <div className="container item-container">
          {catArray.map((cat) => {
            return (
              <div id={cat} className="category">
                <div className="category-title">
                  <h3>{cat.toUpperCase()}</h3>
                </div>
                <div className="pantry-items">
                  {items.map((item) => {
                    if (item.category === cat) {
                      return (
                        <div className="col-sm-2">
                          <div className="hovereffect">
                            <img
                              className="img-responsive"
                              src={item.img}
                              className="card-img-top img-fluid"
                              alt={item.name}
                            />
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form
                                action={`/items/${item._id}?_method=PUT`}
                                method="POST">
                                <input
                                  type="hidden"
                                  name="qty"
                                  value={item.qty + 1}
                                />
                                <input
                                  type="submit"
                                  value="Add One"
                                  className="info btn btn-outline-light btn-sm"
                                />
                              </form>
                              <a className="info" href={`/items/${item._id}`}>
                                View
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}

          <div className="category">
            <div className="category-title">
              <h3>Grocery List</h3>
            </div>
            <div className="pantry-items">
              {items.map((item, i) => {
                if (item.minqty > item.qty) {
                  return (
                    <div className="col-sm-2">
                      <div className="hovereffect">
                        <img
                          className="img-responsive"
                          src={item.img}
                          className="card-img-top img-fluid"
                          alt=""
                        />
                        <div className="overlay">
                          <h4>{item.name}</h4>
                          <h6> Qty on Hand: {item.qty} </h6>
                          <h6> Min Qty: {item.minqty} </h6>
                          <h6> Buy at least: {item.minqty - item.qty} </h6>

                          <form
                            action={`/items/${item._id}?_method=PUT`}
                            method="POST">
                            <input
                              type="hidden"
                              name="qty"
                              value={item.qty + 1}
                            />
                            <input
                              type="submit"
                              value="Add One"
                              className="info btn btn-outline-light btn-sm"
                            />
                          </form>
                          <a className="info" href={`/items/${item._id}`}>
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
