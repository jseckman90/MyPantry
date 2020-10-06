const React = require('react');
const Layout = require('./layout')



class Edit extends React.Component{
  render() {
    return (
      <Layout title="Edit Pantry Item">  
        <div className="new-title">
              <h1>Edit Pantry Item</h1>
            </div>  
        <div className="container form-container">
        
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
                <label for="category">Category</label>
                <select className="form-control" name="category" id="category" defaultValue={this.props.item.category}>
                    <option value="">--Please choose an option--</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="meat-and-fish">Meat and Fish</option>
                    <option value="spices">Spices</option>
                    <option value="condiments-sauces-oils">Condiments/Sauces/Oils</option>
                    <option value="breads-pastas">Breads/Pastas</option>
                    <option value="snacks">Snacks</option>
                    <option value="beverages">Beverages</option>
                    <option value="cereals">Cereals</option>
                </select>
            </div>
           
            <div className="form-group">
                <label for="quantity">Quantity</label>
                <input type="number" className="form-control" id="quantity" name="qty" defaultValue={this.props.item.qty}/>
            </div>
            <div className="form-group">
                <label for="quantity">Minimum Quantity</label>
                <input type="number" className="form-control" id="quantity" name="minqty" defaultValue={this.props.item.minqty}/>
            </div>
            <input type="submit" className="btn btn-primary" value="Submit Changes"/>
        </form>
        </div>
      </Layout>
    )
  }
}
module.exports= Edit;