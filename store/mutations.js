export default {
  SET_SNACKBAR_STATUS: function (state, status) {
    state.snackbarStatus = status;
    console.log(status);
  },
  SET_SNACKBAR: function (state, snackbar) {
    state.snackbar = snackbar;
  },
  SET_SNACKBAR_COLOR: function (state, color) {
    state.snackbarColor = color;
  },
};
