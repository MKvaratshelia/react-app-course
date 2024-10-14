import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cls.navBar, {}, [className])}>
            <nav className={cls.links}>
                <AppLink theme='secondary' className={cls.mainLink} to={'/'}>
                    Main
                </AppLink>
                <AppLink theme='secondary' to={'/about'}>
                    About
                </AppLink>
            </nav>
        </div>
    );
};
