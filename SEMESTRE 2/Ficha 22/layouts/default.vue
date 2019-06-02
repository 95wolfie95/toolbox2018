<template>
  <div>
    <TheHeader @SideNavToggle="displaySideNav = !displaySideNav"/>
    <TheSideNav :show="displaySideNav" @close="displaySideNav=false" @open="displaySideNav=true"/>
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader';
import TheSideNav from '~/components/Navigation/TheSideNav';

export default {
  components: {
    TheHeader,
    TheSideNav
  },
  data() {
    return {
      displaySideNav: true
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
}

.margin-content{
  margin-top: 4.5rem;
}
</style>
