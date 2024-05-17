<template>
	<component :is="tag" class="column">
		{{ value }}
	</component>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		value: string | number,
		tag?: string,
	}>(),
	{
		tag: "td"
	}
);
</script>

<style scoped lang="scss">
.column {
	padding: 8px;
	border: 1px solid #000;
	text-align: center;
	color: #000;
}
</style>