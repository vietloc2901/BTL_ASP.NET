using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Nhom9.Controllers
{
    public class CartController : Controller
    {
        // GET: Cart
        [HttpGet]
        public ActionResult Orders()
        {
            return View();
        }

        [HttpGet]
        public ActionResult CheckOut()
        {
            return View();
        }
    }
}