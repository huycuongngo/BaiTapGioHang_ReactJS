import React, { Component } from 'react'

const TANG_SO_LUONG_SP = 1;
const GIAM_SO_LUONG_SP = -1;


export default class ModelGioHang extends Component {
  // ...
  renderGioHang = () => {
    // ...

    return this.props.gioHang.map((sp) => {
      return (
        <tr>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img className='' style={{
              width: "30%",
              height: "30%",
              objectFit: "contain"
            }} src={sp.hinhAnh} alt="" />
          </td>
          <td>{sp.giaBan}</td>
          <td className='d-flex justify-content-center align-items-center'>
            <button onClick={() => {
              this.props.handleThayDoiSoLuong(sp.maSP, TANG_SO_LUONG_SP)
            }} className='btn btn-success mx-2'>+</button>
            {sp.soLuong}
            <button onClick={() => {
              this.props.handleThayDoiSoLuong(sp.maSP, GIAM_SO_LUONG_SP)
            }} className='btn btn-danger mx-2'>-</button>
          </td>
        </tr>
      )
    })
  }

  getSoLuongSanPham = () => {
    // ...
    const initialValue = 0;
    return this.props.gioHang.reduce((tong, sp) => {
      return (tong += sp.soLuong)
    }, initialValue);
  }

  render() {
    // ...

    return (
      <div className='mt-5 mb-5'>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Gio Hang
        </button>
        <div className='mx-2 text-danger'>({this.getSoLuongSanPham()})</div>
        <div className="modal fade mt-5" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div style={{ maxWidth: "60vw" }} className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Danh sach san pham</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body">
                {/* render */}
                <table className='table'>
                  <thead>
                    <th>Ma San Pham</th>
                    <th>Ten San Pham</th>
                    <th>Hinh Anh San Pham</th>
                    <th>Gia</th>
                    <th>So luong</th>
                  </thead>
                  <tbody>
                    {this.renderGioHang()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
