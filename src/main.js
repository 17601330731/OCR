// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button, Select,Input,Table,TableColumn,Upload,MessageBox,Message ,Pagination,Icon} from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Input.name, Input);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Upload.name, Upload);
Vue.component(MessageBox.name, MessageBox);
Vue.component(Message.name, Message);
Vue.component(Pagination.name, Pagination);
Vue.component(Icon.name, Icon);
// Vue.use(Button);
// Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
