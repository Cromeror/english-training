export interface UncompletedSentence {
    sentence: string;
    clues?: string[];
    answers: {[key: string]: string[]}
}
