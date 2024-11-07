import { Link } from 'react-router-dom';

import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { Navbar } from 'widgets/NavBar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
export default App;
