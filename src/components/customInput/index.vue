<template>
	<div class="customInput" :class="{focus:active}">
		<slot name='icon'></slot>
		<input class="custom" @input="handleInput" ref="input" :placeholder="placeholder" :type="textType" @focus="active=true" @blur="active=false">
		
		<slot name='imgCode'></slot>
		<!--<span v-if="textType=='password'" @click="showPassword" class="iconfont icon-jiemao"></span>-->
	</div>
</template>

<script>
	export default {
		props: {
			textType: {
				type: String
			},
			placeholder: {
				type: String

			}

		},
		data() {
			return {
				currentValue: '',
				active: false,
				type:'text'
			}
		},

		methods: {
			handleInput(evt) {
				this.$emit('input', evt.target.value)
			},
			showPassword(){
				this.textType='text';
			}

		}
	}
</script>

<style scoped lang="less">
	.customInput {
		padding: 10px 0;
		border-bottom: 1px solid #C8CACC;
		display: flex;
		align-items: center;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			left: 0;
			bottom: -1px;
			background: #1F5FF2;
			transform:translate(-100%,0) scale(0);
		}
		&.focus {
			transition: transform 0.7s ease-in-out;
			&::before{
				transform: scale(1);
			}
			.iconfont{
				color:#1F5FF2; 
			}
			

		}
		.iconfont {
			font-size: 20px;
			width: 30px;
			height: 30px;
			line-height: 30px;

		}
		&.password{
			
		}
		img{
			position: absolute;
			right: 0;
			height: 80%;
			width: 100px;
			bottom: 1px;
		}
		input {
			padding-left: 14px;
			outline: none;
			border: none;
			font-size: 16px;
			height: 30px;
			width: calc(100% - 30px);

			&::-webkit-input-placeholder {
				/*Webkit browsers*/
				font-size: 14px;
				color: #C8CACC;
			}

			&:-moz-placeholder {
				/*Mozilla Firefox 4 to 8*/
				font-size: 14px;
				color: #C8CACC;
			}

			&::moz-placeholder {
				/*Mozilla Firefox 19+*/
				font-size: 14px;
				color: #C8CACC;
			}

			&:-ms-input-placeholder {
				/*Internet Explorer 10+*/
				font-size: 14px;
				color: #C8CACC;
			}
		}

	}
</style>
