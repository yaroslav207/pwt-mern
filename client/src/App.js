import './css/footer.css';
import './css/header.css';
import './css/main.css';
import './css/normalize.css';
import './css/raty.css';
import './css/search-button.css';

import Header from './components/Header'
import Home from './pages/Home'
import Footer from "./components/Footer";



function App() {
    return (
        <>
            <Header />
            {/* Главный контент  */}
            <main>
                <Home/>
            </main>
            {/* Футер  */}
            <Footer/>
        </>
    );
}

export default App;
