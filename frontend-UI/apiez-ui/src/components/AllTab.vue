<template>

<div id="tabAll" class="tabcontent" v-bind:class="{ appear: seen , disappear: !seen }">
  <h3>取 出 全 部 員 工</h3>
  <p>取出全部的員工資料 ... 並繪製在這裡... </p>
 
  <div id="allEmployees">
     <button id="refreshAll" @click="ajaxForAll"> 更 新 </button>
     <table class="employees">
      <tr>
         <th> 編  號 </th>
         <th> 姓  名 </th>
         <th> 生  日 </th>
         <th> 地  址 </th>
         <th> 幸 運 號 </th>
         <th> 在職狀態 </th>
       </tr>
       <tr v-for="employee in employees">
         <td> {{ employee.id }} </td>
         <td> {{ employee.name }} </td>
         <td> {{ employee.birthday }} </td>
         <td> {{ employee.address }} </td>
         <td> {{ employee.luckyNumber }} </td>
         <td> {{ employee.online }} </td>
       </tr>
     </table>
  </div>
  
</div>

</template>


<script>
import baseMixins from '../mixins/baseMixins.js';

//取出全部員工

export default {
     mixins: [baseMixins],
     //el: "#allEmployees",
     props: {
       //pass data from parent component to child component
       seen_prop: { default: false, type: Boolean }
     },
     data() {
        return {
            seen : this.seen_prop
        }
     },
     mounted: function() {
        console.log('== mounted == ');
        this.ajaxForAll();
		  /*
		  axios
	      .get('https://www.dq5rocks.com/apiez02/employees/')
	      .then(response => (this.employees = response.data.object));
		  */
	    this.hello();
	}
  };

</script>