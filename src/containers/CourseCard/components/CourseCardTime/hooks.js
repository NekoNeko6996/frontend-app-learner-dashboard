import { reduxHooks } from 'hooks';

export const useCardDetailsData = ({ cardId }) => {
  const courseRun = reduxHooks.useCardCourseRunData(cardId);
  return {
    courseRun,
  };
};

export default useCardDetailsData;
