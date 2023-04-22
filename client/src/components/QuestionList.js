import React from 'react'
import Extra from './Extra'

export default function QuestionList(props) {
  return (
   <div>
   {props.questionList.map((question, index) =>
   (<Extra Question ={question} key ={index}/>
   ))}


    </div>
  
  );
}
