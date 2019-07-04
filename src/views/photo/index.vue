<template>
	<div class="about">
		<div class="camera-photo" ref="divGenres" v-show="isPhoto" @click="choiceImg">
			<img style="width:300px;height:300px;" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1528077222&di=69a2ffcffd12e35216ab71da7a610abe&src=http://img.zcool.cn/community/01f15555b4df7e6ac725ca50c172a1.png@2o.png" />
			<br>
			<span>请选择图片上传</span>
			<input type="file" ref="uploadImage" @change="onFileChange" accept="image/*" capture="camera" style="display: none;">
		</div>

		<div class="list-li" v-show="show">
			<div style="display: inline-block;">
				<a class="list-link" @click='previewImage(imgsrc)'>
					<img :src="imgsrc">
				</a>
				<span class="list-img-close" @click='delImage'></span>
			</div>
			<div class="add-preview" v-show="isPreview" @click="closePreview">
				<img :src="previewImg">
			</div>
			<button type="button" class="upload-button" @click="upload">图片上传</button>
			<button type="button" class="upload-button" @click="save">图片保存</button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				imgsrc: '', //上传的·图片的地址
				show: false, //图片放大预览
				previewImg: '', //预览图片的地址
				isPreview: false, //是否预览当前图片
				isPhoto: true,
				uploadFile: null
			}
		},
		methods: {
			
			save(){
				plus.gallery.save(this.imgsrc,function(e){
					plus.nativeUI.toast("保存成功：" + e.message);
					
				},function(e){
					plus.nativeUI.toast("保存拍照文件错误：" + e.message);
				})
				
			},
			choiceImg() {
				let self = this;
				if(!window.plus) {
					alert('asdllasdn!')
					self.addPic() //如果不支持plus,就用本地相册上传即可
					return;
				}

				let title = "选择照片"
				let btns = ['拍照', '相册']

				var func = function(e) {
					var index = e.index;

					if(index == 1) self.choiceCamera();
					if(index == 2) self.choicePic();
				}

				if(title && btns && btns.length > 0) {
					var btnArray = [];
					for(var i = 0; i < btns.length; i++) {
						btnArray.push({
							title: btns[i]
						});
					}

					plus.nativeUI.actionSheet({
						title: title,
						cancel: '取消',
						buttons: btnArray
					}, function(e) {
						if(func) func(e);
					});
				}
			},

			choiceCamera() {
				let self = this;
				var cmr = plus.camera.getCamera();
				cmr.captureImage(function(path) {
				

					plus.io.resolveLocalFileSystemURL(path, function(entry) {
						self.imgsrc = entry.toLocalURL();
						self.show = true;

					}, function(e) {
						plus.nativeUI.toast("读取拍照文件错误：" + e.message);
					});
				}, function(e) {}, {
					index: 1,
					filename: "_doc/camera/aaa.png"
				});
			},

			choicePic() {
				let self = this;
				plus.gallery.pick(function(p) {
					plus.io.resolveLocalFileSystemURL(p, function(entry) {
						self.imgsrc = entry.toLocalURL();
						self.show = true;
					}, function(e) {
						plus.nativeUI.toast("读取拍照文件错误：" + e.message);
					});
				}, function(e) {
					plus.nativeUI.toast("读取拍照文件错误：" + e.message);
				}, {
					filename: "_doc/camera/",
					filter: "image"
				});
			},

			upload() {
				var self = this
				var wt;
				if(window.plus)
					wt = plus.nativeUI.showWaiting();

				var img = new Image,
					width = 512, //image resize   压缩后的宽
					quality = 0.5, //image quality  压缩质量
					canvas = document.createElement("canvas"),
					drawer = canvas.getContext("2d");
				img.src = self.imgsrc;
				img.onload = function() { //利用canvas压缩图片
					canvas.width = width;
					canvas.height = width * (img.height / img.width);
					drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
					var base64 = canvas.toDataURL("image/*", quality);
					var pic = base64.split(',')[1]; //图片的base64编码内容
					var f = self.imgsrc;
					var filename = f.replace(f.substring(0, f.lastIndexOf('/') + 1), ''); //图片名称

					if(self.uploadFile !== null) { //addPic方法得到的图片文件
						filename = self.uploadFile.name
						let reader = new FileReader();
						reader.readAsDataURL(self.uploadFile);
						reader.onload = function(e) {
							img.src = e.target.result;
						}
						img.onload = function() {
							canvas.width = width;
							canvas.height = width * (img.height / img.width);
							drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
							base64 = canvas.toDataURL("image/*", quality);
							pic = base64.split(',')[1];
						}
					}　　　　　　 //此处是将图片上传到服务器的代码，略过
				}
			},

			onFileChange(e) {
				let self = this;
				let files = e.target.files || e.dataTransfer.files;
				if(!files.length) return;
				let file = files[0]; //File对象
				self.uploadFile = file;
				let reader = new FileReader(); //FileReader对象
				reader.readAsDataURL(file); //该方法会读取指定的 Blob 或 File 对象。读取操作完成的时候，readyState 会变成已完成（DONE），并触发 loadend 事件，同时 result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容。

				reader.onload = function(e) {
					self.imgsrc = e.target.result; //图片内容的base64编码
					self.show = true;
				}
			},

			addPic: function(e) {
				let els = this.$refs.divGenres.querySelectorAll('input[type=file]')
				els[0].click()
				return false
			},

			delImage: function() {
				this.imgsrc = "";
				this.show = false;
				this.isPreview = false;
			},

			previewImage: function(url) {
				let vm = this;
				vm.isPreview = true;
				vm.previewImg = url;
			},

			closePreview: function() {
				let vm = this;
				vm.isPreview = false;
				vm.previewImg = "";
			},

		}

	}
</script>
<style type="text/css">
	.upload-button {
		display: block;
		margin-top: 10px;
	}
	
	.camera-photo {
		text-align: center;
		margin-top: 80px;
	}
	
	.list-li {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 8px;
		margin-top: 10px;
		position: relative;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	.list-link img {
		width: 150px;
		height: 150px;
	}
	
	.list-link a:visited {
		background-color: #465c71;
		border: 1px #4e667d solid;
		color: #dde4ec;
		display: flex;
		line-height: 1.35em;
		padding: 4px 20px;
		text-decoration: none;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.list-link a:hover {
		background-color: #bfcbd6;
		color: #465c71;
		text-decoration: none;
	}
	
	.list-link a:active {
		background-color: #465c71;
		color: #cfdbe6;
		text-decoration: none;
	}
	
	.list-img-close {
		background: #ffffff url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526905315674&di=4c2d6a6985b34e141f37bc9fae7f2209&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F55%2F73%2F39I58PICCqK_1024.png) no-repeat right top;
		border-color: #ff4a00;
		background-position: center;
		background-size: 35px 35px;
		display: block;
		float: left;
		top: 5px;
		width: 10px;
		height: 10px;
		position: absolute;
		margin-top: 0px;
		margin-left: 135px;
		padding: 8px;
		z-index: 10;
		border-radius: 5px;
		text-align: center;
	}
	
	.add-preview {
		width: 300px;
		height: 300px;
	}
	
	.add-preview img {
		width: 100%;
		height: 100%;
	}
</style>