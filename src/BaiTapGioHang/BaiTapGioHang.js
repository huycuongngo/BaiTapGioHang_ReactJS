import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import { phoneArr } from './phoneArr';
import ModelGioHang from './ModelGioHang'
import SanPhamChiTiet from './SanPhamChiTiet'

export default class BaiTapGioHang extends Component {
  // ...
  constructor(props) {
    super(props);
    this.state = {
      phoneArr: phoneArr,
      chiTietSanPham: phoneArr[2],
      gioHang: []
    }
  }

  handleSanPhamChiTiet = (sp) => {
    // ...
    this.setState({
      chiTietSanPham: sp
    })

    // return()
  }

  handleThemSanPham = (sp) => {
    // ...
    let cloneGioHang = [...this.state.gioHang];
    let index = this.state.gioHang.findIndex((item) => {
      // ...

      return item.maSP === sp.maSP
    })
    if (index === -1) {
      let spGioHang = { ...sp, soLuong: 1 };
      cloneGioHang.push(spGioHang);
    } else {
      cloneGioHang[index].soLuong++;
    }
    this.setState({ gioHang: cloneGioHang });

    // return()
  }

  handleThayDoiSoLuong = (idSP, giaTri) => {
    // ...
    let index = this.state.gioHang.findIndex((item) => {
      // ...

      return item.maSP === idSP
    })
    let cloneGioHang = [...this.state.gioHang];
    if (index !== -1) {
      cloneGioHang[index].soLuong += giaTri;
      cloneGioHang[index].soLuong === 0 && cloneGioHang.splice(index, 1);
    }
    this.setState({ gioHang: cloneGioHang });
    // return()
  }

  render() {
    // ...

    return (
      <div>
        <ModelGioHang
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
          gioHang={this.state.gioHang}
        />

        <DanhSachSanPham
          handleThemSanPham={this.handleThemSanPham}
          handleSanPhamChiTiet={this.handleSanPhamChiTiet}
          phoneArr={this.state.phoneArr} />

        <SanPhamChiTiet chiTietSanPham={this.state.chiTietSanPham} />
      </div>
    )
  }
}
