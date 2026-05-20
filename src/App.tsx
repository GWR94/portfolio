import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "@/features/portfolio/components/HomePage";
import NavBar from "@/features/navigation/components/NavBar";

function App() {
  return (
    <>
      <HomePage />
      <NavBar />
    </>
  );
}

export default App;
