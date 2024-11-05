import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProjectView from './views/ProjectView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/project/:id', name: 'ProjectView', component: ProjectView, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
