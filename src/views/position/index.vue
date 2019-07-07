<template>
	<div class="exhibition">
		<div class="floor">
			<mt-button :type="floor?'default':'primary'" @click='switchFloor(1)' class='customBtn'>一楼</mt-button>
			<mt-button :type="!floor?'default':'primary'" @click='switchFloor(2)' class='customBtn'>二楼</mt-button>
			
		</div>
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="675" height="675" viewBox="0 0 675 673"
		 preserveAspectRatio="xMidYMid meet">
			<g transform="translate(0,673) scale(0.1,-0.1)" fill="#0C1435" stroke="#fff">
				<path stroke-width="5" d="M2825 6694 c-97 -22 -218 -81 -293 -143 -89 -74 -154 -160 -216 -286
-94 -188 -121 -327 -132 -662 l-7 -213 25 0 c25 0 26 -2 33 -87 13 -170 34
-339 54 -433 57 -275 78 -330 141 -383 16 -14 30 -30 30 -35 0 -11 -135 -145
-151 -150 -5 -2 -30 15 -57 39 -26 23 -65 50 -87 59 -72 32 -398 87 -737 125
-50 6 -58 9 -58 27 0 21 -3 21 -116 14 -64 -3 -211 -17 -327 -31 -316 -37
-428 -68 -563 -156 -114 -75 -211 -178 -262 -280 -54 -106 -71 -169 -78 -289
-5 -83 -2 -115 26 -250 36 -175 36 -225 -3 -385 -28 -117 -30 -299 -4 -395 60
-221 227 -398 475 -506 163 -70 339 -99 654 -108 l198 -6 0 29 c0 34 -20 30
246 55 215 21 498 79 575 117 20 10 54 34 74 54 21 19 41 35 44 35 4 0 40 -33
80 -74 l74 -75 -47 -55 c-25 -30 -53 -70 -60 -88 -29 -69 -72 -324 -123 -728
-7 -57 -11 -65 -30 -68 -23 -3 -23 -6 -23 -152 0 -173 22 -399 49 -510 88
-350 300 -593 574 -654 134 -31 200 -30 372 4 182 37 244 36 406 -1 332 -76
624 34 803 304 127 192 180 388 191 702 3 83 7 185 10 228 l4 77 -34 0 c-38 0
-38 0 -50 125 -12 118 -57 422 -81 537 -27 135 -37 158 -100 229 l-46 52 73
73 c41 41 78 74 84 74 6 0 24 -14 41 -31 16 -17 43 -39 60 -50 62 -38 404
-109 619 -128 240 -22 225 -18 225 -53 l0 -31 183 6 c219 8 403 29 512 57 258
68 479 230 574 423 80 163 94 313 47 537 -32 150 -31 252 0 373 37 142 36 312
-3 432 -57 180 -203 344 -389 439 -200 101 -342 130 -706 142 l-218 7 0 -22
c0 -11 -6 -21 -12 -21 -72 -1 -496 -62 -648 -93 -143 -30 -152 -34 -221 -91
-31 -25 -60 -46 -65 -46 -5 0 -42 33 -82 73 l-72 73 31 29 c42 40 78 104 95
167 36 136 74 349 89 498 27 275 21 250 62 250 l35 0 -6 168 c-17 399 -60 594
-174 781 -139 228 -337 353 -582 368 -81 4 -118 1 -255 -27 -178 -35 -222 -35
-375 2 -114 27 -283 32 -375 12z  "></path>
				<path stroke-width="5" d="M2853 6471 c-66 -26 -185 -103 -256 -166 -28 -25 -28 -25 -10 -55
l17 -30 777 0 777 0 13 32 c12 30 12 32 -27 66 -170 149 -337 206 -506 172
-105 -20 -293 -27 -403 -13 -55 6 -147 14 -205 18 -100 5 -109 4 -177 -24z"></path>
				<path :position="currentFloor[0]['isClick']"
					:class="currentFloor[0]['isClick']&&currentFloor[0]['className']" 
					@click="siteClick(currentFloor[0]['isClick'],currentFloor[0]['number'])"
					 d="M2503 6039 c-65 -19 -63 6 -63 -760 l0 -692 142 -143 141 -143 56 -3
