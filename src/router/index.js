import Vue from "vue";
import VueRouter from "vue-router";
import Board from "../components/BoardView";
import ContentDetail from "@/components/ContentDetail";
import Create from "@/components/CreateView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/board/free",
    name: "BoardView",
    component: Board,
  },
  {
    path: "/board/free/detail/:contentId",
    name: "ContentDetailView",
    component: ContentDetail,
  },
  {
    path: "/board/free/create/:contentId?",
    name: "CreateView",
    component: Create,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
