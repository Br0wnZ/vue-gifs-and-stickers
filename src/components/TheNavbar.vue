<template>
  <nav @click.stop="toggleNavbar()" class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/" @click.stop="toggleNavbar(true)">Gif Routes</router-link>
    <button @click.stop="toggleNavbar()" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': show }">
      <ul class="navbar-nav" @click.stop="toggleNavbar()">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="gifs">Gifs</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="stickers">Stickers</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  methods: {
    toggleNavbar(fromBrand) {
      if (fromBrand) {
        this.show ? this.show = !this.show : ''
        return
      }
      this.show = !this.show
    }
  },
}
</script>

<style scoped>

</style>