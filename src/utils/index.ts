const SPLIT_REGEX = /{[0-9]*}/

export const splitQuestionByEmptyWords = (sentence: string): string[] => {
    return sentence.split(SPLIT_REGEX)
}

export const countInputsQuestions = (sentence: string): number => {
    const questionSplit = sentence.split(SPLIT_REGEX)
    return questionSplit.length - 1
}

export const replaceAnswersFromArray = (sentence: string, answers: string[], highlight = false) => {
    return answers.reduce((accum, current, index) => {
        const replacement = highlight ? `<b>${current}</b>` : current
        return accum.replace(`{${index}}`, replacement)
    }, sentence)
}
