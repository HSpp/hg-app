<template>
	<div>
		<div class="box">
			<div class="item">
				<div class="label">展品名称:</div>
				<div class="value">Qantas Airways Limited</div>
			</div>
			<div class="item">
				<div class="label">展位号:</div>
				<div class="value"><span>1B1-017</span></div>
			</div>
			<div class="item">
				<div class="label">报关单号:</div>
				<div class="value"><span>05010100010500</span></div>
			</div>
			<div class="item">
				<div class="label">展商名称:</div>
				<div class="value">NICE株式会社NICE CORPORATION</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="less">
	.box {
		margin: 20px 10px;
	}

	.item {
		display: flex;
		align-items: center;
		border: 1px solid #DDDDDD;

		&:last-child {
			border-top: none;
		}

		>div {
			padding: 10px 0;
			font-size: 12px;
		}

		.label {
			width: 30%;
			text-align: right;
			padding-right: 20px;
			background: #8D919A;
			color: #fff;
		}

		.value {
			width: 70%;
			text-align: left;
			padding-left: 20px;
			white-space: nowrap;
			overflow: hidden;

			span {
				color: #1F5FF2;
				background: #E8EFFD;
				border: 1px solid #1F5FF2;
				border-radius: 4px;
				padding: 5px 10px;
			}


		}
	}
</style>
