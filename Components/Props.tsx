import React from "react"

interface GreetingProps {
    name: string;
}

interface Introduce {
    age: number,
    school: string
}


export function Greeting(props: GreetingProps) {
    return <h1>Hello, {props.name}</h1>
}
  
export function Introduce(props: Introduce) {
    return(
      <>
        <h2>I'm {props.age} now!</h2>
        <h3>I'm studying at {props.school}</h3>
      </>
    )
  }