<template>
	<tr class="row">
		<main-column
			v-for="(columnValue, columnIndex) in values"
			:key="`${columnValue} ${columnIndex}`"
			:type="type"
			:value="columnValue"
			:column-index="columnIndex"
			@sort-column="sortColumn($event)"
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

const emit = defineEmits(['sortColumn']);

const sortColumn = (columnIndex: number): void => {
	emit('sortColumn', columnIndex)
}
</script>

<style scoped lang="scss">

</style>