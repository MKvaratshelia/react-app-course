import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>...loading</div>}>
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
