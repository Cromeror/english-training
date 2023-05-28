const SPLIT_REGEX = /\*\*/

export const splitQuestionByEmptyWords = (questionText: string): string[] => {
    return questionText.split(SPLIT_REGEX)
}

export const countInputsQuestions = (question: string): number => {
    const questionSplit = question.split(SPLIT_REGEX)
    return questionSplit.length - 1
}
