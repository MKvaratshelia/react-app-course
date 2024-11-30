import { Link } from 'react-router-dom';

// import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/NavBar';
import { getUserInited, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const { theme } = useTheme();
    const inited = useSelector(getUserInited);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div id="app" className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
export default App;
