import {Question} from "../domine/Question";
import Grid from "@mui/material/Unstable_Grid2";
import {TextField, Typography} from "@mui/material";
import * as React from "react";
import {Field} from "formik";

interface VocabularyQuestionProps {
    question: Question,
    id: string | number
}

export const VocabularyQuestion = ({question, id}: VocabularyQuestionProps) => {
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
                <Typography key={id} dangerouslySetInnerHTML={{__html: question.text}}/>
                <Field name={id}>
                    {({field}) => <TextField size={"small"} variant="outlined"  {...field} type="text"
                                             autoComplete="off"/>}
                </Field>
            </Grid>
            <Grid container sx={sxTipStyles}>
                {question.clues && question.clues.length > 0 && <Typography>Tips: </Typography>}
                {
                    question.clues?.map((tip, index) => (
                        <Typography key={index}>{tip}</Typography>
                    ))
                }
            </Grid>
        </Grid>
    )
}
