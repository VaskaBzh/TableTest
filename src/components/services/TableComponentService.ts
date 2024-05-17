import { TableValue } from "@/types";
import { TableComponentContract } from "../contracts";

export class TableComponentService implements TableComponentContract {
    private readonly savedTableValues: TableValue[];

    private savedSortIndex: number = -1;
    private tableValues: TableValue[];
    private isSorted: boolean = false;

    private constructor(tableValues: TableValue[]) {
        this.savedTableValues = tableValues;
        this.tableValues = tableValues;
    }

    private dropSavedSortIndex(): this {
        this.savedSortIndex = -1;

        return this;
    }

    public sortValuesByIndex(indexToSort: number): this {
        if (this.savedSortIndex !== indexToSort) {
            this.tableValues = this.savedTableValues.sort((a, b) => {
                if (a[indexToSort] < b[indexToSort]) {
                    return -1;
                } else if (a[indexToSort] > b[indexToSort]) {
                    return 1;
                } else {
                    return 0;
                }
            });

            this.isSorted = true;

            return this;
        }

        this.dropSavedSortIndex();
        this.isSorted = false;

        return this;
    }

    public get values(): TableValue[] {
        return this.isSorted
            ? this.tableValues
            : this.savedTableValues;
    }

    public static initService(tableValues: TableValue[]): TableComponentService {
        return new TableComponentService(tableValues);
    }
}