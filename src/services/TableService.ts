import { TableBuilderContract, TableContract } from "@/contracts";
import { TableType } from "@/types";
import { TableBuilder } from "@/builders";
import { TableModel } from "@/models";

export class TableService {
    private readonly tableModel: TableType;

    private constructor(tableBuilder: typeof TableBuilder = TableBuilder) {
        const builder: TableBuilderContract = tableBuilder.InitBuilder(TableModel);

        this.tableModel = builder.buildTable();
    }

    public get table(): TableType {
        return this.tableModel;
    }

    public static initService(tableBuilder: typeof TableBuilder = TableBuilder): TableContract {
        return new TableService(tableBuilder);
    }
}