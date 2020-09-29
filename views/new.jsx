const React = require('react')
const Layout = require('./layout.jsx')

class New extends React.Component {
    render() {
        return (
        <Layout title="New Item">
            
            <h1>New Pantry Item</h1>
            <form action action="/items" method="POST">
                Name: <input type="text" name="name"/>
                <br/>
                Image URL: <input type="text" name="img" />
                <br/>
                Category: <input type="text" name="category" />
                <br/>
                Quantity: <input type="number" name="qty" />
                <br/>
                <input type="submit" name="" value="Create Pantry Item"/>
            </form>
        </Layout>
        );
    }
}


module.exports = New;