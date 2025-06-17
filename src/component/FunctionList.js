import React from 'react'
import Person from './Person'

function FunctionList() 
{
    const persons = [
        {
            id:1,
            name:'adarsh'
        },
        {
            id:2,
            name:'sweet'
        },
        {
            id:3,
            name:'newt'
        }
    ]
    const namelist = persons.map( person => <Person key={person.id} person={person}></Person>)
    return <div>{namelist}</div>
}

export default FunctionList
