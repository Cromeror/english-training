import {UncompletedSentence} from "../domine/UncompletedSentence";

export const dataSentencesToComplete: UncompletedSentence[] = [
    {
        sentence: "Alex {0} alone before his trip to London",
        tips: ["no", "travel"],
        answers: {
            "{0}": ["had not traveled", "hadn't traveled"]
        }
    },
    {
        sentence: "I {0} at home all day. I had to get out and go for a walk.",
        tips: ["be"],
        answers: {
            "{0}": ["had been"]
        }
    },
    {
        sentence: "She {0} Shakespeare before.",
        tips: ["teach"],
        answers: {
            "{0}": ["had taught"]
        }
    },
    {
        sentence: "{0} you {1} breakfast when you left the house?",
        tips: ["eat"],
        answers: {
            "{0}": ["had"],
            "{1}": ["eaten"]
        }
    },
    {
        sentence: "We {0} the document when the computer crashed.",
        tips: ["no", "finish"],
        answers: {
            "{0}": ["had not finished", "hadn't finished"]
        }
    },
    {
        sentence: "We {0} never {1} a whale before our trip.",
        tips: ["see"],
        answers: {
            "{0}": ["had"],
            "{1}": ["seen"]
        }
    },
    {
        sentence: "She {0} dinner before leaving for work that day.",
        tips: ["prepare"],
        answers: {
            "{0}": ["had prepared"]
        }
    },
    {
        sentence: "I {0} all my homework when I went to class.",
        tips: ["do", "no"],
        answers: {
            "{0}": ["had not done", "hadn't done"]
        }
    },
    {
        sentence: "{0} you {1} her before?",
        tips: ["meet"],
        answers: {
            "{0}": ["had"],
            "{1}": ["met"]
        }
    }
]
