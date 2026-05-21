import {Routes, Route} from "react-router-dom";
import styled from "styled-components";

import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";

import {MainPage} from "./pages/mainPage.tsx";
import {TeamPage} from "./pages/TeamPage.tsx";

import 'swiper/swiper-bundle.css';
import './App.css';

const AppContainer = styled.div`
    max-width: 1920px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: start;
    flex-direction: column;
    padding: 0;
`;

function App() {
    return (
        <AppContainer>
            <Header/>

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/team" element={<TeamPage />} />
            </Routes>

            <Footer/>
        </AppContainer>
    );
}

export default App;