export class RandomizeTrait {
    public static getRandomValue(minValue: number = 1, maxValue: number = 10): number {
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
}