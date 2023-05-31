export interface UncompletedSentence {
    sentence: string;
    tips?: string[];
    answers: {[key: string]: string[]}
}
