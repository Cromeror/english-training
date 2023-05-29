import {UncompletedSentence} from "../domine/UncompletedSentence";

export const dataSentencesToComplete: UncompletedSentence[] = [
    {
        text: "Alex ** alone before his trip to London",
        tips: ["no", "travel"],
        answers: [
            "Alex had not traveled alone before his trip to London",
            "Alex hadn't traveled alone before his trip to London"
        ]
    },
    {
        text: "I ** at home all day. I had to get out and go for a walk.",
        tips: ["be"],
        answers: [
            "I had been at home all day. I had to get out and go for a walk."
        ]
    },
    {
        text: "She ** Shakespeare before.",
        tips: ["teach"],
        answers: ["She had taught Shakespeare before."]
    },
    {
        text: "** you ** breakfast when you left the house?",
        tips: ["eat"],
        answers: ["had you eaten breakfast when you left the house?"]
    },
    {
        text: "We ** the document when the computer crashed.",
        tips: ["no", "finish"],
        answers: [
            "We had not finished the document when the computer crashed.",
            "We hadn't finished the document when the computer crashed."
        ]
    },
    {
        text: "We ** never ** a whale before our trip.",
        tips: ["see"],
        answers: ["We had never seen a whale before our trip."]
    },
    {
        text: "She ** dinner before leaving for work that day.",
        tips: ["prepare"],
        answers: ["She had prepared dinner before leaving for work that day."]
    },
    {
        text: "I ** all my homework when I went to class.",
        tips: ["do", "no"],
        answers: [
            "I had not done all my homework when I went to class.",
            "I hadn't done all my homework when I went to class."
        ]
    },
    {
        text: "** you ** her before?",
        tips: ["meet"],
        answers: ["Had you met her before?"]
    }
]
