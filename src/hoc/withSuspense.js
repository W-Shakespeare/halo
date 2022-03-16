import React, { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const withSuspense = Component => {
    return props => {
        return (
            <Suspense fallback={<LoadingSpinner />}>
                <Component {...props} />
            </Suspense>
        );
    };
};

export default withSuspense;
