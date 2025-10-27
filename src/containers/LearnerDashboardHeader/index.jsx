import React from 'react';

import MasqueradeBar from 'containers/MasqueradeBar';
import { AppContext } from '@edx/frontend-platform/react';
import Header from '@edx/frontend-component-header';
import { reduxHooks } from 'hooks';
import urls from 'data/services/lms/urls';

import ConfirmEmailBanner from './ConfirmEmailBanner';

import { useLearnerDashboardHeaderMenu, findCoursesNavClicked } from './hooks';

import { CustomHeader } from '@nekoneko6996/cusc-custom-brand';
import { ctuLogoImgSrc, cuscLogoImgSrc, primaryNav } from '../../learner-dashboard-brand/learner-header';

import './index.scss';

export const LearnerDashboardHeader = () => {
  const { authenticatedUser } = React.useContext(AppContext);
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();

  const exploreCoursesClick = () => {
    findCoursesNavClicked(urls.baseAppUrl(courseSearchUrl));
  };

  const learnerHomeHeaderMenu = useLearnerDashboardHeaderMenu({
    courseSearchUrl,
    authenticatedUser,
    exploreCoursesClick,
  }); 
  
  const primary = primaryNav();
  const cuscLogo = cuscLogoImgSrc();
  const ctuLogo = ctuLogoImgSrc();
  

  return (
    <>
      <ConfirmEmailBanner />
      <CustomHeader firstLogo={ctuLogo} secondLogo={cuscLogo} primaryNav={primary} secondaryNav={[]}/>
      <MasqueradeBar />
    </>
  );
};

LearnerDashboardHeader.propTypes = {};

export default LearnerDashboardHeader;
