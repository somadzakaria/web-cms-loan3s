import Vue from "vue";
import VueRouter from "vue-router";
import Loan from "../views/Loan.vue";
import Loanupdate from "../components/loan/Edit.vue";
import HCBP from "../views/HCBP.vue";
import HCComben from "../views/HCComben.vue";
import HCCombenedit from "../components/HCComben/Update.vue";
import HCCombenupdate from "../views/HCCombenupdate.vue";
import HCCombenupdateEdit from "../components/HCCombenUpdate/Update.vue";
import Product from "../views/Product.vue";
import Productcreate from "../components/Product/Produkcreate.vue";
import Productupdate from "../components/Product/Produkupdate.vue";
import Promotion from "../views/Promotion.vue";
import Promotioncreate from "../components/Promotion/Promotioncreate.vue";
import Promotionupdate from "../components/Promotion/Promotionupdate.vue";
import General from "../views/GeneralSetting.vue";
import Generalcreate from "../components/General/Generalcreate.vue";
import Generalupdate from "../components/General/Generalupdate.vue";
import Summary from "../views/Summary.vue";
import Reportdetail from "../views/Reportdetail.vue";
import Blog from "../views/Blog.vue";
import Blogcreate from "../components/Blog/Blogcreate.vue";
import Blogupdate from "../components/Blog/Blogupdate.vue";
import Organization from "../views/Organization.vue";
import Organizationcreate from "../components/Organization/Ochartcreate.vue";
import Organizationupdate from "../components/Organization/Ochartupdate.vue";
import Faq from "../views/Faq.vue";
import Faqcreate from "../components/Faq/Faqcreate.vue";
import Faqupdate from "../components/Faq/Faqupdate.vue";
import Approval from "../views/Aproval.vue";
import Notfound from "../views/404.vue";
import Forgotpassword from "../views/reset/ForgotPassword.vue"
import Otp from "../views/reset/Otp.vue"
import ResetPassword from "../views/reset/ResetPassword.vue"
import profile from "../views/Profile.vue"
import Funding from "../views/Fundingbatch.vue"
import Transfer from "../views/Transfer.vue"
import PersetujuanPV from "../views/PersetujuanPV";
Vue.use(VueRouter);
const routes = [
  {
    path: "*",
    name: "*",
    component: Notfound,
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Forgot-password",
    name: "ForgotPassword",
    component: Forgotpassword,
  },
  {
    path: "/Otp",
    name: "Otp",
    component: Otp,
  },
  {
    path: "/FundingBatch",
    name: "Funding",
    component: Funding,
  },
  {
    path: "/funding-show/",
    name: "fundingshow",
    component: () => import("../components/Funding/Detail.vue"),
  },
  {
    path: "/Transfer",
    name: "Transfer",
    component: Transfer,
  },
  {
      path: "/PersetujuanPV",
      name: "PersetujuanPV",
      component: PersetujuanPV,
  },
  {
    path: "/Reset-password",
    name: "Resetpassword",
    component: ResetPassword,
  },
  {
    path: "/Profile",
    name: "Profile",
    component:profile,
    meta:{requiresAuth:true}
  },
  {
    path: "/loan",
    name: "Loan",
    component: Loan,
    meta:{requiresAuth:true}
  },
  {
    path: "/Approval",
    name: "Approval",
    component: Approval,
    meta:{requiresAuth:true}
  },
  {
    path: "/loan-update/:id",
    name: "Loanupdate",
    component: Loanupdate,
    meta:{requiresAuth:true}
  },
  {
    path: "/HCBP",
    name: "HCBP",
    component: HCBP,
    meta:{requiresAuth:true}
  },

  {
    path: "/Faq",
    name: "Faq",
    component: Faq,
    meta:{requiresAuth:true}
  },
  {
    path: "/Faq-create",
    name: "Faqcreate",
    component: Faqcreate,
    meta:{requiresAuth:true}
  },
  {
    path: "/Faq-update/:id",
    name: "Faqupdate",
    component: Faqupdate,
    meta:{requiresAuth:true}
  },
  {
    path: "/HCComben",
    name: "HCComben",
    component: HCComben,
    meta:{requiresAuth:true}
  },
  {
    path: "/HCComben-update/:id",
    name: "HCCombenupdate2",
    component: HCCombenedit,
      meta:{requiresAuth:true}

  },
  {
    path: "/HCCombenupdate",
    name: "HCCombenupdate",
    component: HCCombenupdate,
      meta:{requiresAuth:true}
  },
  {
    path: "/HCComben-Edit/:id",
    name: "HCComben-update",
    component: HCCombenupdateEdit,
      meta:{requiresAuth:true}
  },
  {
    path: "/Product",
    name: "Product",
    component: Product,
      meta:{requiresAuth:true}
  },
  {
    path: "/Product-create",
    name: "Productcreate",
    component: Productcreate,
      meta:{requiresAuth:true}
  },
  {
    path: "/Product-update/:id",
    name: "Productupdate",
    component: Productupdate,
      meta:{requiresAuth:true}
  },
  {
    path: "/GeneralSetting",
    name: "GeneralSetting",
    component: General,
      meta:{requiresAuth:true}
  },
  {
    path: "/General-create",
    name: "Generalcreate",
    component: Generalcreate,
      meta:{requiresAuth:true}
  },
  {
    path: "/General-update/:id",
    name: "Generaltupdate",
    component: Generalupdate,
      meta:{requiresAuth:true}
  },
  {
    path: "/Promotion",
    name: "Promotion",
    component: Promotion,
      meta:{requiresAuth:true}
  },
  {
    path: "/Promotion-create",
    name: "Promotioncreate",
    component: Promotioncreate,
      meta:{requiresAuth:true}
  },
  {
    path: "/Promotion-update/:id",
    name: "Promotiontupdate",
    component: Promotionupdate,
      meta:{requiresAuth:true}
  },
  {
    path: "/Dashboard",
    name: "Summary",
    component: Summary,
      meta:{requiresAuth:true}
  },
  {
    path: "/Reportdetail",
    name: "Reportdetail",
    component: Reportdetail,
      meta:{requiresAuth:true}
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
      meta:{requiresAuth:true}
  },
  {
    path: "/blog-create",
    name: "blogcreate",
    component: Blogcreate,
      meta:{requiresAuth:true}
  },

  {
    path: "/blog-update/:id",
    name: "blogupdate",
    component: Blogupdate,
      meta:{requiresAuth:true}
  },

  {
    path: "/Organization",
    name: "Organization",
    component: Organization,
      meta:{requiresAuth:true}
  },
  {
    path: "/Organization-create",
    name: "Organizationcreate",
    component: Organizationcreate,
      meta:{requiresAuth:true}
  },
  {
    path: "/Organization-update/:id",
    name: "Organizationupdate",
    component: Organizationupdate,
      meta:{requiresAuth:true}
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next("/")
    }
  next();
});
export default router;
