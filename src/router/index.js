import Vue from "vue";
import VueRouter from "vue-router";
import Loan from "../views/Loan.vue";
import HCBP from "../views/HCBP.vue";
import HCComben from "../views/HCComben.vue";
import HCCombenupdate from "../views/HCCombenupdate.vue";
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
import Notfound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "*",
    component: Notfound,
  },
  {
    path: "/auth",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "Loan",
    component: Loan,
  },
  {
    path: "/HCBP",
    name: "HCBP",
    component: HCBP,
  },
  {
    path: "/Faq",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/Faq-create",
    name: "Faqcreate",
    component: Faqcreate,
  },
  {
    path: "/Faq-update/:id",
    name: "Faqupdate",
    component: Faqupdate,
  },
  {
    path: "/HCComben",
    name: "HCComben",
    component: HCComben,
  },
  {
    path: "/HCCombenupdate",
    name: "HCCombenupdate",
    component: HCCombenupdate,
  },
  {
    path: "/Product",
    name: "Product",
    component: Product,
  },
  {
    path: "/Product-create",
    name: "Productcreate",
    component: Productcreate,
  },
  {
    path: "/Product-update/:id",
    name: "Productupdate",
    component: Productupdate,
  },
  {
    path: "/GeneralSetting",
    name: "GeneralSetting",
    component: General,
  },
  {
    path: "/General-create",
    name: "Generalcreate",
    component:Generalcreate,
  },{
    path: "/General-update/:id",
    name: "Generaltupdate",
    component: Generalupdate,
  },
  {
    path: "/Promotion",
    name: "Promotion",
    component: Promotion,
  },
  {
    path: "/Promotion-create",
    name: "Promotioncreate",
    component:Promotioncreate,
  },{
    path: "/Promotion-update/:id",
    name: "Promotiontupdate",
    component: Promotionupdate,
  },
  {
    path: "/Summary",
    name: "Summary",
    component: Summary,
  },
  {
    path: "/Reportdetail",
    name: "Reportdetail",
    component: Reportdetail,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
   
  },
  {
    path: "/blog-create",
    name: "blogcreate",
    component: Blogcreate,
  },
 
  {
    path: "/blog-update/:id",
    name: "blogupdate",
    component: Blogupdate,
  },
 
  {
    path: "/Organization",
    name: "Organization",
    component: Organization,
  },
  {
    path: "/Organization-create",
    name: "Organizationcreate",
    component: Organizationcreate,
  },
  {
    path: "/Organization-update/:id",
    name: "Organizationupdate",
    component: Organizationupdate,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next("/");
    } else {
      next();
    }
  } else next();
});
export default router;
