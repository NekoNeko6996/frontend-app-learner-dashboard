import React from 'react';
import { Helmet } from 'react-helmet';

import { useIntl } from '@edx/frontend-platform/i18n';
import { logError } from '@edx/frontend-platform/logging';
import { initializeHotjar } from '@edx/frontend-enterprise-hotjar';

import { ErrorPage, AppContext } from '@edx/frontend-platform/react';
import { FooterSlot } from '@edx/frontend-component-footer';
import { Alert } from '@openedx/paragon';

import { RequestKeys } from 'data/constants/requests';
import store from 'data/store';
import {
  selectors,
  actions,
} from 'data/redux';
import { reduxHooks } from 'hooks';
import Dashboard from 'containers/Dashboard';

import track from 'tracking';

import fakeData from 'data/services/lms/fakeData/courses';

import AppWrapper from 'containers/AppWrapper';
import LearnerDashboardHeader from 'containers/LearnerDashboardHeader';

//
import { CustomFooter } from '@nekoneko6996/cusc-custom-brand';
import { ctuLogoImgSrc, primaryNav, cuscLogoImgSrc } from './learner-dashboard-brand/learner-header';

import { getConfig } from '@edx/frontend-platform';
import messages from './messages';
import './App.scss';

export const App = () => {
  const { authenticatedUser } = React.useContext(AppContext);
  const { formatMessage } = useIntl();
  const isFailed = {
    initialize: reduxHooks.useRequestIsFailed(RequestKeys.initialize),
    refreshList: reduxHooks.useRequestIsFailed(RequestKeys.refreshList),
  };
  const hasNetworkFailure = isFailed.initialize || isFailed.refreshList;
  const { supportEmail } = reduxHooks.usePlatformSettingsData();
  const loadData = reduxHooks.useLoadData();

  React.useEffect(() => {
    if (authenticatedUser?.administrator || getConfig().NODE_ENV === 'development') {
      window.loadEmptyData = () => {
        loadData({ ...fakeData.globalData, courses: [] });
      };
      window.loadMockData = () => {
        loadData({
          ...fakeData.globalData,
          courses: [
            ...fakeData.courseRunData,
            ...fakeData.entitlementData,
          ],
        });
      };
      window.store = store;
      window.selectors = selectors;
      window.actions = actions;
      window.track = track;
    }
    if (getConfig().HOTJAR_APP_ID) {
      try {
        initializeHotjar({
          hotjarId: getConfig().HOTJAR_APP_ID,
          hotjarVersion: getConfig().HOTJAR_VERSION,
          hotjarDebug: !!getConfig().HOTJAR_DEBUG,
        });
      } catch (error) {
        logError(error);
      }
    }
  }, [authenticatedUser, loadData]);

  // Brand customizations
  const cuscLogo = cuscLogoImgSrc();
  const ctuLogo = ctuLogoImgSrc();

  const logoRedirectURL = {
    ctu: "https://www.ctu.edu.vn/",
    cusc: "https://cusc.ctu.edu.vn/cms/"
  };

  return (
    <>
      <Helmet>
        <title>{formatMessage(messages.pageTitle)}</title>
        {/* <link rel="shortcut icon" href={getConfig().FAVICON_URL} type="image/x-icon" /> */}
        <link rel="shortcut icon" href={cuscLogo} type="image/x-icon" />
      </Helmet>
      <div>
        <LearnerDashboardHeader />
        <AppWrapper>
          <main id="main" style={{ minHeight: "100vh" }}>
            {hasNetworkFailure
              ? (
                <Alert variant="danger">
                  <ErrorPage message={formatMessage(messages.errorMessage, { supportEmail })} />
                </Alert>
              ) : (
                <Dashboard />
              )}
          </main>
        </AppWrapper>
        <CustomFooter firstLogo={cuscLogo} secondLogo={ctuLogo} firstLogoRedirectURL={logoRedirectURL.cusc} secondLogoRedirectURL={logoRedirectURL.ctu} />
      </div>
    </>
  );
};

export default App;
