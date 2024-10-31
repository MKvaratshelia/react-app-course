import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
