<template>
	<div>	
		<div class="searchBox">
			<div class="searchInput">
				<input type="text" class="custom" placeholder="请输入展品中文名称,报关单号" />
				<span class="iconfont icon-xiazai17" @click="query"></span>

			</div>


		</div>
		<div class="navBar">
			<mt-navbar v-model="selected" class='customNavbar'>
				<mt-tab-item id="1">展品清单</mt-tab-item>
				<mt-tab-item id="2">展商名称</mt-tab-item>
				<mt-tab-item id="3">报关单号</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected" >
				<mt-tab-container-item id="1">
					<div class="boxContanier">
						<div class="customTable">
							<table >
								<thead>
									<tr>
										<th>展位号</th>
										<th>展商名称</th>
										<th>报关单号</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="n in 20" :key='n.id'>
										<td>1B1-017</td>
										<td>A109S直升机(SN-22709)</td>
										<td>05010100010500</td>
									</tr>
									
								</tbody>
							</table>	
						</div>
						
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="boxContanier">
						<div class="customTable">
							<table >
								<thead>
									<tr>
										<th>展位号</th>
										<th>展商名称</th>
										<th>报关单号</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="n in 10" :key='n.id'>
										<td>1B1-017</td>
										<td>A109S直升机(SN-22709)</td>
										<td>05010100010500</td>
									</tr>
									
								</tbody>
							</table>	
						</div>
						
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="boxContanier">
						<div class="customTable">
							<table >
								<thead>
									<tr>
										<th>展位号</th>
										<th>展商名称</th>
										<th>报关单号</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="n in 15" :key='n.id'>
										<td>1B1-017</td>
										<td>A109S直升机(SN-22709)</td>
										<td>05010100010500</td>
									</tr>
									
								</tbody>
							</table>	
						</div>
						
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
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
				selected: '1'
			}
		},
		methods:{
			query(){
				this.$router.push({name:'result'})
			}
		}
	}
</script>

<style scoped lang="less">
	.searchBox {
		padding: 20px 10px 0 10px;
		

		.searchInput {
			width: 100%;
			height: 40px;
			background: #FFFFFF;
			border: 1px solid #A6ABB8;
			border-radius: 22px;
			overflow: hidden;
			position: relative;

			>span {
				position: absolute;
				right: 0;
				color: #A6ABB8;
				top: 52%;
				right: 20px;
				font-size: 24px;
				transform: translate(-0, -50%);
			}

			input {
				outline: none;
				border: none;
				width: 100%;
				height: 100%;
				padding: 0 15px;

			}
		}
	}

	.navBar {
		margin-top: 20px;
	}
</style>
