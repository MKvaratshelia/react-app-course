import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => {
                    return <Route path={path} element={element} key={path} />;
                })}
            </Routes>
        </Suspense>
    );
};
