<template>
	<secrion class="home">
		<div class="container">
			<main-table
				:values="tableService.table.values"
				:titles="tableService.table.titles"
			/>
		</div>
	</secrion>
</template>

<script setup lang="ts">
import MainTable from "@/components/MainTable.vue";
import { TableService } from "@/services";
import { Ref, ref } from "vue";
import { TableContract } from "@/contracts";

const createTableService = (): Ref<TableContract> => {
	return ref(TableService.initService());
}

const tableService: Ref<TableContract> = createTableService();
</script>

<style scoped lang="scss">
.home {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 100vw
}
.container {
	padding: 50px;
	overflow: scroll;
	&::-webkit-scrollbar {
		width: 0;
	}
}
</style>
