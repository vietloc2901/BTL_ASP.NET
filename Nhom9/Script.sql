
use master
go

drop database Nhom9
go

Use master
go

Create database Nhom9
go

use Nhom9
go

/*
Created		14/06/2021
Modified		27/07/2021
Project		
Model			
Company		
Author		
Version		
Database		MS SQL 2005 
*/


Create table [TaiKhoanQuanTri]
(
	[ID] Integer Identity NOT NULL,
	[TenDangNhap] Varchar(100) NOT NULL, UNIQUE ([TenDangNhap]),
	[MatKhau] Varchar(50) NOT NULL,
	[LoaiTaiKhoan] Bit NOT NULL,
	[HoTen] Nvarchar(100) NOT NULL,
	[TrangThai] Bit NOT NULL,
Primary Key ([ID])
) 
go

Create table [TaiKhoanNguoiDung]
(
	[MaTK] Integer Identity NOT NULL,
	[TenDangNhap] Varchar(100) NOT NULL, UNIQUE ([TenDangNhap]),
	[MatKhau] Varchar(50) NOT NULL,
	[HoTen] Nvarchar(100) NOT NULL,
	[SoDienThoai] Char(11) NOT NULL,
	[DiaChi] Nvarchar(100) NOT NULL,
	[NgaySinh] Datetime NOT NULL,
	[Email] Varchar(100) NOT NULL,
	[GioiTinh] Bit NOT NULL,
	[TrangThai] Bit NOT NULL,
Primary Key ([MaTK])
) 
go

Create table [DanhMuc]
(
	[MaDM] Integer Identity NOT NULL,
	[TenDanhMuc] Nvarchar(100) NOT NULL, UNIQUE ([TenDanhMuc]),
	[NgayTao] Datetime NOT NULL,
	[NguoiTao] Nvarchar(100) NOT NULL,
	[NgaySua] Datetime NOT NULL,
	[NguoiSua] Nvarchar(100) NOT NULL,
Primary Key ([MaDM])
) 
go

Create table [SanPham]
(
	[MaSP] Integer Identity NOT NULL,
	[MaDM] Integer NOT NULL,
	[TenSP] Nvarchar(150) NOT NULL,
	[Gia] Money NOT NULL,
	[MoTa] Ntext NOT NULL,
	[ChatLieu] Nvarchar(50) NOT NULL,
	[HuongDan] Ntext NOT NULL,
	[NgayTao] Datetime NOT NULL,
	[NguoiTao] Nvarchar(100) NOT NULL,
	[NgaySua] Datetime NOT NULL,
	[NguoiSua] Nvarchar(100) NOT NULL,
	[MaMau] Char(10) NOT NULL,
	[HinhAnh] Nvarchar(150) NOT NULL,
Primary Key ([MaSP])
) 
go

Create table [HoaDon]
(
	[MaHD] Integer Identity NOT NULL,
	[MaTK] Integer NOT NULL,
	[NgayDat] Datetime NOT NULL,
	[GhiChu] Ntext NULL,
	[TrangThai] Integer NOT NULL,
	[HoTenNguoiNhan] Nvarchar(100) NOT NULL,
	[DiaChiNhan] Nvarchar(100) NOT NULL,
	[SoDienThoaiNhan] Char(11) NOT NULL,
	[NgaySua] Datetime NULL,
	[NguoiSua] Nvarchar(100) NULL,
Primary Key ([MaHD])
) 
go

Create table [ChiTietHoaDon]
(
	[MaHD] Integer NOT NULL,
	[IDCTSP] Integer NOT NULL,
	[SoLuongMua] Integer NOT NULL,
	[GiaMua] Money NOT NULL,
Primary Key ([MaHD],[IDCTSP])
) 
go

Create table [KichCo]
(
	[MaKichCo] Integer Identity NOT NULL,
	[TenKichCo] Nvarchar(10) NOT NULL,
Primary Key ([MaKichCo])
) 
go

Create table [SanPhamChiTiet]
(
	[IDCTSP] Integer Identity NOT NULL,
	[MaSP] Integer NOT NULL,
	[MaKichCo] Integer NOT NULL,
	[SoLuong] Integer NOT NULL,
Primary Key ([IDCTSP])
) 
go


Alter table [HoaDon] add  foreign key([MaTK]) references [TaiKhoanNguoiDung] ([MaTK])  on update cascade on delete cascade 
go
Alter table [SanPham] add  foreign key([MaDM]) references [DanhMuc] ([MaDM])  on update cascade on delete cascade 
go
Alter table [SanPhamChiTiet] add  foreign key([MaSP]) references [SanPham] ([MaSP])  on update cascade on delete cascade 
go
Alter table [ChiTietHoaDon] add  foreign key([MaHD]) references [HoaDon] ([MaHD])  on update cascade on delete cascade 
go
Alter table [SanPhamChiTiet] add  foreign key([MaKichCo]) references [KichCo] ([MaKichCo])  on update cascade on delete cascade 
go
Alter table [ChiTietHoaDon] add  foreign key([IDCTSP]) references [SanPhamChiTiet] ([IDCTSP])  on update cascade on delete cascade 
go


Set quoted_identifier on
go


Set quoted_identifier off
go




