import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchDoctorsPage from "./components/FetchDoctorsPage";
import FetchPatientsPage from "./components/FetchPatientsPage";
import GlobalNavBar from "./components/GlobalNavBar";
import NewDoctorPage from "./components/NewDoctorPage";

export default function App() {

  const baseUrl = "https://doc-back.onrender.com";


  return (
    <BrowserRouter>
      <GlobalNavBar />
      <Routes>
        <Route path="/" element={<FetchDoctorsPage baseUrl={baseUrl} />} />
        <Route path="/add-new-doctor" element={<NewDoctorPage baseUrl={baseUrl} />} />

        <Route path="/patients" element={<FetchPatientsPage baseUrl={baseUrl} />} />


      </Routes>
    </BrowserRouter>
  )
}






