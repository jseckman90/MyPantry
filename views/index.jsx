const React = require("react");
const Layout = require("./layout.jsx");


class Index extends React.Component {
  render() {
    const {items} = this.props
    return (
      <Layout title="My Pantry">
        <div className="container item-container">
          <div className="produce">
            <div className="category-title">
              <h3>Produce</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'produce') {
                    return (
                      
                        
                        <div className="col-sm-2">
                  
                          <div className="hovereffect">
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h2>{item.name}</h2>
                              <a className="info" href={`/items/${item._id}`}>View</a>
                            </div>
                          </div>
                        </div>
                          
                        
                                           
                    )
                  }
                })
              }
            </div>
          </div>

          <div className="dairy">
            <div className="category-title">
              <h3>Dairy</h3>
            </div>
            <div className="pantry-items">
              {
                this.props.items.map((item, i) => {
                  if(item.category === 'dairy') {
                    return (
                      <div className="card text-center" style={{width:"10em"}}>
                        <a href={`/items/${item._id}`}><img src={item.img} className="card-img-top img-fluid"/></a>
                        <div className="card-body">
                          <h6 className="card-title">{ item.name }</h6>
                          <p className="card-title">Quantity: { item.qty }</p>
                          <a href={`/items/${item._id}`} className="btn btn-primary btn-sm view-btn">View Product</a>
                        </div>
                      </div>                        
                    )
                  }
                })
              }
            </div>
          </div>
          <div className="grocery-list">
            <div className="category-title">
              <h3>Grocery List</h3>
            </div>
            <div className="pantry-items">
              {
                this.props.items.map((item, i) => {
                  if(item.minqty >= item.qty) {
                    return (
                      <div className="card text-center" style={{width:"10em"}}>
                        <a href={`/items/${item._id}`}><img src={item.img} className="card-img-top img-fluid"/></a>
                        <div className="card-body">
                          <h6 className="card-title">{ item.name }</h6>
                          <p className="card-title">Quantity in Pantry: { item.qty }</p>
                          <p className="card-title">Minimum Quantity: { item.minqty }</p>
                          <p className="card-title">Buy at least: { item.minqty - item.qty }</p>
                          <a href={`/items/${item._id}`} className="btn btn-primary btn-sm view-btn">View Product</a>
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
            
                        
                    
