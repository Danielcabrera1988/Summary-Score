import { summary } from "../summary";
import "../index.css";

export const CardScore = () => {
  const summ = summary;
  return (
    <>
      <div className="container">
        <div className="container-card-result">
          <h3>Your Result</h3>
          <div className="card-result-number">
            <h1>76</h1>
            <span>of 100</span>
          </div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="container-summary">
          <h3>Summary</h3>
          {summ.map((summary) => (
            <li
              key={summary.category}
              style={{
                color: `${summary.color}`,
                background: `${summary.background}`
              }}
            >
              <img src={summary.icon} />
              <p>{summary.category} </p>
              <span>{summary.score} / 100</span>
            </li>
          ))}
          <button className="summary-button">Continue</button>
        </div>
      </div>
    </>
  );
};
