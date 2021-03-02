const React = require('react');
const Layout = require('./layout')

const useButton = (item) => {
    if (item.qty > 0) {
        return(
            <div>
                <form action={`/items/${item._id}?_method=PUT`} method="POST">
                    <input type="hidden" name="qty" value={item.qty - 1}/>
                    <input type="submit" value="Use One"  className="btn btn-outline-dark btn-sm"/>
                </form>
            </div>
        )
    } else {
        return(
            <h5>You are out of {item.name}</h5>
        )
    }
}

class Show extends React.Component {
    render(){
        const {item, id} = this.props
        return (
        <Layout title={item.name}>
        <div className="container item-container">
          
          <div className="grocery-list">
            <div className="new-title">
              <h1>{item.name}</h1>
            </div>
            <div className="pantry-items grocery-list-items">
              {
                <div class="card text-center" style={{width: "18rem"}}>
                  <img src={item.img} class="card-img-top" alt={item.name}/>
                  <div class="card-body">
                    <h5 className="card-text">Minimum Stock: {item.minqty}</h5>
                    <h5 className="card-text">Current Stock: {item.qty}</h5>
                    <a href={`/items/${item._id}/edit`}>Edit This Product</a><br/>
                        <h6>{useButton(item)}</h6>
                        <form action={`/items/${item._id}?_method=PUT`} method="POST">
                            <input type="hidden" name="qty" value={item.qty + 1}/>
                            <input type="submit" value="Add One"  className="btn btn-outline-dark btn-sm"/>
                        </form>
                        <br/>
                        <form action={`/items/${item._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE" className="btn btn-outline-danger btn-sm"/>            
                        </form>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>            
        </Layout>
        )
    }
}

module.exports = Show;