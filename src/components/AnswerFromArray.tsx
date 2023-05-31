import React, {Fragment} from "react";
import {Typography} from "@mui/material";
import {splitQuestionByEmptyWords} from "../utils";

interface AnswerFromArrayProps {
    sentence: string;
    answers: string[];
    highlight?: boolean
}

export const AnswerFromArray = ({sentence, answers, highlight}: AnswerFromArrayProps) => {
    const splitSentence = splitQuestionByEmptyWords(sentence);
    let countAnswers = 0

    return (
        <Typography component={"span"}>
            {
                splitSentence.map((split: string, index: number) => {
                    if (index === splitSentence.length - 1) {
                        return split
                    }
                    return (
                        <Fragment key={index}>
                            {split} <b>{answers[countAnswers++]}</b>
                        </Fragment>
                    )
                })}
        </Typography>
    )
}
