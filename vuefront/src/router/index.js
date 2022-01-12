import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/imageBlogsList')
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('../components/creatImageBlog')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../components/creatImageBlog')
    },
    {
        path: '/blog/:blogid',
        component: ()=> import('../components/showOneBlog.vue')
               
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../components/PageNotFound.vue')
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
