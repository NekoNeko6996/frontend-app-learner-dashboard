import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  confirmNowButton: {
    id: 'leanerDashboard.confirmEmailBanner',
    description: 'Nút gửi email xác nhận và mở modal',
    defaultMessage: 'Xác nhận ngay',
  },
  confirmEmailTextReminderBanner: {
    id: 'leanerDashboard.confirmEmailTextReminderBanner',
    description: 'Văn bản nhắc nhở người dùng xác nhận email',
    defaultMessage: 'Hãy nhớ xác nhận email của bạn để bạn có thể tiếp tục học tập! {confirmNowButton}.',
  },
  verifiedConfirmEmailButton: {
    id: 'leanerDashboard.verifiedConfirmEmailButton',
    description: 'Nút xác nhận đã xác minh email',
    defaultMessage: 'Tôi đã xác nhận email của mình',
  },
  confirmEmailModalHeader: {
    id: 'leanerDashboard.confirmEmailModalHeader',
    description: 'tiêu đề cho modal xác nhận email',
    defaultMessage: 'Xác nhận email của bạn',
  },
  confirmEmailModalBody: {
    id: 'leanerDashboard.confirmEmailModalBody',
    description: 'văn bản gợi ý cho modal xác nhận email',
    defaultMessage: 'Chúng tôi đã gửi cho bạn một email để xác minh tài khoản của bạn. Vui lòng kiểm tra hộp thư đến và nhấp vào nút màu đỏ lớn để xác nhận và tiếp tục học tập.',
  },
  confirmEmailImageAlt: {
    id: 'leanerDashboard.confirmEmailImageAlt',
    description: 'văn bản thay thế (alt) cho hình ảnh xác nhận email',
    defaultMessage: 'nền xác nhận email',
  },
});

export default messages;