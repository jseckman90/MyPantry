const React = require('react');
const Layout = require('./layout')
class Show extends React.Component {
    render(){
        const {item, id} = this.props
        return (
            <Layout>
                
                <div className="item-show">
                <div className="card" style={{width:"30em"}}>
                    <img src={ item.img } className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{ item.name }</h5>
                        <h5 className="card-title">{ item.category }</h5>
                        <h5 className="card-title">{ item.description }</h5>
                        <h5 className="card-title">QOH: { item.qty }</h5>
                        Quantity:<input type="number" name="qty"/> <br/>
                        <a href={`/items/${item._id}/edit`}>Edit This Product</a><br/>
                        <form action={`/items/${item._id}?_method=DELETE`} method="POST"><br/>
                            <input type="submit" value="DELETE"/>            
                        </form>
                        <input type="submit" value="BUY"/> <br/>
                    </div>
                </div>
                </div>
                     
            </Layout>
        )
    }
}
module.exports = Show;