c53 -3 56 -5 59 -30 l3 -28 185 0 c139 0 193 4 219 14 l35 15 0 875 c0 782 -2
876 -16 890 -13 14 -60 16 -372 15 -196 0 -372 -5 -389 -10z"></path>
				<path :position="currentFloor[1]['isClick']"
					:class="currentFloor[1]['isClick']&&currentFloor[1]['className']" 
					@click="siteClick(currentFloor[1]['isClick'],currentFloor[1]['number'])"
					 d="M3478 6039 c-17 -9 -18 -62 -18 -888 0 -804 1 -880 17 -892 12 -11
65 -15 219 -17 l203 -3 3 28 c3 26 6 28 58 31 l55 3 138 137 137 137 0 711 0
711 -26 24 -26 24 -371 2 c-245 2 -378 -1 -389 -8z "></path>
				<path :position="currentFloor[6]['isClick']"
					:class="currentFloor[6]['isClick']&&currentFloor[6]['className']" 
					@click="siteClick(currentFloor[6]['isClick'],currentFloor[6]['number'])"
					 d="M692 4243 c-7 -3 -19 -18 -27 -33 -12 -24 -15 -92 -15 -398 0 -273 3
-371 12 -380 9 -9 220 -12 890 -12 l877 0 13 23 c9 15 14 83 16 220 l4 197
-24 0 c-36 0 -48 19 -48 76 l0 52 -136 131 -137 131 -706 -1 c-388 0 -712 -3
-719 -6z "></path>
				<path :position="currentFloor[5]['isClick']"
					:class="currentFloor[5]['isClick']&&currentFloor[5]['className']" 
					@click="siteClick(currentFloor[5]['isClick'],currentFloor[5]['number'])"
					 d="M4478 4113 l-137 -138 -3 -55 c-3 -52 -5 -55 -31 -58 l-28 -3 3 -203
c2 -154 6 -207 17 -220 12 -15 85 -16 895 -14 l881 3 3 389 c2 388 2 390 -20
413 l-21 23 -711 0 -711 0 -137 -137z "></path>
				<path d="M360 4059 c-84 -107 -106 -144 -136 -221 -26 -67 -27 -77 -21 -187 4
-64 11 -143 17 -176 12 -73 12 -238 -1 -320 -41 -275 -15 -387 135 -573 l57
-71 35 16 34 17 -2 775 -3 775 -30 17 -30 18 -55 -70z"></path>
				<path d="M6283 4108 l-23 -11 0 -776 0 -776 30 -17 30 -17 59 69 c71 82 108
144 133 219 26 77 33 187 19 261 -22 113 -29 288 -15 400 7 58 15 148 19 200
6 88 5 101 -20 170 -29 78 -63 136 -140 233 -47 59 -55 63 -92 45z"></path>
				<path d="M3305 3894 c-133 -28 -212 -69 -296 -153 -279 -279 -171 -738 205
-869 259 -90 555 52 657 317 33 84 38 238 11 328 -58 191 -207 328 -399 368
-65 14 -136 17 -178 9z m167 -260 c61 -20 117 -70 153 -135 25 -46 29 -65 30
-130 0 -65 -4 -84 -30 -134 -106 -207 -398 -202 -512 8 -26 46 -25 198 1 247
36 69 107 130 176 151 43 13 134 10 182 -7z"></path>
				<path d="M3265 3606 c-178 -83 -209 -320 -58 -446 114 -94 297 -68 380 54 63
92 68 186 15 280 -69 122 -213 170 -337 112z"></path>
				<path :position="currentFloor[7]['isClick']"
					:class="currentFloor[7]['isClick']&&currentFloor[7]['className']" 
					@click="siteClick(currentFloor[7]['isClick'],currentFloor[7]['number'])"
					 d="M662 3228 c-9 -9 -12 -109 -12 -389 l0 -378 24 -28 24 -28 708 -3
