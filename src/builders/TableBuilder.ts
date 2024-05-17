import { RandomizeTrait } from "@/traits";
import { TableType } from "@/types";
import { TableBuilderContract } from "@/contracts";
import { TableModel } from "@/models";
import { TableTitle } from "@/consts";
import {TextFormatter} from "@/formatters";

export class TableBuilder implements TableBuilderContract {
    private readonly tableSize: number;
    private readonly tableModel: TableType;

    private constructor(tableModel: typeof TableModel = TableModel) {
        this.tableSize = RandomizeTrait.getRandomValue(1, 10);
        this.tableModel = new tableModel();
    }

    // Основные ручки

    public buildTable(): TableType {
        this.tableModel.tableSize = this.tableSize;

        const minNumberListValue: number = 10 ** (this.tableModel.tableSize - 1);
        const maxNumberListValue: number = (10 ** this.tableModel.tableSize) - 1;

        for (let i: number = 0; i < this.tableSize; i++) {
            this.tableModel.titles.push(
                TextFormatter.ReplaceText(
                    TableTitle,
                    String(i + 1),
                    '{number}'
                )
            )
            this.tableModel.values.push(
                String(RandomizeTrait
                    .getRandomValue(minNumberListValue, maxNumberListValue))
                    .split("")
            );
        }

        return this.tableModel;
    }

    public static InitBuilder(tableModel: typeof TableModel = TableModel): TableBuilderContract {
        return new TableBuilder(tableModel);
    }
}