<template>
	<table class="table">
		<thead class="table__head">
			<main-row
				:values="titles"
				type="head"
				@sort-column="tableComponentService.sortValuesByIndex($event)"
			/>
		</thead>
		<tbody class="table__body">
			<main-row
				v-for="(rowValues, rowIndex) in tableComponentService.values"
				:key="rowIndex"
				:values="rowValues"
			/>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { TableValue } from "@/types";
import { TableComponentContract } from "./contracts";
import { TableComponentService } from "./services";
import { Ref, ref } from "vue";
import MainRow from "./ui/MainRow.vue";

const props = defineProps<{
	titles: string[],
	values: TableValue[]
}>()

const createTableComponentService = (): Ref<TableComponentContract> => {
	return ref(TableComponentService.initService(props.values));
}

const tableComponentService: Ref<TableComponentContract> = createTableComponentService();
</script>

<style scoped lang="scss">
</style>