707 -2 138 137 139 137 0 51 c0 56 12 75 48 75 l24 0 -4 193 c-3 135 -8 200
-18 220 l-13 27 -877 0 c-668 0 -879 -3 -888 -12z "></path>
				<path :position="currentFloor[4]['isClick']"
					:class="currentFloor[4]['isClick']&&currentFloor[4]['className']" 
					@click="siteClick(currentFloor[4]['isClick'],currentFloor[4]['number'])"
					 d="M4294 3205 c-10 -26 -14 -80 -14 -219 l0 -185 28 -3 c25 -3 27 -6 30
-59 l3 -56 143 -141 143 -142 692 0 c733 0 737 0 755 45 3 9 6 189 6 400 0
340 -2 384 -16 389 -9 3 -407 6 -885 6 l-870 0 -15 -35z"></path>
				<path :position="currentFloor[2]['isClick']"
					:class="currentFloor[2]['isClick']&&currentFloor[2]['className']" 
					@click="siteClick(currentFloor[2]['isClick'],currentFloor[2]['number'])"
					d="M2840 2398 c0 -36 -19 -48 -75 -48 l-51 0 -137 -139 -137 -138 2
-706 3 -706 23 -23 23 -23 380 -3 c278 -2 385 0 395 9 12 10 14 151 14 888 l0
876 -22 15 c-18 12 -67 16 -220 18 l-198 4 0 -24z"></path>
				<path :position="currentFloor[3]['isClick']"
					:class="currentFloor[3]['isClick']&&currentFloor[3]['className']" 
					@click="siteClick(currentFloor[3]['isClick'],currentFloor[3]['number'])"
				d="M3514 2411 c-17 -4 -36 -11 -42 -15 -17 -11 -17 -1757 0 -1774 9 -9
107 -12 380 -12 387 0 415 3 432 45 3 9 6 333 6 719 l0 703 -131 137 -131 136
-52 0 c-57 0 -76 12 -76 47 l0 23 -177 -1 c-98 -1 -192 -4 -209 -8z"></path>

				<path d="M2589 423 c-7 -16 -15 -31 -17 -34 -6 -13 193 -154 258 -184 59 -27
75 -30 170 -30 58 0 158 6 222 14 126 15 302 11 398 -10 73 -16 220 -6 292 19
65 23 151 79 223 145 l50 45 -17 29 -17 28 -774 3 -774 2 -14 -27z"></path>
				<path d="M2094 5323 c-189 -239 -270 -327 -418 -456 -78 -68 -174 -149 -213
-180 -68 -54 -73 -60 -73 -97 0 -44 0 -44 125 -55 116 -11 392 -53 524 -80
127 -26 185 -51 230 -99 14 -14 29 -26 36 -26 6 0 37 27 69 59 l59 60 -36 40
c-20 22 -42 52 -50 68 -32 64 -99 390 -116 568 -6 61 -13 140 -17 178 l-6 67
-38 0 c-34 0 -43 -6 -76 -47z"></path>
				<path d="M4536 5348 c-2 -13 -11 -99 -20 -193 -16 -172 -26 -237 -73 -445 -28
-126 -47 -171 -95 -225 l-31 -36 61 -61 61 -61 43 35 c64 52 96 66 221 93 101
22 370 62 527 80 135 15 130 13 130 54 0 35 -6 42 -62 87 -92 71 -273 228
-346 298 -66 63 -216 237 -291 339 -40 52 -47 57 -82 57 -32 0 -39 -4 -43 -22z"></path>

				<path d="M5480 1466 c0 -2 7 -9 15 -16 12 -10 15 -10 15 4 0 9 -7 16 -15 16
-8 0 -15 -2 -15 -4z"></path>

				<path d="M4372 2367 l-62 -62 45 -55 c25 -30 51 -75 59 -100 33 -101 92 -460
114 -690 l7 -75 40 -3 c38 -3 42 0 85 55 204 262 387 448 623 628 72 55 77 62
77 97 0 43 11 40 -195 58 -151 13 -266 31 -422 66 -179 40 -207 50 -260 99
l-50 44 -61 -62z"></path>
				<path d="M2281 2396 c-38 -41 -112 -73 -231 -100 -186 -42 -316 -63 -470 -76
