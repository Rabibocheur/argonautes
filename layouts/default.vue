<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
      <Snackbar />
    </v-main>
    <br /><br />
    <br /><br />
    <v-footer color="#f76c6c" class="d-flex align-center justify-center pa-5">
      Réalisé par Jason en Anthestérion de l'an 515 avant JC
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
