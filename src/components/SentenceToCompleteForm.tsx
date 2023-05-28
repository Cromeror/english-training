import {Form, Formik} from "formik";
import {SentenceToComplete} from "./SentenceToComplete";
import {Button} from "@mui/material";
import * as React from "react";
import {useMemo} from "react";
import {countInputsQuestions} from "../utils";
import {UncompletedSentence} from "../domine/UncompletedSentence";

interface QuestionAnswered extends UncompletedSentence {
    correct: boolean
}

interface SentenceToCompleteFormProps {
    sentences: UncompletedSentence[];
    onSubmit: (results: QuestionAnswered[]) => void;
}

export const SentenceToCompleteForm = ({sentences, onSubmit}: SentenceToCompleteFormProps) => {

    const initialValues = useMemo(() => {
        let defaultInputValues = {}
        sentences.forEach((question, indexQuestion) => {
            const count = countInputsQuestions(question.text)
            defaultInputValues[`question-${indexQuestion}`] = Array.apply(null, Array(count)).map(() => "")

        })
        return defaultInputValues
    }, [])


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {

                const valuesAsArray = Object.values(values);

                const evaluated: QuestionAnswered[] = valuesAsArray.map((answers, index) => {
                    const rebuiltAnswer = sentences[index].text.replace("**", answers.join(" "))
                    return {
                        ...sentences[index],
                        correct: sentences[index].answers.find((answer) => answer === rebuiltAnswer)?.length > 0
                    }
                })

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
                    sentences.map((data, index) => {
                        return (
                            <SentenceToComplete question={data} key={index} id={`question-${index}`}/>
                        )
                    })
                }
                <Button type="submit">Submit</Button>
            </Form>
        </Formik>)
}
