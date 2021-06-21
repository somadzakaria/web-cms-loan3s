import Vue from "vue";
import VueRouter from "vue-router";
import Loan from "../views/Loan.vue";
import HCBP from "../views/HCBP.vue";
import HCComben from "../views/HCComben.vue";
import HCCombenupdate from "../views/HCCombenupdate.vue";
import Product from "../views/Product.vue";
import Promotion from "../views/Promotion.vue";
import General from "../views/GeneralSetting.vue";
import Summary from "../views/Summary.vue";
import Reportdetail from "../views/Reportdetail.vue";
import Blog from "../views/Blog.vue";
import Organization from "../views/Organization.vue";
import Notfound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "*",
    component: Notfound,
  },
  {
<<<<<<< HEAD
    path: "/Login",
=======
    path: "/auth",
>>>>>>> 7f828623007ff971e6885a341e656b9773c30371
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
<<<<<<< HEAD
    path: "/Loan",
=======
    path: "/",
>>>>>>> 7f828623007ff971e6885a341e656b9773c30371
    name: "Loan",
    component: Loan,
  },
  {
    path: "/HCBP",
    name: "HCBP",
    component: HCBP,
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
    path: "/GeneralSetting",
    name: "GeneralSetting",
    component: General,
  },
  {
    path: "/Promotion",
    name: "Promotion",
    component: Promotion,
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
<<<<<<< HEAD
  },
=======
    props: true,
  },
 
>>>>>>> 7f828623007ff971e6885a341e656b9773c30371
  {
    path: "/Organization",
    name: "Organization",
    component: Organization,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

<<<<<<< HEAD
=======
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
>>>>>>> 7f828623007ff971e6885a341e656b9773c30371
export default router;
