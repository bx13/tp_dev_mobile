<template>
  <div class="main-container">
    <div>
      <div class="box-container">
        <img class="img_login" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVDHYfVhbk6hqIV8XZeMZkowfoCZ9oF2Eug&usqp=CAU" alt="">

        <div class="login-choice"><span> Se Connecter avec</span></div>
        <div class="signup-buttons">
          <div id="fb-root"></div>
          <button class="google-signup"  @click="LoginGoogle()">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
            Google
          </button>
        </div>
        <div class="login-choice"></div>
        
        <div class="form-fields">
          <button class="signIn" name="commit" type="submit" @click="getData">
            Accéder à mes favoris
          </button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import router from "../router";

export default {
  name: "Login",

  components: {
  },
  data() {

    return {
      clientId: '843497641662-b0ofu3en642agu0v6db280cmib936mrl.apps.googleusercontent.com',
    };
  },

  methods: {
    LoginGoogle() {
      document.getElementById('authorize_button').click();
      setTimeout(function(){ router.push({ path: '/favoris' }); }, 5000);

      console.log('login');
    },
    getData() {
      router.push({ path: '/favoris' });
    },
  }
};
</script>
<style scoped>
.img_login {
  max-width: 175px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background: #0069ff;
}
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
/* Style the buttons inside the tab */
.tab a {
  background-color: inherit;
  float: right;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  text-decoration: none;
  border: 1px solid;
}
/* Change background color of buttons on hover */
.tab a:hover {
  background-color: #ddd;
}
/* Create an active/current tablink class */
.tab a.active {
  background-color: #ccc;
}
/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.loginsuccess-container {
  padding: 20px;
  margin: 0 auto;
  width: 80%;
  box-shadow: beige;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  word-break: break-all;
}
.main-container {
  margin-top: 30px;
}
.box-container {
  padding: 20px;
  margin: 0 auto 30px;
  width: 65%;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
}
.heading {
  text-align: center;
  font-weight: 300;
  color: #444;
  margin: 0 auto 45px;
  font-size: 35px;
  line-height: 38px;
  text-transform: none;
  letter-spacing: 0;
}
.form-fields, .form-fields button {
  width: 100%;
  margin: 5px 0;
  line-height: 28px;
  border-radius: 20px;
}
.form-fields button {
  width: 80%;
  margin: 10px;
}
.form-fields input {
  width: 90%;
  line-height: 40px;
  border: 1px solid #f1f1f1;
  background: #fff;
  padding: 0 12px;
  font-size: 14px;
  border-radius: 20px;
}
.signIn {
  padding: 10px 32px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  background: #005572;
  text-align: center;
  cursor: pointer;
  height: auto;
  -webkit-appearance: none;
}
.createaccount {
  padding: 15px;
  background-color: #0069ff;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  height: 48px;
  line-height: 48px;
  padding: 0 32px;
  text-align: center;
  border-radius: 5px;
}
.center {
  text-align: center
}
.login-choice span {
  color: #5b6987;
  display: -ms-grid;
  display: grid;
  font-size: 16px;
  width: 100%;
  line-height: 40px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  -ms-grid-columns: minmax(20px,1fr) auto minmax(20px,1fr);
  grid-template-columns: minmax(20px,1fr) auto minmax(20px,1fr);
  grid-gap: 19px;
}
.login-choice span:after, .login-choice span:before {
  content: "";
  border-top: 1px solid #e5e8ed;
}
.signup-buttons {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 12px;
}
.facebook-signup, .google-signup {
  color: #031b4e;
  background: #f2f8ff;
  border: 1px solid rgba(0,105,255,.2);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  display: inline-block;
  margin-top: 0;
  width: 47.5%;
  padding: 15px;
  text-align: center;
  position: inherit;
}
.signup-buttons a {
  vertical-align: middle;
  text-decoration: none;
  border-radius: 20px;
}
.signup-buttons svg {
  left: 16px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.footer, .footer a {
  text-align: center;
  color: #fff
}

</style>
