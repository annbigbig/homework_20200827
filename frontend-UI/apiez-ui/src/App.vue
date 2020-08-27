<template>
  <div id="app" :key="componentKey">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h2>Restful API 示例程式</h2>

    <!-- Tab links -->
    <menu-tab @switch-tab="showTab" :btn_index_prop="btn_index"></menu-tab>
    <one-tab :seen_prop="buttons[0].selected"></one-tab>
    <all-tab :seen_prop="buttons[1].selected"></all-tab>
    <search-tab :seen_prop="buttons[2].selected"></search-tab>
    <create-tab :seen_prop="buttons[3].selected"></create-tab>
    <update-tab :seen_prop="buttons[4].selected"></update-tab>
    <delete-tab :seen_prop="buttons[5].selected"></delete-tab>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import baseMixins from './mixins/baseMixins.js';
import MenuTab from './components/MenuTab.vue';
import OneTab from './components/OneTab.vue';
import AllTab from './components/AllTab.vue';
import SearchTab from './components/SearchTab.vue';
import CreateTab from './components/CreateTab.vue';
import UpdateTab from './components/UpdateTab.vue';
import DeleteTab from './components/DeleteTab.vue';


// https://stackoverflow.com/questions/54430398/how-do-i-display-a-single-oject-from-an-array-in-vuejs
export default {
  //mixins: [baseMixins],
  name: 'App',
  data() {
       return {
            btn_index : 0,
            buttons : [
              { idx: 0 , name : "getOne", selected : true},  //default page so its value is 'true'
              { idx: 1 , name : "getAll", selected : false},
              { idx: 2 , name : "searchName", selected : false},
              { idx: 3 , name : "createEmployee", selected : false},
              { idx: 4 , name : "updateEmployee", selected : false},
              { idx: 5 , name : "deleteEmployee", selected : false}
            ],
            componentKey: 0,
            employees: null,
            result: null,
            status: null
       }
  },
  components: {
    //HelloWorld,
    MenuTab,
    OneTab,
    AllTab,
    SearchTab,
    CreateTab,
    UpdateTab,
    DeleteTab
  },
  methods: {
    showTab(tabIndex) {
       console.log('App.showTab() ===> ' , tabIndex);
       //switch all buttons status to 'false'
       var i;
       for(i = 0; i < this.buttons.length; i++){
            (i === tabIndex) ? this.buttons[i].selected = true : this.buttons[i].selected = false;
            this.btn_index = tabIndex;
            console.log('button[' , i , '].selected ===' , this.buttons[i].selected , " name === " , this.buttons[i].name);
       }
       
       //update menu buttons color please
       this.btn_index = tabIndex;

       //force the page reload again
       this.forceRerender();
    },
    forceRerender() {
			this.componentKey += 1;
		}

  }
}
</script>