<template>
	<div class="login">
		<div class="bg">
			<img src="../../assets/build.png" alt="">
		</div>
		<div class="logo">
			<img src="@/assets/logo.png" alt="">
		</div>
		<div class="formBox">
			<div class="form infor">
				<div class="item">
					<div class="label">工号:</div>
					<div class="value">admin-01</div>
				</div>
				<div class="item">
					<div class="label">职位:</div>
					<div class="value">检员</div>
				</div>
				<div class="submit">
					<mt-button size='large' class='customBtn' type="primary" @click='loginOutHandle'>退出登录</mt-button>
				</div>
				
			</div>
		</div>

	</div>
</template>

<script>
	import customInput from '@/components/customInput'
    import {mapActions} from 'vuex'
	export default {
		components: {
			customInput
		},
		beforeMount(){
			this.userName=this.$route.params.userName
			
		},
		data() {
			return {
				captcha: '',
				userName:'',
				form: {
					userName: '',
					password: '',
					imgCode: ''

				}
			}
		},
		methods: {
            ...mapActions(['loginOut']),
            async loginOutHandle() {
                let res=await this.loginOut()
				if(res){
                    this.$router.push({name:'home'})
				}
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
			&.infor{
				padding: 20px;
				.item{
					display: flex;
					align-items: center;
					border: 1px solid #DDDDDD;
					&:last-child{
						border-top:none;
					}
					>div{
						padding: 10px 0;
					}
					.label{
						width: 30%;
						text-align: center;
						background: #8D919A;
						color: #fff;
					}
					.value{
						padding-left: 20px;
					}
				}
			}
		}
		.submit{
			margin-top: 40px;
		}
	}
</style>
