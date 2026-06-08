import { Route, Routes } from "react-router-dom";
import Test from "./Test";

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<h1>helo</h1>} />
        <Route path="/users" element={<Test />} />
      </Routes>
    );
  }