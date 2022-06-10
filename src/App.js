import { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import { About, Contact, Home, Loading, Skills, Work } from './pages/';
import { EmailBlock, Footer, NavigationUp, SocialBlock } from './components';

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [loading, setLoading] = useState(true);
    const [language, setLanguage] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 6000);

    if (loading) {
        return <Loading />;
    } else {
        return (
            <div className="container-body">
                <NavigationUp language={language} setLanguage={setLanguage} />
                <EmailBlock />
                <SocialBlock />
                <div className="container-info-body">
                    <Home />
                    <About />
                    <Work />
                    <Skills />
                    <Contact />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
