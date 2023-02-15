import './Quiz.css'
import QuizTitle from "./QuizTitle/QuizTitle";
import Question from "./Question/Question";
import QuestionInputRange from "./QuestionInput/QuestionInputRange";
import QuestionInputText from "./QuestionInput/QuestionInputText";

export default function Quiz() {
    return (
        <div className='quiz-card'>
            <QuizTitle title='How Do You Like Front End?'></QuizTitle>
            <Question question='How much you love front end?'></Question>
            <QuestionInputRange></QuestionInputRange>
            <Question question='What is your favorite front end feature/topic?'></Question>
            <QuestionInputText></QuestionInputText>
        </div>
    )
}