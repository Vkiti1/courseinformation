import React from 'react'
import Part from './Part'

const Content = ({course}) => {

  let total = 0

  const calculateTotal= (x) =>{
    total+=x
  }

  return(
    <div>
        {course.map(function(c){
          total = 0
          return(
            <div>
              <h2 key={c.id}>{c.name}</h2>
              {c.parts.map(function(part){
                calculateTotal(part.exercises)
                  return(
                  <Part key={`${c.id}${part.id}`} name={part.name} number={part.exercises}/>
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