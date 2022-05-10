import React, { Component } from 'react'

export default class ItemPhone extends Component {
  // ...


  render() {
    // ...
    let { maSP, tenSP, hinhAnh, giaBan } = this.props.phone;

    return (
      <div className="card col-4">
        <img style={{
          width: "100%",
          height: "300px",
          objectFit: "contain"
        }} className="card-img-top" src={hinhAnh} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan}</p>
          
          <button onClick={() => {
            this.props.handleSanPhamChiTiet(this.props.phone)
          }} href="#" className="btn mx-2 btn-success">Xem chi tiet</button>
          <button onClick={() => {
            this.props.handleThemSanPham(this.props.phone)
          }} href="#" className="btn mx-2 btn-primary">Them gio hang</button>
        </div>
      </div>
    )
  }
}
