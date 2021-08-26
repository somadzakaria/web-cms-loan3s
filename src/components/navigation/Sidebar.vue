<template>
  <div v-if="menus.length > 0">
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="/Summary"
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
      <li class="nav-item mt-2" v-for="menu in menus" :key="menu.id">
        <router-link v-if="menu.id_induk == null" :to="menu.url">
          <a class="nav-link"
            ><span>{{ menu.nama }}</span></a
          >
        </router-link>
        <router-link
          v-if="menu.nama == 'Data Setting'"
          :to="menu.url == null ? '#' : '#'"
        >
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <span>{{ menu.nama }}</span>
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <router-link v-for="menu in menus" :key="menu.id" :to="menu.url">
                <a
                  v-if="menu.id_induk == 13"
                  class="collapse-item"
                  href="login.html"
                  >{{ menu.nama }}</a
                >
              </router-link>
            </div>
          </div>
        </router-link>
        <router-link
          v-if="menu.nama == 'Report'"
          :to="menu.url == null ? '#' : '#'"
        >
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <span>{{ menu.nama }}</span>
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <router-link v-for="menu in menus" :key="menu.id" :to="menu.url">
                <a v-if="menu.id_induk == 10" class="collapse-item">{{
                  menu.nama
                }}</a>
              </router-link>
            </div>
          </div>
        </router-link>
        <router-link
          v-if="menu.nama == 'Proses Pencairan (Funding)'"
          :to="menu.url == null ? '#' : '#'"
        >
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages3"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <span>{{ menu.nama }}</span>
          </a>
          <div
            id="collapsePages3"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <router-link v-for="menu in menus" :key="menu.id" :to="menu.url">
                <a v-if="menu.id_induk == 6" class="collapse-item">{{
                  menu.nama
                }}</a>
              </router-link>
            </div>
          </div>
        </router-link>
      </li>
      <!-- <li class="nav-item mt-2">
        <router-link to="/HCBP">
          <a class="nav-link" href="charts.html"
            ><span>Pengajuan Pinjaman</span></a
          >
        </router-link>
      </li>
      <li class="nav-item mt-2">
        <router-link>
          <a class="nav-link" href="charts.html">
            <span>Rekomendasi Pinjaman</span></a
          >
        </router-link>
      </li>
      <li class="nav-item mt-2">
        <router-link to="/HCCombenupdate">
          <a class="nav-link" href="charts.html">
            <span>Pengikian Data Karyawan</span></a
          >
        </router-link>
      </li>
      <li class="nav-item mt-2">
        <router-link to="/Approval">
          <a class="nav-link" href="charts.html"
            ><span>Persetujuan Pinjaman</span></a
          >
        </router-link>
      </li> -->

      <!-- <li class="nav-item">
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
            <router-link to="/Product">
              <a class="collapse-item" href="#">Product</a></router-link
            >
            <router-link to="/GeneralSetting">
              <a class="collapse-item" href="#">General Setting</a></router-link
            >
            <router-link to="/Promotion">
              <a class="collapse-item" href="#">Promotion</a></router-link
            >
            <router-link to="/blog">
              <a class="collapse-item" href="#">Blog</a></router-link
            >
            <router-link to="/Organization">
              <a class="collapse-item" href="#"
                >Organization Chart</a
              ></router-link
            >
            <router-link to="/Faq">
              <a class="collapse-item" href="#">FAQ</a></router-link
            >
          </div>
        </div>
      </li> -->
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>
<script>
import Menuservice from "../../services/menu.service";
export default {
  computed: {
    menus() {
      return this.$store.getters.getmenu;
    },
  },
  created() {
    Menuservice.getMenu(localStorage.getItem("id"))
      .then((response) => {
        this.$store.commit("SET_MENU", response.data);
        response.data;
      })
      .catch((error) => {
        console.log("Ditemukan", error.response);
      });
  },
};
</script>
