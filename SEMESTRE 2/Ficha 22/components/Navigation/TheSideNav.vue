<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop shadow" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <ul class="nav-list">
          <li class="nav-item">option one</li>
          <li class="nav-item">option two</li>
          <li class="nav-item">option three</li>
        </ul>
      </div>
    </transition>
    
    
    <transition name="slide-side">
      <div v-if="!show" class="nav-list" @click="$emit('open')">
          <div v-if="!show" class="sidenav-backdrop" @click="$emit('open')"></div>
      </div>
    </transition>


  </div>

</template>

<script>
export default {
  name: "TheSideNav",
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 2s ease-out;
}

.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
  transform: translateX(-100%);
}
</style>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
    position: fixed;
    top: 72px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}

.shadow {
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: #022d30;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  background-color: rgb(241, 251, 255);
  font-style: italic;
  text-align: center;
  margin: 20px 0;
}

.nav-item a {
  list-style: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-:active {
  color: #41b883;
}
</style>