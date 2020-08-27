<template>
<div id="tabCreate" class="tabcontent" v-bind:class="{ appear: seen , disappear: !seen }">
  <h3>新 增 員 工</h3>
  <p>新增一筆員工資料</p>
  
  <div id="createEmployee">
  <form id="createForm" @submit.prevent="ajaxForCreate" action="#" method="post">
  
  <p>
    <label for="e_create_name"> 姓 名 </label>
    <input id="e_create_name" v-model="employee.name" type="text" name="e_create_name" min="2" @keypress="preventNumericInput"/>
  </p>

  <p>
    <label for="e_create_address"> 地 址 </label>
    <input id="e_create_address" v-model="employee.address" type="text" name="e_create_address" min="10"/>
  </p>

  <p>
    <label for="e_create_luckyNumber"> 幸 運 號 碼 </label>
    <input id="e_create_luckyNumber" v-model="employee.luckyNumber" type="number" name="e_create_luckyNumber" min="1" max="100"/>
  </p>

  <p>
    <label for="e_create_datepicker"> 出 生 日 期 </label>
    <datepicker v-model="employee.birthday" id="e_create_datepicker" :format="customFormatter"></datepicker>
  </p>

  <p>
    <label for="movie">在 職 狀 態</label>
    <select v-model="employee.online">
          <option v-for="option in options" :value="option.value"> {{option.text}} </option>
    </select>
  </p>

  <p>
    <input type="submit" value="新 增 員 工"/>
  </p>
  

  <span v-if="result===false && status!==200" class="err_red">
        <p>
         新增員工失敗 <br/>
         錯誤代碼 : {{ status }} <br/>
         錯誤訊息 : {{ msg }} <br/>
         </p>
  </span>
  
  <span v-if="errors.length>0" class="err_red">
         <b>請 處 理 以 下 發 生 的 錯 誤</b>
         <ul>
              <li v-for="error in errors">{{ error }}</li>
         </ul>
  </span>
   
   <span v-if="result===true && status===200" class="info_blue">
        <p> 新 增 員 工 資 料 成 功</p>
   </span>
   
</form>
  
  
  </div>
</div>

</template>

<script>
import baseMixins from '../mixins/baseMixins.js';
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';

export default {
     mixins: [baseMixins],
     props: {
       //pass data from parent component to child component
       seen_prop: { default: false, type: Boolean }
     },
     data() {
          return  {
              seen : this.seen_prop,
		     		  options: [
   		              {text: '在職中', value: true},
			              {text: '已離職', value: false},
		          ]
          }
     },
     components: {
       Datepicker
     },
     methods: {
        customFormatter(date) {
          return moment(date).format('YYYY-MM-DD');
       }
     }
  };

</script>