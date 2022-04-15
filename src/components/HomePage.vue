<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          Restez informer des derniers événements sportifs de Nantes  !
        </h2>
      </div>
    </div>
  </section>
  <section>
    <EventList favoris="non" />
  </section>
</template>

<script>
import EventList from "./EventList.vue";


export default {
  name: "HomePage",
  components: {
    EventList,
  },
  data() {

    return {
      title: "Nantes-Sport",
    }
  }
};
</script>
