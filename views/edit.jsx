const React = require('react');
const Layout = require('./layout')



class Edit extends React.Component{
  render() {
    return (
      <Layout title="Edit Product">  
          
        <div className="edit-form">
        <form action={`/items/${this.props.item._id}?_method=PUT`} method="POST" className="edit-form">
        
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" defaultValue={this.props.item.name}/>
            </div>
            <div className="form-group">
                <label for="img-url">Image URL</label>
                <input type="text" className="form-control" id="img-url" name="img" defaultValue={this.props.item.img}/>
            </div>
            <div className="form-group">
                <label for="price">Category</label>
                <input type="text" className="form-control" id="category" name="category" defaultValue={this.props.item.category}/>
            </div>
            <div className="form-group">
                <label for="quantity">Quantity</label>
                <input type="text" className="form-control" id="quantity" name="qty" defaultValue={this.props.item.qty}/>
            </div>
            <input type="submit" value="Submit Changes"/>
        </form>
        </div>
      </Layout>
    )
  }
}
module.exports= Edit;