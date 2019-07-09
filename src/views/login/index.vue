<template>
	<div class="login">
		<div class="bg">
			<img src="../../assets/build.png" alt="">
		</div>
		<div class="logo">
			<img src="@/assets/logo.png" alt="">
		</div>
		<div class="formBox">
			<div class="form">
				<customInput textType="text" placeholder='请输入用户名' @input='input($event,"userName")'>
					<span slot='icon' class="iconfont icon-user-o"></span>
				</customInput>
				<customInput textType="password" placeholder='请输入密码' @input='input($event,"password")'>
					<span slot='icon' class="iconfont icon-mima"></span>
				</customInput>

				<customInput textType="text" placeholder='请输入密码' @input='input($event,"imgCode")'>
					<span slot='icon' class="iconfont icon-yanzhengma"></span>
					<img slot='imgCode' @click="getImgCode" :src="captcha" alt="">
				</customInput>
				<div class="submit">
					<mt-button size='large' class='customBtn' type="primary" @click="loginHandle" >登录</mt-button>
				</div>

			</div>




		</div>

	</div>
</template>

<script>
	import customInput from '@/components/customInput'
	import {httpGet} from '@/requset/http'
	import {mapActions} from 'vuex'
	export default {
		components: {
			customInput
		},
		beforeMount(){
		    this.getImgCode()
		},
		data() {
			return {
				captcha: '',
				form: {
					userName: '',
					password: '',
					imgCode: '',
					sign:''

				}
			}
		},

		methods: {
			...mapActions(['login']),
			input(e, type) {
				this.form[type] = e
			},
            async loginHandle(){
			    let res=await this.login(this.form)
				console.log(res)
			},
			getImgCode(){
			  httpGet(this.interfaceUrl.imgCode,new Date(),true).then(r=>{
			      if(r&&r.sign){
			          this.captcha=r.imageCode
                      this.form.sign=r.sign

				  }

			  })
			},
		}
	}
</script>

<style scoped lang="less">
	.bg {
		position: absolute;
		background: #4DA1FF;
		border-bottom-left-radius: 40%;
		border-bottom-right-radius: 40%;
		z-index: -1;


	}

	.logo {
		text-align: left;
		padding: 2rem 10px;
		margin-top: 2rem;

	}

	.login {
		position: fixed;
		top: 0;
		width: 100%;
	}

	.formBox {
		padding: 0 10px;

		.form {
			background: #fff;
			box-shadow: 0 7px 10px 0 rgba(0, 33, 105, 0.10);
			border-radius: 4px;
			padding: 25px;
		}

		.submit {
			margin-top: 20px;
		}
	}
</style>
