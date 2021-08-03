using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Nhom9.Models;
using PagedList;
using System.Data.Entity;

namespace Nhom9.Areas.Admin.Controllers
{
    public class BillController : BaseController
    {
        Nhom9DB db = new Nhom9DB();
        // GET: Admin/Bill
        [HttpGet]
        public ActionResult Index(DateTime? searchString, int page = 1, int pageSize = 10)
        {
            List<HoaDon> hoaDons = db.HoaDons.Include("TaiKhoanNguoiDung").Select(p => p).ToList();
            if (searchString != null)
            {
                ViewBag.searchString = searchString.Value.ToString("yyyy-MM-dd");
                string search = searchString.Value.ToString("dd/MM/yyyy");
                hoaDons = hoaDons.Where(hd => hd.NgayDat.ToString().Contains(search)).ToList();
            }
            return View(hoaDons.OrderBy(hd => hd.NgayDat).ToPagedList(page, pageSize));
        }

        [HttpPost]
        public JsonResult Index(int id)
        {
            HoaDon hd = db.HoaDons.Include("TaiKhoanNguoiDung")
                .Where(x => x.MaHD == id).FirstOrDefault();
            IEnumerable<ChiTietHoaDon> chiTietHoaDons = db.ChiTietHoaDons.Include("SanPhamChiTiet")
                .Include("SanPhamChiTiet.SanPham").Include("SanPhamChiTiet.KichCo").Where(x => x.MaHD == id);
            return Json(new { hoadon = hd, cthd = chiTietHoaDons }, JsonRequestBehavior.AllowGet);
        }
    }
}