import { Route, Routes, Link } from 'react-router-dom';
import { Counter } from './components/Counter';
import './styles/index.scss';

import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';

import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <nav>
                <Link to={'/'}>Main</Link>
                <Link to={'/about'}>About</Link>
            </nav>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />}>
                        About
                    </Route>
                    <Route path='/' element={<MainPageAsync />}>
                        Main
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};
export default App;
