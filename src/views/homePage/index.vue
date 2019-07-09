<template>
	<div>
		<h1>this is homePage!</h1>
	</div>
</template>

<script>
    import {httpGet} from '@/requset/http'
	export default{
       
		methods:{
            getImgCode(){
                httpGet(this.interfaceUrl.imgCode,new Date()).then(r=>{

                })
            },
			login(){
				this.$router.push({name:"login"})
			}
		}
	}
</script>

<style>
</style>
