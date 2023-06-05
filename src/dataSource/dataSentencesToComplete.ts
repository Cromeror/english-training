import {UncompletedSentence} from "../domine/UncompletedSentence";

export const dataSentencesToComplete: UncompletedSentence[] = [
    {
        sentence: "Alex {0} alone before his trip to London",
        clues: ["no", "travel"],
        answers: {
            "{0}": ["had not traveled", "hadn't traveled"]
        }
    },
    {
        sentence: "I {0} at home all day. I had to get out and go for a walk.",
        clues: ["be"],
        answers: {
            "{0}": ["had been"]
        }
    },
    {
        sentence: "She {0} Shakespeare before.",
        clues: ["teach"],
        answers: {
            "{0}": ["had taught"]
        }
    },
    {
        sentence: "{0} you {1} breakfast when you left the house?",
        clues: ["eat"],
        answers: {
            "{0}": ["had"],
            "{1}": ["eaten"]
        }
    },
    {
        sentence: "We {0} the document when the computer crashed.",
        clues: ["no", "finish"],
        answers: {
            "{0}": ["had not finished", "hadn't finished"]
        }
    },
    {
        sentence: "We {0} never {1} a whale before our trip.",
        clues: ["see"],
        answers: {
            "{0}": ["had"],
            "{1}": ["seen"]
        }
    },
    {
        sentence: "She {0} dinner before leaving for work that day.",
        clues: ["prepare"],
        answers: {
            "{0}": ["had prepared"]
        }
    },
    {
        sentence: "I {0} all my homework when I went to class.",
        clues: ["do", "no"],
        answers: {
            "{0}": ["had not done", "hadn't done"]
        }
    },
    {
        sentence: "{0} you {1} her before?",
        clues: ["meet"],
        answers: {
            "{0}": ["had"],
            "{1}": ["met"]
        }
    }
]
