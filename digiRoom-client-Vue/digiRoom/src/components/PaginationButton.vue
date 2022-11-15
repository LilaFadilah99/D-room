<template>
  <section class="text-center mt-3">
    <div class="btn-group me-2" role="group" aria-label="First group">
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="handleChangePage(page - 1, 'previous')"
      >
        Previous
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="handleChangePage(buttonNumber)"
      >
        {{ buttonNumber }}
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="handleChangePage(buttonNumber + 1)"
      >
        {{ buttonNumber + 1 }}
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="handleChangePage(buttonNumber + 2)"
      >
        {{ buttonNumber + 2 }}
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="handleChangePage(page + 1, 'next')"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";
export default {
  name: "PaginationButton",
  data() {
    return {
      buttonNumber: 1,
    };
  },
  computed: {
    ...mapState(useAccomodationStore, ["page", "totalPage"]),
  },
  methods: {
    ...mapActions(useAccomodationStore, ["handleGetAccomodation"]),
    handleChangePage(pageToNext, buttonIdentity) {
      this.handleGetAccomodation(pageToNext);
      if (buttonIdentity === "previous") {
        this.buttonNumber--;
      } else if (buttonIdentity === "next") {
        this.buttonNumber++;
      }
    },
  },
  created() {
    this.handleGetAccomodation();
  },
};
</script>

<style>
</style>