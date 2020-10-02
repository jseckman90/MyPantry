const React = require("react");
const Layout = require("./layout.jsx");

const useButton = (item) => {
  if (item.qty > 0) {
      return(
          <div>
          <form action={`/items/${item._id}?_method=PUT`} method="POST">
              <input type="hidden" name="qty" value={item.qty - 1}/>
              <input type="submit" value="Use One" className="info btn btn-outline-light btn-sm"/>
          </form>
          </div>

      )
  } else {
      return(
          <h5>You are out of {item.name}</h5>
      )
  }
}


class Index extends React.Component {
  render() {
    const {items} = this.props
    return (
      <Layout title="My Pantry">
        <div className="container item-container">
          <div className="category">
            <div className="category-title">
              <h3>Produce</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'produce') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Dairy</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'dairy') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Canned Goods</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'canned-goods') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Frozen Foods</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'frozen-foods') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Meat | Fish</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'meat-and-fish') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Spices</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'spices') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Condiments | Sauces | Oils</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'condiments-sauces-oils') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Breads | Pastas</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'breads-pastas') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Snacks</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'snacks') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Beverages</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'beverages') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          <div className="category">
            <div className="category-title">
              <h3>Cereals</h3>
            </div>
            <div className="pantry-items">
              {
                items.map((item, i) => {
                  if(item.category === 'cereals') {
                    return (
                        <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty: {item.qty} </h6>
                              <span>{useButton(item)}</span>
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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

          
          <div className="category">
            <div className="category-title">
              <h3>Grocery List</h3>
            </div>
            <div className="pantry-items">
              {
                this.props.items.map((item, i) => {
                  if(item.minqty > item.qty) {
                    return (
                      <div className="col-sm-2" >
                          <div className="hovereffect" >
                            <img className="img-responsive" src={item.img} className="card-img-top img-fluid" alt=""/>
                            <div className="overlay">
                              <h4>{item.name}</h4>
                              <h6> Qty on Hand: {item.qty} </h6>
                              <h6> Min Qty: {item.minqty} </h6>
                              <h6> Buy at least: {item.minqty - item.qty} </h6>
                              
                              <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="info btn btn-outline-light btn-sm"/>
                              </form>
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
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
            
                        
                    
