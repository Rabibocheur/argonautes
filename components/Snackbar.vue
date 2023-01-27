<template>
  <v-snackbar
    v-model="snackbarModel"
    :timeout="5500"
    bottom
    left
    dark
    :color="snackbarColor"
  >
    {{ snackbarStatus }}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="closeSnackbar"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SnackBar",
  computed: {
    ...mapState(["snackbarStatus", "snackbar", "snackbarColor"]),
    snackbarModel: {
      get() {
        return this.snackbar;
      },
      set(value) {
        this.SET_SNACKBAR(value);
      },
    },
  },
  methods: {
    ...mapMutations(["SET_SNACKBAR"]),
    closeSnackbar() {
      this.SET_SNACKBAR(false);
    },
  },
};
</script>
