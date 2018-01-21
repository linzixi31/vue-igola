<template>
	<div>
		<mt-cell title="星级" style="text-align:center"></mt-cell>
		<mt-radio
		  	align="right"
		  	v-model="value"
		  	:options="options"
		  	@change="check"
		  	>
		</mt-radio>
		<mt-button type="primary" size="large">确认</mt-button>
	</div>
</template>