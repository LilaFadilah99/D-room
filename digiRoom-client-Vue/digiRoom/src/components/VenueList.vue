<template>
  <div>
    <p class="fw-bold mt-3">{{ dataVenue.name_v2 }}</p>
    <a :href="dataVenue.url">Check venue</a>
  </div>
</template>

<script>
export default {
  name: "VenueList",
  props: ["dataVenue"],
};
</script>

<style>
</style>