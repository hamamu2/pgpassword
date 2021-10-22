const app = new Vue({
  el: "#app",
  data: {
    seen: true,
    message: "0% 完了"
  },
  methods: {
    move() {
      this.seen = true;
      setTimeout(() => {
        this.message = "10% 完了";
      }, 600);
      setTimeout(() => {
        this.message = "27% 完了";
      }, 2000);
      setTimeout(() => {
        this.message = "55% 完了";
      }, 3000);
      setTimeout(() => {
        this.message = "79% 完了";
      }, 4800);
      setTimeout(() => {
        this.message = "100% 完了";
      }, 6000);
    }
  }
})
