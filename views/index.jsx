const React = require("react");
const Layout = require("./layout.jsx");
// const Item = require("../models/items/index.js");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <h1> Pantry Index </h1>
        {
                    
                    this.props.items.map((item, i) => {
                     return (
                        <div className="card" style={{width:"18em"}}>
                            <a href={`/items/${item._id}`}><img src={item.img} className="card-img-top"/></a>
                            <div className="card-body">
                                <h5 className="card-title">{ item.name }</h5>
                                <h5 className="card-title">{ item.category }</h5>
                                <a href={`/items/${item._id}`} className="btn btn-primary">View Product</a>
                            </div>
                        </div>                        
                        
                         )
                     })
                }
      </Layout>
    );
  }
}

module.exports = Index;
