<template>
  <v-container class="d-flex flex-column justify-center align-center">
    <div class="d-flex align-center justify-center">
      <v-img
        max-height="100px"
        max-width="100px"
        src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
      ></v-img>
      <h1 class="ml-5 text-h3">Les argonautes</h1>
    </div>

    <br /><br />
    <br /><br />

    <h2>Ajouter un(e) Argonaute</h2>

    <br /><br />

    <h3 class="font-weight-light">Nom de l'Argonaute</h3>
    <div class="d-flex align-center">
      <v-text-field
        v-model="argonaute"
        placeholder="Charalampos"
        class="mr-3"
        outlined
        dense
        type="text"
        hide-details=""
        clearable
        :rules="[() => !!argonaute || 'Veuillez inserer un argonaute']"
        @keydown.enter="sendArgonaute"
      ></v-text-field>
      <v-btn depressed @click="sendArgonaute">Envoyer</v-btn>
    </div>

    <br /><br />
    <br /><br />

    <h2>Membres de l'équipage</h2>

    <br /><br />

    <v-row align="center" justify="center">
      <v-col
        cols="4"
        v-for="(argonaute, i) in argonautes"
        :key="i"
        style="min-width: 200px"
      >
        <v-chip
          class="ma-2"
          close
          text-color="white"
          @click:close="deleteArgonaute(argonaute.id, i)"
        >
          {{ argonaute.name }}
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Api } from "~/api";
import { mapMutations } from "vuex";

export default {
  name: "IndexPage",
  mounted() {
    this.getArgonautes();
  },
  methods: {
    ...mapMutations([
      "SET_SNACKBAR_STATUS",
      "SET_SNACKBAR",
      "SET_SNACKBAR_COLOR",
    ]),
    getArgonautes() {
      Api.get("/argonautes").then((response) => {
        console.log(response);
        this.argonautes = response.data.argonautes;
      });
    },
    sendArgonaute() {
      if (this.argonaute != null && this.argonaute != "") {
        Api.post("/argonautes", { name: this.argonaute })
          .then((response) => {
            this.argonautes.push(response.data.argonaute);
            console.log(response);
            this.SET_SNACKBAR_STATUS("Agonaute ajouté !");
            this.SET_SNACKBAR(true);
            this.SET_SNACKBAR_COLOR("primary");
          })
          .catch((e) => {
            console.log(e.response.data);
            this.SET_SNACKBAR_STATUS(e.response.data.message);
            this.SET_SNACKBAR(true);
            this.SET_SNACKBAR_COLOR("error");
          });
      } else {
        this.SET_SNACKBAR_STATUS("Aucun argonaute en vu");
        this.SET_SNACKBAR(true);
        this.SET_SNACKBAR_COLOR("error");
      }
    },
    deleteArgonaute(argonauteId, index) {
      Api.delete(`/argonautes/${argonauteId}`).then((response) => {
        console.log(response);
        this.argonautes.splice(index, 1);
        this.SET_SNACKBAR_STATUS("Agonaute supprimé !");
        this.SET_SNACKBAR(true);
        this.SET_SNACKBAR_COLOR("orange");
      });
    },
  },
  data() {
    return {
      argonautes: [],
      argonaute: null,
    };
  },
};
</script>
