<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
         Nous contactez :
        </h1>
        
        

        <p class="search-price text-center titre-liste-suggestion"> Vos avis et critiques sont les bienvenues ;) </p>
        <div class="form">
          <div>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="user_name" required/>
          </div>
          <div>
            <label for="mail">E-mail :</label>
            <input type="email" id="mail" name="user_email" required/>
          </div>
          <div>
            <label for="tel">Téléphone :</label>
            <input type="text" id="tel" name="user_tel" />
          </div>
          <div>
            <label for="sujet">Sujet :</label>
            <input type="email" id="sujet" name="sujet" required/>
          </div>
          <div>
            <label for="msg">Message :</label>
            <textarea id="msg" name="user_message" required></textarea>
          </div>

        </div>
        <div class="link-button-wrapper">
          <button type="submit" class="btn submit-btn"><h1>Envoyer </h1></button>

        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: "AboutPage",
  props: {
    message: String,
  },
  data() {

    return {
      info_coach: null,
    }
  },

  mounted() {

  }
};
</script>
<style scoped>
img {
  height: auto;
  max-width: 250px;
  border-radius: 20px;
  padding-bottom: 10px;
}
.btn-share {
  background: #d3839d;
  border-radius: 20px;
  color: white;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  border: none;
  padding: 4px 14px 7px 14px;
  margin: 10px 0;
}
.subtitle2 {
  font-weight: 400;
  font-size: 18px;
}
.subtitle3 {
  font-weight: 900;
  font-size: 22px;
  padding: 13px 0;
}
.form {
  /* Uniquement centrer le formulaire sur la page */
  margin: 0 auto;
  width: 500px;
  /* Encadré pour voir les limites du formulaire */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

form div + div {
  margin-top: 1em;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  width: 90px;
  text-align: left;
}

input, textarea {
  font: 1em sans-serif;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #999;
  border-radius: 8px;
  margin: 8px 0px 0px 5px;
  padding: 4px 8px;
}

input:focus, textarea:focus {
  /* Pour souligner légèrement les éléments actifs */
  border-color: #000;
}

textarea {
  /* Pour aligner les champs texte multi‑ligne avec leur étiquette */
  vertical-align: top;

  /* Pour donner assez de place pour écrire du texte */
  height: 5em;
}

.button {
  /* Pour placer le bouton à la même position que les champs texte */
  padding-left: 90px; /* même taille que les étiquettes */
}

button {
  /* Cette marge supplémentaire représente grosso modo le même espace que celui
     entre les étiquettes et les champs texte */
  margin-left: .5em;
}
.notification {
  display : block;
  background : #669d66;
  padding : 9px;
  border-radius: 20px;
  color : white;
}
</style>