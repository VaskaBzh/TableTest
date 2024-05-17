<template>
	<component
		:is="
			type === 'body'
				? 'td'
				: 'th'
		"
		class="column"
		@click="sortColumn"
		:class="{
			'column-sortable': type === 'head'
		}"
	>
		{{ value }}
	</component>
</template>

<script setup lang="ts">
import { TableValue } from "@/types";

const props = withDefaults(
	defineProps<{
		value: string | TableValue,
		columnIndex: number,
		type?: string,
	}>(),
	{
		type: "body"
	}
);

const emit = defineEmits(['sortColumn']);

const sortColumn = (): void => {
	if (props.type === "head") {
		emit("sortColumn", props.columnIndex)
	}
}
</script>

<style scoped lang="scss">
.column {
	padding: 8px;
	border: 1px solid #000;
	text-align: center;
	color: #000;
	&-sortable {
		cursor: pointer;
	}
}
</style>