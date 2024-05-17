import { TableValue } from "@/types";

export interface TableComponentContract {
    sortValuesByIndex(indexToSort: number): this;
    get values(): TableValue[];
}