-200 -16 -190 -13 -190 -59 0 -35 5 -42 63 -87 113 -88 291 -241 338 -290 56
-60 205 -234 283 -331 54 -68 61 -73 96 -73 l39 0 6 58 c29 266 91 646 117
717 6 17 31 56 56 88 l45 59 -59 59 c-32 32 -61 59 -64 59 -4 0 -17 -11 -29
-24z"></path>
				<path d="M5594 2142 c-12 -4 -240 -224 -508 -489 -473 -466 -487 -482 -484
-516 3 -34 7 -30 533 489 532 526 546 542 459 516z"></path>
				<path d="M5149 1607 l-546 -542 -7 -50 -7 -50 590 590 c325 324 591 591 591
592 0 2 -17 3 -37 2 -36 0 -60 -22 -584 -542z"></path>
				<path d="M5374 2121 c-5 -10 -67 -65 -138 -121 -205 -164 -318 -279 -525 -535
-40 -49 -80 -95 -88 -102 -8 -6 -13 -17 -12 -22 2 -6 186 171 409 394 289 289
399 405 384 405 -12 0 -25 -9 -30 -19z"></path>
				<path d="M5027 1712 c-417 -417 -428 -429 -425 -464 l3 -35 470 463 469 464
-44 0 -45 0 -428 -428z"></path>

			</g>
			<text v-for='item in currentFloor' :key='item.id' 
				:x="item.x" :y="item.y" 
				:position="item.isClick" 
				v-if='item.isClick'
				style="font-size: 24px" fill="#fff">{{item.number}}</text>
		</svg>
	</div>
</template>

<script>
	const floorOne=[
		{number:'2',isClick:true,className:'blue',x:280,y:170},
		{number:'1',isClick:true,className:'blue',x:380,y:170},
		{number:'5.1',isClick:true,className:'red',x:270,y:535},
		{number:'6.1',isClick:true,className:'red',x:370,y:535},
		{number:'7.1',isClick:true,className:'green',x:505,y:405},
		{number:'8.1',isClick:true,className:'green',x:505,y:300},
		{number:'3',isClick:true,className:'yellow',x:145,y:300},
		{number:'4.1',isClick:true,className:'yellow',x:135,y:400}	
	]
	const floorTwo=[
		{number:'2',isClick:false,className:'blue',x:280,y:170},
		{number:'1',isClick:false,className:'blue',x:380,y:170},
		{number:'5.2',isClick:true,className:'red',x:270,y:535},
		{number:'6.2',isClick:true,className:'red',x:370,y:535},
		{number:'7.2',isClick:true,className:'green',x:505,y:405},
		{number:'8.2',isClick:true,className:'green',x:505,y:300},
		{number:'3',isClick:false,className:'yellow',x:145,y:300},
		{number:'4.2',isClick:true,className:'yellow',x:135,y:400}	
	]
	import { mapMutations } from 'vuex'
	export default{
		data(){
			return{
				floor:true,
				currentFloor:floorTwo
			}
		},
		methods:{
			...mapMutations(['set_notExactTitle']),
			siteClick(isClick,num){
				if(isClick){
					this.set_notExactTitle(num+'馆')
					this.$router.push({name:'exhibitionList',params:{siteNum:num}})
					
				}
			},
			switchFloor(num){
				this.floor=!this.floor
				num==1?this.currentFloor=floorOne:this.currentFloor=floorTwo
				
			}
		}
	}
</script>

<style scoped lang="less">
	.exhibition {
		width: 100%;
		height: calc(100vh - 106.6px);
		background: #0C1435;
		position: relative;
		.floor{
			position: absolute;
			width: 100%;
			top:20px;
			button{
				padding: 0 25px;
				margin: 0 20px;
			}
		}

		svg {
			width: 100%;
			height: 100%;
		}

		[position] {
			cursor: pointer;
			stroke: none;
			 -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
			
		}

		.red {
			fill: #F22C67;
		}

		.blue {
			fill: #2C98F2;
		}

		path {
			stroke-width: 5;
		}

		.yellow {
			fill: #F2A62C;
		}

		.green {
			fill: #27D980;
		}
	}
</style>
