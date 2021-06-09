import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/home/index.vue'
import AboutView from '../views/about/index.vue'
import AccessView from '../views/about/access.vue'
import ContactView from '../views/contact/index.vue'
import ExclusionView from '../views/info/exclusion.vue'
import HakenMarginView from '../views/about/haken_margin.vue'
import NewsView from '../views/news/index.vue'
import PrivacyPolicyView from '../views/info/privacy_policy.vue'
import PrivacyPolicyPublicView from '../views/info/privacy_policy_public.vue'
import RecruitView from '../views/recruit/index.vue'
import RecruitConfirmView from '../views/recruit/confirm.vue'
import SitemapView from '../views/sitemap/index.vue'
import SolutionsView from '../views/solutions/index.vue'
import AiView from '../views/solutions/ai.vue'
import BigdataView from '../views/solutions/bigdata.vue'
import BlockchainView from '../views/solutions/blockchain.vue'
import DevView from '../views/solutions/dev.vue'
import EmbeddedView from '../views/solutions/embedded.vue'
import EvaluationView from '../views/solutions/evaluation.vue'
import TermsView from '../views/info/terms.vue'
import InfoView from '../views/info/index.vue'
import AccessibilityPolicyView from '../views/info/accessibility_policy.vue'
import ArticleView from '../views/news/article.vue'
import NotFoundView from '../views/notfound/index.vue'

// 开启历史模式
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'home',
            path: '/home',
            component: HomeView
            // component: () => import('../views/home/access.vue')
        },
        {
            name: 'about',
            path: '/about',
            component: AboutView
        },
        {
            name: 'access',
            path: '/about/access',
            component: AccessView
        },
        {
            name: 'contact',
            path: '/contact',
            component: ContactView
        },
        {
            name: 'exclusion',
            path: '/info/exclusion',
            component: ExclusionView
        },
        {
            name: 'haken-margin',
            path: '/about/haken_margin',
            component: HakenMarginView
        },
        {
            name: 'news',
            path: '/news',
            component: NewsView
        },
        {
            name: 'info',
            path: '/info',
            component: InfoView
        },
        {
            name: 'privacy-policy',
            path: '/info/privacy_policy',
            component: PrivacyPolicyView
        },
        {
            name: 'privacy-policy-public',
            path: '/info/privacy_policy/public',
            component: PrivacyPolicyPublicView
        },
        {
            name: 'accessibility_policy',
            path: '/info/accessibility_policy',
            component: AccessibilityPolicyView
        },
        {
            name: 'recruit',
            path: '/recruit',
            component: RecruitView
        },
        {
            name: 'recruit-confirm',
            path: '/recruit/confirm',
            component: RecruitConfirmView
        },
        {
            name: 'sitemap',
            path: '/sitemap',
            component: SitemapView
        },
        {
            name: 'solutions',
            path: '/solutions',
            component: SolutionsView
        },
        {
            name: 'solutions-ai',
            path: '/solutions/ai',
            component: AiView
        },
        {
            name: 'solutions-bigdata',
            path: '/solutions/bigdata',
            component: BigdataView
        },
        {
            name: 'solutions-blockchain',
            path: '/solutions/blockchain',
            component: BlockchainView
        },
        {
            name: 'solutions-dev',
            path: '/solutions/dev',
            component: DevView
        },
        {
            name: 'solutions-embedded',
            path: '/solutions/embedded',
            component: EmbeddedView
        },
        {
            name: 'solutions-evaluation',
            path: '/solutions/evaluation',
            component: EvaluationView
        },
        {
            name: 'terms',
            path: '/info/terms',
            component: TermsView
        },
        {
            name: 'article',
            path: '/news/:id',
            component: ArticleView,
            props: true
        },
        {
            name: 'not-found',
            path: '/:pathMatch(.*)*',
            component: NotFoundView
        }
    ]
})

export default router
