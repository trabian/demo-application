export const REMOVE_JOINT_APPLICATION = 'REMOVE_JOINT_APPLICATION';

export const removeJointApplicant = (index) => {
  return {
    type: REMOVE_JOINT_APPLICATION,
    payload: index
  }
};
