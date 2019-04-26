import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { formReducer } from './form.reducer';
import { FormState } from './form.model';

export const FEATURE_NAME = 'examples';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  form: formReducer
};

export interface ExamplesState {
  form: FormState;
}

export interface State {
  examples: ExamplesState;
}
