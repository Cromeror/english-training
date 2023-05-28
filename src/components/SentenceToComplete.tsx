import Grid from "@mui/material/Unstable_Grid2";
import {Input, Typography} from "@mui/material";
import * as React from "react";
import {Fragment} from "react";
import {Field} from "formik";
import {splitQuestionByEmptyWords} from "../utils";

interface SentenceToCompleteProps {
    question: any,
    id: string | number
}

export const SentenceToComplete = ({question, id}: SentenceToCompleteProps) => {

    const questionSplit = splitQuestionByEmptyWords(question.text)

    const sxStyle = {
        border: "1px solid gray",
        borderRadius: 2,
        py: 1,
        px: 2,
        "& > *": {
            marginRight: "10px",
            "&:last-child": {
                marginRight: 0
            }
        }
    }

    return (
        <Grid container alignItems={"center"} sx={sxStyle}>{
            questionSplit.map((part, index) => (
                index === questionSplit.length - 1 ?
                    <Typography key={`${id}-${index}`}>{part}</Typography>
                    : <Fragment key={`${id}-${index}`}>
                        <Typography>{part}</Typography>
                        <Field name={`${id}[${index}]`}>
                            {({field}) => (
                                <Input {...field} type="text"/>
                            )}
                        </Field>
                    </Fragment>
            ))
        }
        </Grid>
    )
}
