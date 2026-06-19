import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../monaco/Editor.vue') },
  { path: '/sub', component: () => import('../monaco/Editor.vue') },
  { path: '/home/test', component: () => import('../monaco/Editor.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
