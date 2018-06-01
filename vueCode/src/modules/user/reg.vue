<template>
	<div>
		<headBar></headBar>
		<div class="formBox">
			<group title="">
				<x-input title="手机号" name="patientMobile" v-model="param.patientMobile" placeholder="请输入手机号"></x-input>
			</group>
			<group title="">
				<x-input title="姓名" name="patientName" v-model="param.patientName" placeholder="请输入姓名"></x-input>
			</group>
			<group title="">
				<x-input title="微信号" name="patientWeixinId" v-model="param.patientWeixinId" placeholder="请输微信号"></x-input>
			</group>
			<x-button type="primary" @click.native="doReg" class="regBtn">注册</x-button>
		</div>
	</div>
</template>

<script>
export default {
  methods:{
	doReg(){
		this.$post(this.$api_root+this.$api.map.reg,this.param).then(res => {
		      console.log(res);
	    }).catch(err => {
	    	  console.log(err);
	    })
	}
  },
  data(){
  	return{
  		param:{
  			"patientWeixinId":"",
	        "patientName":"",
	        "patientMobile":""
  		},
  		date:'20160101'
  	}
  },
  created(){
		this.$store.state.head.title = '注册';
		this.$store.state.head.isReturn = true;
	}
}
</script>


<style lang="less" scoped>
	.formBox{
		margin:0px 20px;
		.regBtn{
			margin-top:30px;
		}
	}
</style>
