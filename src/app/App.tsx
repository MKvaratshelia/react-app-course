import { Link } from 'react-router-dom';

import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar/ui/NavBar';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <NavBar />

            <AppRouter />
        </div>
    );
};
export default App;
