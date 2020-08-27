<template>
<div id="tabSearch" class="tabcontent" v-bind:class="{ appear: seen , disappear: !seen }">
  <h3>以 姓 名 搜 尋 員 工</h3>
  <p>輸入部分姓名 ... 取出姓名裡符合關鍵字的所有員工 ... </p>
  
  <div id="searchEmployees">
      <input v-model="emp_name" placeholder="請輸入員工的姓名"/>
      <button id="searchBTN" v-on:click="ajaxForSearch"> 查 詢 </button>     
     <table class="employees" v-if="status === 200 && result">
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
      
      <div v-if=" !result && msg === 'EMPLOYEE_NOTFOUND' && status === -99 " class="err_red">
        <p>找不到姓名裡有 [ {{ emp_name }} ] 的員工，請用其他關鍵字重新搜尋</p>
      </div>
      
      <div v-if="errors.length" class="err_red">
          <b>請 處 理 以 下 發 生 的 錯 誤</b>
          <ul>
            <li v-for="error in errors"> {{ error }} </li>
          </ul>
      </div>
      
      
  </div><!-- id="searchEmployees" -->
</div><!-- id="tabSearch" -->
</template>


<script>

import baseMixins from '../mixins/baseMixins.js';

//用id取一個員工

export default {
     mixins: [baseMixins],
     props: {
       //pass data from parent component to child component
       seen_prop: { default: false, type: Boolean }
     },
     data() {
          return  {
             seen : this.seen_prop,
		     emp_name: ''
          }
     },
	 watch:{
	        /* 對emp_name值進行監聽，只要emp_name改變了，就會觸發程式 */
	        emp_name: function (val) {
	            this.result = true; //消掉紅色錯字區域
	            this.msg = ''; //清空msg
	            this.status = 0;
	        }
	 }
  };

</script>