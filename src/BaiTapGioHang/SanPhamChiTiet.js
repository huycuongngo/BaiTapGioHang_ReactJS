import React, { Component } from 'react'

export default class SanPhamChiTiet extends Component {
  // ...

  render() {
    // ...
    let { hinhAnh, heDieuHanh, manHinh, giaBan } = this.props.chiTietSanPham;

    return (
      <div>
        <h2 className='mt-5 text-success'>Chi Tiet San Pham</h2>
        <div className='row'>
          <img className="col-5" src={hinhAnh} alt="" />
          <div className='col-7'>
            <table className='table'>
              <tr>
                <td>Màn hình</td>
                <td>{manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <td>Giá bán</td>
                <td>{giaBan}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
