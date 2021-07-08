<template>
  <div id="app">
    <Header />
    <Navbar />
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/formulaire">Et moi dans tout ça ?</router-link> |
      <router-link to="/about">En savoir plus</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    'Navbar': () => import('@/components/Navbar'),
    'Header': () => import('@/components/Header'),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
