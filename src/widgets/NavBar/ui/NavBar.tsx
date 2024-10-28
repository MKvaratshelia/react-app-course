import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navBar, {}, [className])}>
            <nav className={cls.links}>
                <AppLink theme='secondary' className={cls.mainLink} to={'/'}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme='secondary' to={'/about'}>
                    {t('О нас')}
                </AppLink>
            </nav>
        </div>
    );
};
