const React = require('react');
const Layout = require('./layout')

const useButton = (item) => {
    if (item.qty > 0) {
        console.log(item.qty)
        return(
            <div>
            <form action={`/items/${item._id}?_method=PUT`} method="POST">
                <input type="hidden" name="qty" value={item.qty - 1}/>
                <input type="submit" value="Use One"  className="btn btn-primary"/>
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
                
                <div className="item-show">
                <div class="card mb-3" >
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src={ item.img } class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 className="card-title">{ item.name }</h5>
                                <h5 className="card-title">{ item.category }</h5>
                                <h5 className="card-title">{ item.description }</h5>
                                <h5 className="card-title">QOH: { item.qty }</h5>
                                <br/>
                                <a href={`/items/${item._id}/edit`}>Edit This Product</a><br/>
                                <br/>
                                <h6>{useButton(item)}</h6>
                                <form action={`/items/${item._id}?_method=PUT`} method="POST">
                                    <input type="hidden" name="qty" value={item.qty + 1}/>
                                    <input type="submit" value="Add One"  className="btn btn-primary"/>
                                </form>
                                <br/>
                                <br/>
                                <form action={`/items/${item._id}?_method=DELETE`} method="POST"><br/>
                                    <input type="submit" value="DELETE" className="btn btn-danger btn-sm"/>            
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>


                     
            </Layout>
        )
    }
}
module.exports = Show;