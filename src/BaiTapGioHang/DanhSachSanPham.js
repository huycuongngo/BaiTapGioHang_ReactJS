
import React, { Component } from 'react'
import ItemPhone from './ItemPhone'

export default class DanhSachSanPham extends Component {
  // ...
  renderDataPhones = () => {
    // ...

    return this.props.phoneArr.map((phone) => {
      // ...

      return (
        <ItemPhone
          handleThemSanPham={this.props.handleThemSanPham}
          handleSanPhamChiTiet={this.props.handleSanPhamChiTiet}
          phone={phone} />
      )
    })
  }

  render() {
    // ...

    return (
      <div className='row'>{this.renderDataPhones()}</div>
    )
  }
}
