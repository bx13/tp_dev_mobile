<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Suivi de mes événements favoris
        </h1>
        
        <EventList favoris="oui" />
      </div>
    </div>
  </section>
</template>

<script>
import EventList from "./EventList.vue";
import router from "../router";
export default {
  name: "FavorisPage",
  components: {EventList},
  props: {
    message: String,
  },
  beforeCreate() {
    if(localStorage.getItem("isSignedIn")!== "true"){
      router.push({ path: '/login' })
    }

  },
};
</script>
