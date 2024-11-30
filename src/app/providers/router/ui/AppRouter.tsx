import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
    AppRoutesProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { PageLoader } from 'widgets/PageLoader';

const renderWithWrapper = (route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{route.element}</div>
        </Suspense>
    );
    return (
        <Route
            key={route.path}
            path={route.path}
            element={
                route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
            }
        />
    );
};

const AppRouter = () => (
    <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
);

export default memo(AppRouter);
