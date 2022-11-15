<template>
  <div>
    <CustomNavbar />
    <section id="accomodation">
      <div class="container-fluid my-5">
        <div class="container">
          <div class="row">
            <CardAccomodation
              v-for="accomodation in accomodations"
              :key="accomodation.id"
              :accomodation="accomodation"
            />
          </div>
        </div>
      </div>
    </section>
    <PaginationButton />
  </div>
</template>

<script>
import CustomNavbar from "../components/CustomNavigationBar.vue";
import CardAccomodation from "../components/CardAccomodation.vue";
import { mapState, mapActions } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";
import PaginationButton from "../components/PaginationButton.vue";

export default {
  name: "HomePage",
  components: {
    CustomNavbar,
    CardAccomodation,
    PaginationButton,
  },
  computed: {
    ...mapState(useAccomodationStore, ["accomodations"]),
  },
  methods: {
    ...mapActions(useAccomodationStore, ["handleGetAccomodation"]),
  },
  created() {
    this.handleGetAccomodation();
  },
};
</script>

<style>
</style>
