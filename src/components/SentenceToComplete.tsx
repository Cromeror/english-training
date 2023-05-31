import Grid from "@mui/material/Unstable_Grid2";
import {Input, Typography} from "@mui/material";
import * as React from "react";
import {Fragment} from "react";
import {Field} from "formik";
import {splitQuestionByEmptyWords} from "../utils";
import {UncompletedSentence} from "../domine/UncompletedSentence";

interface SentenceToCompleteProps {
    question: UncompletedSentence,
    id: string | number
}

export const SentenceToComplete = ({question, id}: SentenceToCompleteProps) => {

    const questionSplit = splitQuestionByEmptyWords(question.sentence)

    const sxStyle = {
        border: "1px solid gray",
        borderRadius: 2,
        py: 1,
        px: 2
    }
    const sxQuestionStyle = {
        "& > *": {
            marginRight: "10px",
            "&:last-child": {
                marginRight: 0
            }
        }
    }

    const sxTipStyles = {
        marginTop: 1,
        "& p": {
            fontWeight: 500,
            fontSize: "0.8rem",
            color: "darkorchid",
            "&:first-child": {
                marginRight: 0.5,
            },
            "&:not(:first-child)": {
                "&:not(:last-child)": {
                    "&:after": {
                        content: '"/"'
                    }
                }
            }
        }
    }

    return (
        <Grid container flexDirection="column" sx={sxStyle}>
            <Grid container alignItems={"center"} sx={sxQuestionStyle}>
                {
                    questionSplit.map((part, index) => (
                        index === questionSplit.length - 1 ?
                            <Typography key={`${id}-${index}`}>{part}</Typography>
                            : <Fragment key={`${id}-${index}`}>
                                <Typography>{part}</Typography>
                                <Field name={`${id}[${index}]`}>
                                    {({field}) => (
                                        <Input {...field} type="text" autoComplete="off"/>
                                    )}
                                </Field>
                            </Fragment>
                    ))
                }
            </Grid>
            <Grid container sx={sxTipStyles}>
                {question.tips && question.tips.length > 0 && <Typography>Tips: </Typography>}
                {
                    question.tips?.map((tip, index) => (
                        <Typography key={index}>{tip}</Typography>
                    ))
                }
            </Grid>
        </Grid>
    )
}
