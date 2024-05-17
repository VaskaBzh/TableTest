import { RandomizeTrait } from "@/traits";
import { TableType } from "@/types";
import { TableBuilderContract } from "@/contracts";
import { TableModel } from "@/models";
import { TableTitle } from "@/consts";
import {TextFormatter} from "@/formatters";

export class TableBuilder implements TableBuilderContract {
    private tableSize: number;
    private tableModel: TableType;

    private constructor(tableModel: typeof TableModel = TableModel) {
        this.setTableSize()
            .setTableModel(tableModel);
    }

    private setTableSize(): this {
        this.tableSize = RandomizeTrait.getRandomValue(1, 10);

        return this;
    }

    private setTableModel(tableModel: typeof TableModel = TableModel): this {
        this.tableModel = new tableModel();

        return this;
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
                    i + 1,
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