import React from "react"

const Card =() => {
  return(
<div className="card container">
  <img className="card-img-top" src="https://images.ctfassets.net/ub3bwfd53mwy/6atCoddzStFzz0RcaztYCh/1c3e8a37eebe3c6a435038f8d9eef7f3/3_Image.jpg?w=750" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary md-auto d-block">Go somewhere</a>
  </div>
</div>)
}

export default Card;