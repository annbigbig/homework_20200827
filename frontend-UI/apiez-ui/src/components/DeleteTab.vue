<template>
<div id="tabDelete" class="tabcontent" v-bind:class="{ appear: seen , disappear: !seen }">
  <div id="deleteEmployee">
      <h3>刪 除 員 工</h3>
      <input v-model="emp_id" type="number" @change="check_empId" placeholder="請輸入要刪除的員工編號">
      <button id="deleteOne" v-on:click="ajaxForDelete"> 刪 除 </button>
      
      <p></p>
      <span v-if="errors.length>0" class="err_red">
         <b>請 處 理 以 下 發 生 的 錯 誤</b>
         <ul>
              <li v-for="error in errors">{{ error }}</li>
         </ul>
      </span>
  
      <span v-if="result===true && status===200" class="info_blue">
            <p> 刪 除 員 工 資 料 成 功</p>
       </span>
       
       <span v-if="!result && status!==200" class="err_red">
            <p> 刪 除 員 工 資 料 失 敗</p>
            狀態碼: {{ status }} <br/>
            訊息: {{ msg }}<br/>
       </span>     
  </div><!-- id="deleteEmployee" -->
</div><!-- id="tabDelete" -->
</template>


<script>
import baseMixins from '../mixins/baseMixins.js';
//刪除員工

export default {
     mixins: [baseMixins],
     props: {
       //pass data from parent component to child component
       seen_prop: { default: false, type: Boolean }
     },
     data() {
          return  {
             seen : this.seen_prop,
		     emp_id: 0
          }
     },
     watch:{
	        /* 對 emp_id 值進行監聽，只要emp_id 改變了，就會觸發程式 */
	        emp_id: function (val) {
	            this.errors = []; //消掉紅色錯字區域
	            this.result = true;
	            this.msg = ''; 
	        }
	 }
  };

</script>