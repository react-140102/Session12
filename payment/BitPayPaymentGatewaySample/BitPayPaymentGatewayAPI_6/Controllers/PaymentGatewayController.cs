using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BitPayDll;

namespace BitPayPaymentGatewayAPI.Controllers
{
    public class PaymentGatewayController : Controller
    {
        string Api = "adxcv-zzadq-polkjsad-opp13opoz-1sdf455aadzmck1244567";

        [HttpGet]
        public void Send(string Amount = "5000", string FactorId = "201", string Name = "Ali Rezaei", string Email = "md@gmail.com", string Description = "Test DESC")
        {
            BitPay bitpay = new BitPay();

            string Url = "http://bitpay.ir/payment-test/gateway-send";

            string Redirect = "https://192.168.92.1:44364/PaymentGateway/Result";


            int result = bitpay.Send(Url, Api, Amount, Redirect, FactorId, Name, Email, Description);

            if (result > 0)
            {
                string go = string.Format("http://bitpay.ir/payment-test/gateway-{0}", result);
                Response.Redirect(go);
            }

        }

        [HttpPost]
        public ActionResult Result(PaymentResult model)
        {
            try
            {
                BitPay bitpay = new BitPay();

                string url = "http://bitpay.ir/payment-test/gateway-result-second";

                int result = bitpay.Get(url, Api, model.trans_id, model.id_get);

                if (result == 1)
                {
                    //true
                    ViewData["id"] = model.trans_id;
                    ViewData["msg"] = string.Format("پرداخت شما با شماره فاکتور {0} موفقیت انجام شد", model.trans_id);
                }
                else
                {
                    //false
                    ViewData["msg"] = "خطا در نهایی کردن پرداخت";
                }
            }
            catch(Exception ex)
            {
                ViewData["msg"] = ex.ToString();
            }
            return View();

        }
    }

    public class PaymentResult
    {
        public string trans_id { get; set; }
        public string id_get { get; set; }
    }
}
