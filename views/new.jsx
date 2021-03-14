const React = require('react')
const Layout = require('./layout.jsx')

class New extends React.Component {
    render() {
        return (
        <Layout title="New Pantry Item">
            
            <h1 className ="new-title">New Pantry Item</h1>
            <div className="container form-container">
            <form action action="/items" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" className="form-control"/>
                </div>
                <div class="form-group">
                <label for="img">Image URL</label>
                <input type="text" name="img" id="img" className="form-control" />
                </div>
                <div class="form-group">
                <label for="category">Category: </label>
                <select select className="form-control" name="category" id="category" className="form-control">
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
                <div class="form-group">
                <label for="qty">Quantity</label>
                <input type="number" name="qty" className="form-control" />
                </div>
                <div class="form-group">
                <label for="qty">Minimum Quantity</label>
                <input type="number" name="minqty" className="form-control" />
                </div>
                <input type="submit" name="" value="Create Pantry Item"/>
            </form>
            </div>
        </Layout>
        );
    }
}


module.exports = New;