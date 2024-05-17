<template>
	<tr class="row">
		<main-column
			v-for="(columnValue, columnIndex) in values"
			:tag="
				type === 'body'
					? 'td'
					: 'th'
			"
			:value="columnValue"
			:key="`${columnValue} ${columnIndex}`"
		/>
	</tr>
</template>

<script setup lang="ts">
import { TableValue } from "@/types";
import MainColumn from "./MainColumn.vue";

withDefaults(
	defineProps<{
		values: string[] | TableValue[],
		type?: string,
	}>(),
	{
		type: "body"
	}
)
</script>

<style scoped lang="scss">

</style>