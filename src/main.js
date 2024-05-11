import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartPlus, faCartShopping, faHandPeace, faUserSecret } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App);
const pinia = createPinia();

/* add icons to the library */
library.add(faUserSecret, faCartShopping, faHandPeace, faCartPlus)

app.use(pinia);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')

//createApp(App).use(router,createPinia()).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
