/**
 * Maintains the state of which applicant form is currently selected; used to determine which tab is displayed.
 */

// Simr is a Reducer-creator library that is very useful for creating getter/setter reducers that don't have
// to maintain complicated state.  It makes creating these reducers very clean.
import Simr from 'simr';

export const selectedApplicantReducer = new Simr.Reducer('selectedApplicant', {id: 0});
selectedApplicantReducer.addSetter('id');

// Action creator that sets the `selectedApplicant.selectedApplicant` value
export const setSelectedApplicant = index => Simr.actions.setOn('selectedApplicant', 'id', index);
