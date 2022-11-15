<template>
  <div
    class="col-4 offset-1 border p-4"
    style="
      height: 540px;
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    "
  >
    <div class="row">
      <div class="col-6">
        <h5 class="fw-bold">
          {{
            detailAccomodation.price?.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })
          }}
        </h5>
        <p class="p-size text-secondary">Per malam</p>
      </div>
      <div class="col-6">
        <p>
          <i class="fa-solid fa-star"></i>&nbsp; 4.9 .
          <span class="p-size"
            ><a href="" class="text-secondary">50 ulasan</a></span
          >
        </p>
      </div>
    </div>
    <!-- check in -->
    <div class="row justify-content-center">
      <div class="col-11 border rounded" style="border-color: black">
        <form>
          <div class="row mt-2">
            <div class="col-6 p-sizing border-end pb-4">
              <label for="exampleInputPassword1" class="form-label fw-bold"
                >CHECK-IN</label
              >
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
                v-model="checkin"
              />
            </div>
            <div class="col-6 p-sizing">
              <label for="exampleInputPassword1" class="form-label fw-bold"
                >CHECK-OUT</label
              >
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
                v-model="checkout"
              />
            </div>
          </div>
        </form>

        <div class="row border-top pt-2">
          <div class="col">
            <p class="fw-bold p-size">1 TAMU</p>
          </div>
        </div>
      </div>
      <div class="d-grid col-12 mt-md-4 mt-4">
        <button
          @click="handlePaymentBtn(detailAccomodation.id)"
          type="submit"
          class="btn text-white"
          style="background-color: #ee2656"
        >
          Pesan
        </button>
        <!-- <button
          @click="handlePaymentBtn"
          id="pay-button"
          type="submit"
          class="btn text-white"
          style="background-color: #ee2656"
        >
          Pesan
        </button> -->
      </div>
    </div>
    <!-- biaya tambahan -->
    <div class="row my-3 p-size">
      <p class="text-center text-secondary">Anda belum dikenakan biaya</p>
      <div class="row">
        <div class="col-6">
          <p>
            {{
              detailAccomodation.price?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
            }}
            X {{ estimatePrice }}
          </p>
        </div>
        <div class="col-6 text-end">
          <p>Rp.900.000</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <p>Biaya layanan</p>
        </div>
        <div class="col-6 text-end">
          <p>
            {{
              detailAccomodation.serviceCharge?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
            }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <p>Biaya Kebersihan</p>
        </div>
        <div class="col-6 text-end">
          <p>
            {{
              detailAccomodation.cleaningFee?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
            }}
          </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6">
          <h6 class="fw-bold">Total Biaya</h6>
        </div>
        <div class="col-6 text-end">
          <h6 class="fw-bold">
            {{
              totalPrice?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
            }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";
import router from "../router/index.js";
export default {
  name: "CheckinForm",
  data() {
    return {
      totalPriceBookRoom: 0,
    };
  },
  computed: {
    ...mapState(useAccomodationStore, [
      "detailAccomodation",
      "roomPrice",
      "serviceCharge",
      "cleaningFee",
      "transactionToken",
    ]),
    ...mapWritableState(useAccomodationStore, ["checkin", "checkout"]),
    snap() {
      return window.snap;
    },
    estimatePrice() {
      let check_in = this.checkin;
      let check_out = this.checkout;
      return Math.ceil(
        (new Date(check_out).getTime() - new Date(check_in).getTime()) /
          (1000 * 60 * 60 * 24) || 1
      );
    },
    totalPrice() {
      let allPrice =
        this.roomPrice * this.estimatePrice +
        this.serviceCharge +
        this.cleaningFee;
      return allPrice;
    },
  },
  methods: {
    ...mapActions(useAccomodationStore, [
      "handleShowDetail",
      "handlePayment",
      "handleBookingRoom",
    ]),
    changeToPaymentPage(id) {
      router.push(`/payment/${id}`);
      console.log(id);
    },
    handlePaymentBtn(id) {
      // this.snap.pay(this.transactionToken);
      this.handleBookingRoom(id);
    },
  },
  created() {
    this.handleShowDetail(this.$route.params.id);
    // this.handlePayment();
  },
  mounted() {
    this.handlePayment(this.$route.params.id);
  },
};
</script>

<style>
</style>