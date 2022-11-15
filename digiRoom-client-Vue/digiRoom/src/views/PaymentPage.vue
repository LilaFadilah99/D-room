<template>
  <div>
    <CustomNavbar />
    <!-- payment detail -->
    <section id="payment">
      <div class="container-fluid my-5">
        <div class="container">
          <h3 class="fw-bold">
            <span
              class="me-3 back-button"
              style="font-size: 15px; padding: 20px"
              ><i class="fa-solid fa-chevron-left"></i></span
            >&nbsp; Konfirmasikan dan bayar • D-Room
          </h3>
          <!-- pembungkus utama -->
          <div class="col-12">
            <div class="row">
              <!------------------------- left----------------------------- -->
              <div class="col-6">
                <!-- ------------promo------------- -->
                <div class="row my-5">
                  <div class="col border rounded-4 p-3">
                    <div class="row">
                      <div class="col-10">
                        <p class="fw-bold">Penawaran harga terbaik</p>
                        <p>
                          Tanggal Anda lebih murah Rp.100.000 dari harga per
                          malam rata-rata selama 3 bulan terakhir.
                        </p>
                      </div>
                      <div class="col-2">
                        <h2>
                          <i
                            class="fa-solid fa-tags"
                            style="color: palevioletred"
                          ></i>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ----------------detail pesanan----- -->
                <div class="row">
                  <h4 class="fw-bold">Perjalanan Anda</h4>
                  <br />
                  <p class="fw-bold">Tanggal</p>
                  <p>{{ dataBooking.checkin }} - {{ dataBooking.checkout }}</p>
                </div>
                <hr />
                <div class="d-grid col-12 mt-md-4 mt-4">
                  <button
                    @click="handlePaymentBtn()"
                    id="pay-button"
                    type="submit"
                    class="btn text-white py-2"
                    style="background-color: #ee2656"
                  >
                    Konfirmasikan dan bayar
                  </button>
                </div>
              </div>
              <!------------------------------- right----------------------- -->
              <div class="col-5 offset-1 my-5">
                <div
                  class="row p-3 border"
                  style="
                    border-radius: 15px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
                      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                  "
                >
                  <!-- pict -->
                  <div class="row pt-3">
                    <div class="col-4">
                      <img
                        src="https://a0.muscache.com/im/pictures/61e15b47-a563-4348-b891-5106bc4ebb02.jpg?aki_policy=large
                          "
                        alt=""
                        class="img-fluid rounded-3"
                        style="width: 200px; height: 80px; object-fit: cover"
                      />
                    </div>
                    <div class="col-8">
                      <p class="text-content mb-0">
                        {{ dataBooking.Accommodation?.name }}
                      </p>
                      <p class="text-content text-secondary">
                        {{ dataBooking.Accommodation?.location }}
                      </p>
                      <p class="p-font-size text-secondary">
                        <i class="fa-solid fa-star"></i
                        ><span class="text-dark fw-bold">4,38</span>(120
                        ulasan)&nbsp; . &nbsp;
                        <span
                          ><i class="fa-solid fa-medal"></i> Hos Teladan</span
                        >
                      </p>
                    </div>
                  </div>
                  <hr />
                  <h5 class="py-3">
                    Pesanan dilindungi oleh
                    <span class="fw-bolder"
                      ><span style="color: #ee2656">D-</span>cover</span
                    >
                  </h5>
                  <hr />
                  <!-- biaya tambahan -->
                  <div class="row my-3 p-size">
                    <h4 class="fw-bold mb-3">Perincian Harga</h4>
                    <div class="row">
                      <div class="col-6">
                        <p>
                          {{
                            dataBooking.Accommodation?.price.toLocaleString(
                              "id-ID",
                              {
                                style: "currency",
                                currency: "IDR",
                              }
                            )
                          }}
                          X
                          {{ dataBooking.totalNight }}
                        </p>
                      </div>
                      <div class="col-6 text-end">
                        <p>
                          {{
                            dataBooking.Accommodation?.price *
                            dataBooking.totalNight
                          }}
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <p>Biaya layanan</p>
                      </div>
                      <div class="col-6 text-end">
                        <p>
                          {{
                            dataBooking.Accommodation?.serviceCharge.toLocaleString(
                              "id-ID",
                              {
                                style: "currency",
                                currency: "IDR",
                              }
                            )
                          }}
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <p>Biaya kebersihan</p>
                      </div>
                      <div class="col-6 text-end">
                        <p>
                          {{
                            dataBooking.Accommodation?.cleaningFee.toLocaleString(
                              "id-ID",
                              {
                                style: "currency",
                                currency: "IDR",
                              }
                            )
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-6">
                      <h5 class="fw-bold">Total</h5>
                    </div>
                    <div class="col-6 text-end">
                      <p class="fw-bold">
                        {{
                          dataBooking.totalPrice?.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end payment detail -->
  </div>
</template>

<script>
import CustomNavbar from "../components/CustomNavigationBar.vue";
import { mapActions, mapState } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";
export default {
  name: "PaymentPage",
  components: {
    CustomNavbar,
  },
  computed: {
    ...mapState(useAccomodationStore, ["dataBooking", "transactionToken"]),
    snap() {
      return window.snap;
    },
  },
  methods: {
    ...mapActions(useAccomodationStore, [
      "handleGetBookingRoom",
      "handlePayment",
    ]),
    handlePaymentBtn() {
      this.snap.pay(this.transactionToken);
    },
  },
  created() {
    this.handleGetBookingRoom(this.$route.params.id);
  },
  mounted() {
    this.handlePayment(this.$route.params.id);
  },
};
</script>

<style>
</style>