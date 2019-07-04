<template>
	<div class="login">
		<div class="bg">
			<img src="../../assets/build.png" alt="">
		</div>
		<mt-header title="登录" class="customHeader whiteTitle" fixed>
			<router-link to='/' slot="left">
				<span class="iconfont icon-right"></span>
			</router-link>
		</mt-header>
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

				<customInput textType="password" placeholder='请输入密码' @input='input($event,"imgCode")'>
					<span slot='icon' class="iconfont icon-yanzhengma"></span>
					<img slot='imgCode' src="//placehold.it/75x30" alt="">
				</customInput>
				<div class="submit">
					<mt-button size='large' class='customBtn' type="primary" @click='test'>登录</mt-button>
				</div>

			</div>




		</div>

	</div>
</template>

<script>
	import customInput from '@/components/customInput'
	export default {
		components: {
			customInput
		},
		data() {
			return {
				captcha: '',
				form: {
					userName: '',
					password: '',
					imgCode: ''

				}
			}
		},
		methods: {
			input(e, type) {
				this.form[type] = e
			},
			test() {
				console.log('awdas', this.form)
				this.$router.push({
					name: 'loginSuccess',
					params: {
						userName: this.form.userName
					}
				})
			}
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
