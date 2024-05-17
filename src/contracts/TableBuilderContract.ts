import { TableType } from "@/types";

export interface TableBuilderContract {
    buildTable(): TableType;
}