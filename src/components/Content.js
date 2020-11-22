import React from 'react'
import Part from './Part'
import {nanoid} from 'nanoid'

const Content = ({course}) => {

  let total = 0

  const calculateTotal = (x) =>{
    total+=x
  }

  return(
    <div>
        {course.map((c) => {
          total = 0
          return(
            <div key={`${nanoid()}`}>
              <h2>{c.name}</h2>
              {c.parts.map((part) =>{
                calculateTotal(part.exercises)
                  return(
                  <Part key={`${nanoid()}`} name={part.name} number={part.exercises}/>
                  )
                }
              )}
              <p><strong>total of {total} exercises</strong></p>
            </div>
          )
        })}
    </div>
  )
}

export default Content