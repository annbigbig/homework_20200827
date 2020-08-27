<template>

    <div class="tab">
      <button class="tablinks" @click="onClick($event,0)" v-bind:class="{ active: (activated_button_index === 0) }" >用 id 取一個員工</button>
      <button class="tablinks" @click="onClick($event,1)" v-bind:class="{ active: (activated_button_index === 1) }" >取 出 全 部 員 工</button>
      <button class="tablinks" @click="onClick($event,2)" v-bind:class="{ active: (activated_button_index === 2) }" >以 姓 名 搜 尋 員 工</button>
      <button class="tablinks" @click="onClick($event,3)" v-bind:class="{ active: (activated_button_index === 3) }" >新 增 員 工</button>
      <button class="tablinks" @click="onClick($event,4)" v-bind:class="{ active: (activated_button_index === 4) }" >修 改 員 工</button>
      <button class="tablinks" @click="onClick($event,5)" v-bind:class="{ active: (activated_button_index === 5) }" >刪 除 員 工</button>
      <!--
      <button class="tablinks" onclick="openCity(event, 'tabTest')"  v-bind:class="{ active: (activated_button_index === 0) }">測 試 用 頁 面 </button>
      <button class="tablinks" onclick="openCity(event, 'tabMock')">測 試 偽 表 格 </button>
      -->
    </div>

</template>

<script>

export default {
  name: 'MenuTab',
  props: {
       //pass data from parent component to child component
       btn_index_prop: {default: 0 , type : Number}
  },
  data() {
       return {
          activated_button_index : this.btn_index_prop
       }
  },

  methods: {
       onClick(event,tabIndex) {
          //this.activated_button_index = tabIndex;   //try to do this line but it doesnt refresh the UI component , that is so weird
          console.log('tabIndex === ' , tabIndex , 'activated_button_index === ' , this.activated_button_index);
          this.$emit("switch-tab",tabIndex); //fire event 'switch-tab' with clicked tabName

       }
  }
}

</script>