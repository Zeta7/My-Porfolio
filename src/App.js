import { useState } from 'react';
import './App.css';
import {Loading} from './pages/';
import {NavigationUp} from './components';
function App() {
    const [loading, setLoading] = useState(true);

    setTimeout(() =>{
        setLoading(false);
    }, 5900);

    if(loading){
        return <Loading />
    }else{
        return (
            <div>
                <NavigationUp />
            </div>
        );
    }

}

export default App;
