import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import AboutComponent from "./components/About/AboutComponent";
import NavBar from "./components/NavBar/NavBar";
import ReposComponent from "./components/Repo/RepoComponent";
import RepositoryDetails from "./components/Repository/RepositoryDetails";
function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="home/:userName" element={<HomeComponent />} />
                <Route
                    path="/about"
                    element={<AboutComponent message="Hello! This is my about component!" />}
                />
                <Route
                    path="/home"
                    element={<HomeComponent />}
                />
                <Route
                    path="/repos"
                    element={<ReposComponent />}
                />
                <Route
                    path="/repos/:repositoryName"
                    element={<RepositoryDetails />}
                />

            </Routes>
        </div>

        
    );
}

export default App;
