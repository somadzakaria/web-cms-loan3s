<template>
  <div>
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="/loan"
      >
        <div
          class="sidebar-brand-text"
          style="
            color: #ffeb3b;
            text-transform: capitalize;
            font-family: 'Poppins';
            font-weight: bold;
            font-size: 12px;
          "
        >
          Bakti Fajar Idaman
        </div>
      </a>

      <!-- Divider -->

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">
        <h6
          class="font-weight-bold text-white"
          style="
            font-size: 11px;
            font-family: 'Poppins';
            text-transform: capitalize !important;
          "
        >
          Main Menu
        </h6>
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <!-- Nav Item - Charts -->
      <li class="nav-item mt-2">
        <router-link to="/loan">
          <a class="nav-link" href="charts.html"> <span>Loan Admin</span></a>
        </router-link>
      </li>
      <li class="nav-item mt-2">
        <router-link to="HCBP">
          <a class="nav-link" href="charts.html"> <span>HC BP</span></a>
        </router-link>
      </li>
      <li class="nav-item mt-2">
        <router-link to="/HCComben">
          <a class="nav-link" href="charts.html">
            <span
              >HC Comben <br />
              Recommendation</span
            ></a
          >
        </router-link>
      </li>
      <li class="nav-item mt-2">
        <router-link to="/HCCombenupdate">
          <a class="nav-link" href="charts.html">
            <span>HC Comben Update</span></a
          >
        </router-link>
      </li>
      <li class="nav-item mt-2">
        <router-link to="/Approval">
          <a class="nav-link" href="charts.html">
            <span>Approval</span></a
          >
        </router-link>
      </li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <span>Report</span>
        </a>
        <div
          id="collapsePages"
          class="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link to="Summary">
              <a class="collapse-item" href="login.html">Summary</a>
            </router-link>
            <router-link to="Reportdetail">
              <a class="collapse-item" href="register.html">Detail</a>
            </router-link>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages1"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <span>Settings</span>
        </a>
        <div
          id="collapsePages1"
          class="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link to="Product">
              <a class="collapse-item" href="login.html"
                >Product</a
              ></router-link
            >
            <router-link to="GeneralSetting">
              <a class="collapse-item" href="register.html"
                >General Setting</a
              ></router-link
            >
            <router-link to="Promotion">
              <a class="collapse-item" href="register.html"
                >Promotion</a
              ></router-link
            >
            <router-link to="blog">
              <a class="collapse-item" href="register.html"
                >Blog</a
              ></router-link
            >
            <router-link to="Organization">
              <a class="collapse-item" href="register.html"
                >Organization Chart</a
              ></router-link
            >
            <router-link to="Faq">
              <a class="collapse-item" href="register.html"
                >FAQ</a
              ></router-link
            >
          </div>
        </div>
      </li>
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>