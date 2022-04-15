<template>

<div class="bloc-favoris" v-if="isFavoris">
          <span class="num-favoris">{{events.length}}</span> <img class ="favoris"
                             src="http://www.idboox.com/wp-content/uploads/2015/11/twitter-favori-coeur-rouge.jpg"
                             alt="Placeholder image"
        />
        </div>
  <div class="columns is-multiline">
    <Event
      v-for="event in events"
      :key="event.recordid"
      class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
      :event-id="event.recordid"
      :event="event"
    />
  </div>
</template>

<script>
import Event from "./Event.vue";
import axios from "axios";
import { Storage } from '@capacitor/storage';

export default {
  name: "EventList",
  props: {
    favoris: String,
  },
  components: {
    Event,
  },
  data() {
    return {
      nextEventId: 1,
      events: new Array(),
    };
  },
  computed: {
    isFavoris() {
      return this.favoris === "oui";
    }
  },
  methods: {
    async filtreEvent(records) {
       for(var i =0; i < records.length; i++ ){
          //console.log(element.recordid);
          const { value } = await Storage.get({ key: records[i].recordid+'_favoris_'+localStorage.getItem("email") });
          if (value === "oui") {
            this.events.push(records[i]);
          }
        }
    }
  },
   mounted() {

  axios
    .get(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&facet=rubrique&refine.rubrique=Sport&rows=100"
    )
    .then((response) => {
      
      
      if (this.favoris == "oui") {
          this.filtreEvent(response.data.records);
      } else {
        this.events = response.data.records;
      }
      console.log(this.events);
    })
    .catch((error) => {
      console.log(error);
    });


  },
};
</script>
<style scoped>
.favoris {
  max-width: 190px;
}
.bloc-favoris {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 14px;
}
.num-favoris {
  font-size: 56px;
  font-weight: 800;
}
</style>