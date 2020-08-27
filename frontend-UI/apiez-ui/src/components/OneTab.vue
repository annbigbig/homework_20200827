<template>

<div id="tabOne" class="tabcontent" v-bind:class="{ appear: seen , disappear: !seen }">
  <h3>用 id 取一個員工</h3>
  <p>輸入id ... 返回一個員工 ....</p>
  
  <div id="oneEmployee">
     <input v-model="emp_id" type="number" @change="check_empId" placeholder="請輸入員工編號">
     <button id="refreshOne" @click="ajaxForOne"> 查 詢 </button>     
     <table class="employees" v-if="status === 200 && result === true">
      <tr>
         <th> 編  號 </th>
         <th> 姓  名 </th>
         <th> 生  日 </th>
         <th> 地  址 </th>
         <th> 幸 運 號 </th>
         <th> 在職狀態 </th>
       </tr>
       <tr>
         <td> {{ employee.id }} </td>
         <td> {{ employee.name }} </td>
         <td> {{ employee.birthday }} </td>
         <td> {{ employee.address }} </td>
         <td> {{ employee.luckyNumber }} </td>
         <td> {{ employee.online }} </td>
       </tr>
     </table>
     
     <div v-if=" msg === 'EMPLOYEE_NOTFOUND' " class="err_red">
        找不到編號 {{ emp_id }} 的員工，請用其他員工編號重新搜尋
     </div>
     
     <div v-if="errors.length > 0" class="err_red">
        <b>請 處 理 以 下 發 生 的 錯 誤</b>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
     </div>
     
  </div>
</div>
</template>

<script>
import baseMixins from '../mixins/baseMixins.js';

//用id取一個員工

export default {
     mixins: [baseMixins],
     //el: "#oneEmployee",
     props: {
       //pass data from parent component to child component
       seen_prop: { default: false, type: Boolean }
     },
     data() {
          return  {
             seen : this.seen_prop,
		         emp_id: null
          }
     },
	   watch:{
	        /* 對 emp_id 值進行監聽，只要emp_id 改變了，就會觸發程式 */
	        emp_id: function (val) {
	            this.result = true; //消掉紅色錯字區域
	            this.msg = ''; //清空msg
	        }
	   }
  };

</script>