import { useState } from "react";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  const [step, setStep] = useState("home");
  const [resultsData, setResultsData] = useState(null);

  return (
    <div className="app">
      {step === "home" && <HomePage onStart={() => setStep("quiz")} />}

      {step === "quiz" && (
        <QuizPage
          onBack={() => setStep("home")}
          onComplete={(data) => {
            setResultsData(data);
            setStep("results");
          }}
        />
      )}

      {step === "results" && (
        <ResultsPage
          data={resultsData}
          onRestart={() => {
            setResultsData(null);
            setStep("quiz");
          }}
          onGoHome={() => {
            setResultsData(null);
            setStep("home");
          }}
        />
      )}
    </div>
  );
}
