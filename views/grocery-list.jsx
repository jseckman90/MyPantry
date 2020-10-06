const React = require("react");
const Layout = require("./layout.jsx");



class Index extends React.Component {
  render() {
    const {items} = this.props
    return (
      <Layout title="My Pantry">
        <div className="container item-container">
          
          <div className="grocery-list">
            <div className="new-title">
              <h1>Grocery List</h1>
            </div>
            <div className="pantry-items grocery-list-items">
              {
                this.props.items.map((item, i) => {
                  if(item.minqty > item.qty) {
                    return (
                      <div className="card mb-3" >
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src={item.img} class="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <h5 className="card-text">Minimum Stock: {item.minqty}</h5>
                            <h5 className="card-text">Current Stock: {item.qty}</h5>
                            <h3 className="card-text">Buy at least: {item.minqty - item.qty}</h3>
                            <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                  <input type="hidden" name="qty" value={item.qty + 1}/>
                                  {/* <input type="submit" value="Add One"  className="info btn btn-outline-dark btn-sm"/> */}
                                  <input type="number" name="qty" className="form-control" />
                                  
                            </form>
                            
                          </div>
                        </div>
                      </div>
                    </div>                  
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
            
                        
                    
