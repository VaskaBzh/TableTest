<template>
	<table class="table">
		<thead class="table__head">
			<main-row :values="titles" type="head" />
		</thead>
		<tbody class="table__body">
			<main-row
				v-for="(rowValues, rowIndex) in values"
				:key="rowIndex"
				:values="rowValues"
			/>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { TableValue } from "@/types";
import { MainRow } from "./ui";

defineProps<{
	titles: string[],
	values: TableValue[]
}>()
</script>

<style scoped lang="scss">
</style>