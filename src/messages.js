import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  loadingSR: {
    id: 'learner-dash.loadingSR',
    description: 'Văn bản cho trình đọc màn hình khi trang đang tải',
    defaultMessage: 'Đang tải...',
  },
  errorMessage: {
    id: 'learner-dash.error-page-message',
    defaultMessage: 'Nếu bạn gặp lỗi lặp lại, vui lòng gửi email hỗ trợ tại {supportEmail}',
    description: 'Thông báo trang lỗi',
  },
  pageTitle: {
    id: 'learner-dash.title',
    description: 'Tiêu đề trang: Trang chủ người học',
    defaultMessage: 'Trang chủ người học',
  },
});

export default messages;