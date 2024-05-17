<template>
	<component :is="tag" class="column">
		{{ value }}
	</component>
</template>

<script setup lang="ts">
import { TableValue } from "@/types";

withDefaults(
	defineProps<{
		value: string | TableValue,
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