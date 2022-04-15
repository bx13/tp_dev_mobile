<template>
  <p>
    <a class="navbar-item" :href="'/'">
      Retourner à la page précédente
    </a>
  </p>
  <div v-if="event !== null" class="card card-event" :class="{ 'event-opened': isOpen, 'event-closed': !isOpen}">
    <div class="card-image img-d" :style="{ cursor: 'true' ? 'pointer': ''}">
      <figure class="image is-4by3 img-d">
        <img class="img-d"
            :src="event.fields.media_url"
            alt="Placeholder image"
        />
      </figure>


    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ event.fields.nom }}</p>
          <p class="subtitle is-6">{{ event.fields.description }}</p>
        </div>
      </div>
      <ul class="timeline">
        <li><span class="badge">Date : {{ event.fields.date }}</span></li>
        <li><span class="badge">heure_debut : {{ event.fields.heure_debut }}</span></li>
        <li><span class="badge">lieu : {{ event.fields.lieu }}</span></li>
        <li><span class="badge">Adresse : {{ event.fields.adresse +" "+ event.fields.code_postal +" "+event.fields.ville}}</span></li>
        <li><span class="badge">Emetteur : {{ event.fields.emetteur }}</span></li>
        <li><span class="badge">gratuit : {{ event.fields.gratuit }}</span></li>
        <li><span class="badge">Precisions tarifs : {{ event.fields.precisions_tarifs }}</span></li>
        <li><span class="badge">Annulé : {{ event.fields.annule }}</span></li>
        <li><span class="badge">Reporté : {{ event.fields.reporte }}</span></li>
        <li><span class="badge">Complet : {{ event.fields.complet }}</span></li>
        <li><span class="badge">Accueil les enfants : {{ event.fields.accueil_enfant }}</span></li>
        <li><span class="badge">Carte blanche : {{ event.fields.carte_blanche }}</span></li>
        <li><span class="badge">Site web : {{ event.fields.url_site }}</span></li>
      </ul>
      <div class="favoris" @click="updateFavoris()">
          <i :class="{'press': isFavoris}"></i>
        </div>
        <button :class="{ 'btn-share': true}" @click="share">
          Partagez
        </button>
    </div>

  </div>


</template>

<script>

import axios from "axios";
import { Storage } from '@capacitor/storage';
import { Share } from '@capacitor/share';

export default {
  name: "EventDetails",
  props: {
    eventId: String,
  },
  components: {
  },
  data() {

    return {
      nexteventId: 1,
      event: null,
      favoris:false
    };
  },
  async mounted() {
    this.getFavoris();
  axios
    .get(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier&facet=heure_debut&refine.rubrique=Sport&refine.recordid="+this.eventId
    )
    .then((response) => {
      this.event = response.data.records[0];
      console.log(this.event);
    })
    .catch((error) => {
      console.log(error);
    });
  
  

  },
  computed : {
    isFavoris() {
      return this.favoris ==="oui"
    },
  },
  methods : {
    async updateFavoris() {
      this.favoris = (this.favoris ==="oui")?"non":"oui";
      await Storage.set({
          key: this.eventId+'_favoris_'+localStorage.getItem("email"),
          value: this.favoris,
        });
      console.log(this.favoris);
      
    },
    async saveFavoris() {
        await Storage.set({
          key: this.eventId+'_favoris_'+localStorage.getItem("email"),
          value: this.favoris,
        });
    },
    async getFavoris() {
        const { value } = await Storage.get({ key: this.eventId+'_favoris_'+localStorage.getItem("email") });
        this.favoris = value;
        console.log(this.favoris);
    },
    async share() {
      await Share.share({
        title: "Nantes-Sport",
        text: this.event.fields.nom,
        url: this.event.fields.url_site,
      });
    }
  },

};
</script>
<style>
.img-d {
  width: 260px;
  height: 260px;
  margin: auto;
  border-radius: 30px;
  margin-top: 10px;
}
ul.timeline li
{
  position: relative;
   height: 2em;
  color: #888;
}

ul.timeline li:before
{
    content: "";
    display: inline-block;
    height: 3em;
    width: 1px;
    background: #aaaa;
    margin: 0;
    padding: 0;
    position: absolute;
    left: -11px;
    top: -0.4em;
    z-index: -1;
}


.badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    color: #fff;
    background-color: #1d1f22;
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
    font-weight: 400 !important;
}


i {
  cursor:pointer;
  padding:10px 12px 8px;
  background:#fff;
  border-radius:50%;
  display:inline-block;
  margin:0 0 15px;
  color:#aaa;
  transition:.2s;
}

i:hover {
  color:#666;
}

i:before {
  font-family:fontawesome;
  content:'\f004';
  font-style:normal;
}

i.press {
  animation: size .4s;
  color:#e23b3b;
}




</style>