import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

// createSelector позволяет вернуть селектор с учетом других селекторов, например произвести какието расчеты
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
