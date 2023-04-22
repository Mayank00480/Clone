
import * as api from '../API/index.js'

export const askQuestion = (questionData,navigate) => async(dispatch)=>{
try{
const { data } = await api.postQuestion(questionData)
dispatch({type : "POST_QUESTION", payload : data })
dispatch(fetchAllQuestions())
navigate('/')
}
catch(err)
{
    console.log(err)
}
}
 
export const fetchAllQuestions =() => async(dispatch)=>{
try{
    const {data} = await api.getAllQuestions()
    dispatch({type : "FETCH_ALL_QUESTIONS",payload :data})
}
catch(error)
{
    console.log(error);
}
}



