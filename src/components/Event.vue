<template>
  <div class="event">
    <a class="navbar-item" :href="'/event/'+eventId">
    <div class="card card-event">
      <div class="card-image" :style="{ cursor: 'true' ? 'pointer': ''}">
        <figure class="image is-4by3">
          <img
            :src="event.fields.media_url"
            alt="Placeholder image"
          />
        </figure>


      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ event.fields.nom }}</p>
            <p class="subtitle is-6">{{ event.fields.date }}</p>
          </div>
        </div>
        
        <div class="content">
          <div>
            <br/>
            <span class="prix" :class="{'gratuit': isGratuit}">
              <span v-if="isGratuit">gratuit</span>
              <span v-else>Payant</span>
            </span>
          </div>
          
        </div>
      </div>
    </div>
    </a>
  </div>
</template>

<script>

export default {
  name: "Event",
  props: {
      eventId: Number,
      event : Object,
  },
  computed: {
    isGratuit() {
      return this.event.fields.gratuit === "oui";
    }
  },

  
};
</script>

<style scoped>
.event {
  padding: 10px;
}
.card-event {
  border-radius: 25px;
}
.prix {
  padding: 8px;
  border-radius: 14px;
  background: #d67292;
}
.gratuit{
  background: #75c389;
}
.navbar-item img {
  max-height: none;
}
</style>