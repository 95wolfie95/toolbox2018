<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="nav-link"><a>Home</a></nuxt-link>
        <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
      </ul>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <app-quote class="about">
              <p>Man has this unique ability to create limitations of his abilities.</p>
              <p>Unfortunately, the more self-aware we become, the more we focus on our weaknesses and therefore start limiting our ambitions.</p>
              <p>We convince ourselves that there are things beyond our reach and we should not pursue difficult tasks or else we would fail and feel miserable.</p>
              <p>Break all these mental shackles today as they are all lies we tell ourselves. Work on your dreams today no matter how delayed you are; you will be successful only if you believe so.</p>
          </app-quote>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Quote from "@/components/Quote/quote";

export default {
  components: {
    Logo,
    appQuote: Quote
  }
};
</script>

<style>

.about {
    text-align: justify;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #022d30;
  height: 4.5rem;
}

.main-nav {
  height: 100%;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
}

.nav-link a {
  display: block;
  text-decoration: none;
  color: white;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: #06c4d1;
}

.nav-link.nuxt-link-exact-active {
  border-bottom: 3px solid #06c4d1;
}
</style>
