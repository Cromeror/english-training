import {Form, Formik} from "formik";
import {Button} from "@mui/material";
import * as React from "react";
import {useMemo} from "react";
import {Question} from "../domine/Question";
import {VocabularyQuestion} from "./VocabularyQuestion";
import {VocabularyResponse} from "./VocabularyResultItem";

interface VocabularyFormProps {
    questions: Question[];
    onSubmit: (results: VocabularyResponse[]) => void;
}

export const VocabularyForm = ({questions, onSubmit}: VocabularyFormProps) => {
    const initialValues = useMemo(() => {
        let defaultInputValues = {}
        questions.forEach((question, indexQuestion) => {
            defaultInputValues[`question-${indexQuestion}`] = ""

        })
        return defaultInputValues
    }, [])

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                const valuesAsArray = Object.values(values);
                const evaluated: VocabularyResponse[] = valuesAsArray.map((answer, index) => (
                    {
                        ...questions[index],
                        answer: answer,
                        isCorrect: answer === questions[index].correctAnswer
                    }
                ))

                onSubmit(evaluated)
            }}
        >
            <Form
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }
                }>
                {
                    questions.map((data, index) => {
                        return (
                            <VocabularyQuestion question={data} key={index} id={`question-${index}`}/>
                        )
                    })
                }
                <Button type="submit">Submit</Button>
            </Form>
        </Formik>)
}
