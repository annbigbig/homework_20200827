<template>

<div id="tabUpdate" class="tabcontent" v-bind:class="{ appear: seen , disappear: !seen }">
  
  <h3>修 改 員 工</h3>
  <p>修改一筆員工資料</p>
  
  <div id="updateEmployee">
  <form id="updateForm" @submit.prevent="ajaxForUpdate" action="#" method="post">
  
  <p>
    <label for="e_update_name"> 員工編號 </label>
    <input id="e_update_id" v-model="employee.id" type="number" name="e_update_id" min="1">
  </p>
  
  <p>
    <label for="e_update_name"> 姓 名 </label>
    <input id="e_update_name" v-model="employee.name" type="text" name="e_update_name" min="2" @keypress="preventNumericInput">
  </p>

  <p>
    <label for="e_update_address"> 地 址 </label>
    <input id="e_update_address" v-model="employee.address" type="text" name="e_update_address" min="10">
  </p>

  <p>
    <label for="e_update_luckyNumber"> 幸 運 號 碼 </label>
    <input id="e_update_luckyNumber" v-model="employee.luckyNumber" type="number" name="e_update_luckyNumber" min="1" max="100">
  </p>

  <p>
    <label for="e_update_datepicker"> 出 生 日 期 </label>
    <datepicker v-model="employee.birthday" id="e_update_datepicker" :format="customFormatter"></datepicker>
  </p>
  
  
  <!-- options組件的用法參考 -->
  <!-- https://stackoverflow.com/questions/45264923/how-to-return-boolean-and-not-string-when-using-select -->
  <p>
    <label for="movie">在 職 狀 態</label>
    <select v-model="employee.online">
          <option v-for="option in options" :value="option.value">{{option.text}}</option>
      </select>
  </p>

  <p>
    <input
      type="submit"
      value="修 改 員 工"
    >
  </p>
  
  <!-- https://vuejs.org/v2/cookbook/form-validation.html -->
  <!-- show error messages here -->
  <span v-if="result===false && status!==200" class="err_red">
        <p>
         修改員工失敗 <br/>
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
        <p> 修 改 員 工 成 功</p>
   </span>
   
</form>
  </div><!-- id="updateEmployee" -->
  
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