import {
    FIRST_SPLIT_INDEX,
    SECOND_SPLIT_INDEX,
    FIRST_VALUE_TO_SPLIT,
    SECOND_VALUE_TO_SPLIT
} from "./consts";

export class TextFormatter {
    public static ReplaceText(
        text: string,
        replaceParam: string,
        regExp: string
    ): string {
        let replacedText: string = text;

        if (regExp) {
            replacedText = replacedText.replace(regExp, replaceParam)

            return replacedText;
        }

        const customRegExp: string = FIRST_VALUE_TO_SPLIT
            + replacedText
                .split(FIRST_VALUE_TO_SPLIT)[SECOND_SPLIT_INDEX]
                .split(SECOND_VALUE_TO_SPLIT)[FIRST_SPLIT_INDEX]
            + SECOND_VALUE_TO_SPLIT;

        replacedText = replacedText.replace(customRegExp, replaceParam)

        return replacedText;
    }
}