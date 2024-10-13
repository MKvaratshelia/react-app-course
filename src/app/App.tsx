import { Route, Routes, Link } from 'react-router-dom';

import './styles/index.scss';

import { Suspense } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';

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
                    <Route path='/about' element={<AboutPage />}>
                        About
                    </Route>
                    <Route path='/' element={<MainPage />}>
                        Main
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};
export default App;
