const App = () => {
  const course = 'Half Stack application development'
  const content=[
    { part: 'Fundamentals of React', ex: 10 },
    { part: 'Using props to pass data', ex: 7 },
    { part: 'State of a component', ex: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.content[0].part} ex={props.content[0].ex} />
      <Part part={props.content[1].part} ex={props.content[1].ex} />
      <Part part={props.content[2].part} ex={props.content[2].ex} />
    </div>
  )
}

const Total = (props) => {
  return (
  <div>
    <p>Number of exercises {props.content[0].ex + props.content[1].ex + props.content[2].ex}</p>
  </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.ex}
    </div>   
  )
}

export default App