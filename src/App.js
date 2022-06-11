import { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import { About, Contact, Home, Loading, Skills, Work } from './pages/';
import { EmailBlock, Footer, NavigationUp, SocialBlock } from './components';
import spanish from './language/Spanish.json';
import english from './language/English.json';

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
                <NavigationUp
                    language={language}
                    setLanguage={setLanguage}
                    langJson={language ? english : spanish}
                />
                <EmailBlock />
                <SocialBlock />
                <div className="container-info-body">
                    <Home langJson={language ? english : spanish} />
                    <About langJson={language ? english : spanish} />
                    <Work langJson={language ? english : spanish} />
                    <Skills langJson={language ? english : spanish} />
                    <Contact langJson={language ? english : spanish} />
                    <Footer langJson={language ? english : spanish} />
                </div>
            </div>
        );
    }
}

export default App;
