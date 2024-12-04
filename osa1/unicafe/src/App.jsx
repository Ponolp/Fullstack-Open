import { useState } from 'react'

const StatisticLine = (props) => (
  <p>{props.text}: {props.value}</p>
)

const Button = (props) => (
  <button onClick={props.handleClick}> 
    {props.text}
  </button>
)

const Statistic = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = all ? (good - bad) / all : 0;
  const positivePercentage = all ? (good / all) * 100 : 0;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average.toFixed(1)}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positivePercentage.toFixed(1)}%</td>
          </tr>
        </tbody>       
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App