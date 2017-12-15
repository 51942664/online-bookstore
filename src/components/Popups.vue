<template>
	<!--弹出框-->
	<div class="popup">
		<div>
			<p>{{informa}}</p>
			<p @click="$emit('successself')">确定</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Popups',
	props:['informa'],
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
	//弹出框
	.popup {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 10;
		background: rgba(0, 0, 0, 0.4);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		div {
			width: 284px;
			height: 186px;
			border: 1px solid #666666;
			background: #ffffff;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			p:first-child {
				margin: 50px 0 30px 80px;
			}
			p:last-child {
				width: 120px;
				line-height: 48px;
				border: 1px solid #666666;
				margin: 0 auto;
				text-align: center;
				border-radius: 7px;
			}
		}
	}
</style>
