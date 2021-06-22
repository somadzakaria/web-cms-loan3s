<template>
  <div class="home">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <Sidebar />
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <Navbar />
          <!-- Begin Page Content -->
          <div class="container-fluid">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <div class="row">
                  <div class="col-lg-6 text-left">
                    <h6
                      style="
                        font-family: 'Poppins';
                        font-size: 14px;
                        font-weight: bold;
                      "
                    >
                   Create Product
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
          <form role="form" @submit.prevent="submit($event)">
         <div class="form">
         <div class="row">
          <div class="col-lg-12 text-left">
                  <label for="NIK" style="text-align: left">Product Name</label>
                  <input type="text" id="NIK" class="form-control" v-model="product.ProductName" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Product Description</label>
                  <input type="text" id="NIK" class="form-control" v-model="product.ProductDescription" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">FinancePurpose</label>
                  <input type="text" id="NIK" class="form-control" v-model="product.FinancePurpose" />
                </div>
                     <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tenor From</label>
                  <input type="text" id="NIK" class="form-control" v-model="product.Tenor_From" />
                </div>
                     <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tenor To</label>
                  <input type="text" id="NIK" class="form-control" v-model="product.Tenor_to" />
                </div>
                     <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">EffectiveRate</label>
                  <input type="text" id="NIK" class="form-control" v-model="product.EffectiveRate" />
                </div>

             <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Status</label>
                   <select class="form-control" v-model="product.level">
                    <option value="" disabled>Pilih</option>
                    <option value="1">Active</option>
                    <option value="2">No Active</option>
                  </select>
                </div>
                <div class="col-lg-12 mt-4 text-center">
                  <button class="btn-primary btn-lg text-center" type="submit">Simpan</button>
                </div></div></div>
            </form>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
      
        <!-- Footer -->
        <Footer />
        <!-- End of Footer -->
      </div>

      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>
<script>
import router from "@/router"
import Sidebar from "../navigation/Sidebar.vue";
import Navbar from "../navigation/Navbar.vue";
import Footer from "../navigation/Footer.vue";
import ProductService from "../../services/produk.service";

export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data(){
    return{
      product:{
        ProductName : '',
        ProductDescription : '',
        FinancePurpose : '',
        Tenor_From : '',
        Tenor_to : '',
        EffectiveRate : '',
        isactive : '',
      },
    }
  },
  methods:{
        submit(event){
          event.preventDefault();
          let params = {
          ProductName: this.product.ProductName,
          ProductDescription: this.product.ProductDescription,
          FinancePurpose: this.product.FinancePurpose,
          Tenor_From: this.product.Tenor_From,
          Tenor_to: this.product.Tenor_to,
          EffectiveRate: this.product.EffectiveRate,
          isactive: this.product.isactive,
        }
       ProductService.postTambah(params).then((response)=>
        {
          console.log(response,"Berhasil Di tambahkan")
          router.back();  
        }).catch((error) =>{
             console.log("Gagal Di tambahkan",error.res)
        })
        }
  }
}

</script>
