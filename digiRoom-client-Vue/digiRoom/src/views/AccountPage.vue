<template>
  <div>
    <CustomNavbar />
    <!-- account -->
    <section>
      <div class="container-fluid my-5">
        <div class="container">
          <h2 class="fw-bolder">Akun</h2>
          <p class="fw-bold">
            Dila Fadilah,
            <span class="fw-normal">lilafadila64@gmail.com</span> .
            <a href="" class="text-dark">Buka Profil</a>
          </p>
          <!-- card -->
          <div class="row my-5">
            <div class="col-4">
              <div
                class="rounded-4 information py-3 px-5 me-2"
                style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <h3 class="text-secondary">
                  <i class="fa-solid fa-address-card"></i>
                </h3>
                <p class="fw-bold">Informasi Pribadi</p>
                <p class="p-size text-secondary">
                  Berikan detail pribadi dan cara kami menghubungi Anda
                </p>
              </div>
            </div>
            <div class="col-4">
              <div
                class="rounded-4 information py-3 px-5 me-2"
                style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <h3 class="text-secondary">
                  <i class="fa-solid fa-heart-circle-check"></i>
                </h3>
                <p class="fw-bold">Koleksi saya</p>
                <p class="p-size text-secondary">
                  Periksa daftar koleksi anda dan segera lakukan pemesanan
                </p>
              </div>
            </div>
            <div class="col-4">
              <div
                class="rounded-4 information py-3 px-5"
                style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              >
                <h3 class="text-secondary">
                  <i class="fa-solid fa-clock-rotate-left"></i>
                </h3>
                <p class="fw-bold">History saya</p>
                <p class="p-size text-secondary">
                  Tinjau mengenai aktifitas anda di D-Room
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end account -->
  </div>
</template>

<script>
import CustomNavbar from "../components/CustomNavigationBar.vue";
export default {
  name: "AccountPage",
  components: {
    CustomNavbar,
  },
};
</script>

<style>
</style>