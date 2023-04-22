import React from 'react'
import './QuestionDetails.css'
import { useParams, Link } from 'react-router-dom'
import Avator from './Avator'
import up from '../Assets/UpVote.svg'
import Down from '../Assets/DownVote.svg'
import { useSelector } from 'react-redux'
import DisplayAnswers from './DisplayAnswers'
export default function QuestionDetails() {
    const { id } = useParams()
    const questionList = useSelector(state => state.questionsReducer)
   

    return (
        <div className="question-details-page">
           {
             questionList.data == null ?
             <h1>Loading ...</h1> : 
              <>
              {
                questionList.data.filter(question => question._id == id).map((question) => (
                    <div key = {question._id}>
                        <section className = "question-details-container">
                            <h1>{question.questionTitle}</h1>
                            <div className = "question-details-container-2">
                         <div className = "question-votes">
                            <img src = {up} alt = "upvotes"/>
                            <p>{question.upVotes - question.downVotes}</p>
                            <img src = {Down} alt = "downvotes"/>
                         </div>
                         <div style = {{width : "100%"}}>
                            <p className ="question-body">{question.questionBody}</p>
                           <div className ="question-details-tags">
                            {question.questionTags.map((tags) => 
                            <p key ={tags} >{tags}</p>)}
                           </div>
                           <div className = "question-actions-user">
                            <div>
                                <button type='button'>Share</button>
                                <button type='button'>Delete</button>
                            </div>
                            <div>
                                <p>asked {question.AskedOn}</p>
                                <Link to = {`/User/${question.userId}`} className = "user-link" style ={{color : "#0086d8"}}>
                                   <Avator backgroundColor = "Orange" px= "8px" py = "5px"> {question.userPosted.charAt(0).toUpperCase()}</Avator>
                                <div>{question.userPosted}</div>
                                </Link>
                            </div>
                           </div>
                         </div>

                            </div>
                        </section>
                   {
                    question.noOfAnswers !== 0 && <section>
                        <h3>{question.noOfAnswers} answers</h3>
                        <DisplayAnswers key = {question._id} question = {question}/>
                    </section>
}
                   <section className = "post-ans-container">
                    <h3>Your Answer</h3>
                    <form>
                        <textarea name = "" id = "" rows = "10" cols = "30" />
                        <input type = "submit" value= 'Post Your Answer' className = "post-ans-btn"/>
                    </form>
                    <p>
                        Browse Other Question Tagged
                        {question.questionTags.map((tags) =>(
                            <Link to = "/Tags" key = {tags} className = "ans-tags"> {tags} </Link>
                        ))
                        } or <Link to = "/AskQuestion" style = {{textDecoration : "none" , color : "#009dff"}}>Ask Your Own Question.</Link>
                    </p>
                    </section>         

                    </div>
                
                
                
                
                )) 
              }
              </>
           }

           </div>
           
           )
}