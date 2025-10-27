/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  header: {
    id: 'learner-dash.emailSettings.header',
    description: 'Tiêu đề cho modal cài đặt email',
    defaultMessage: 'Nhận email khóa học?',
  },
  emailsOff: {
    id: 'learner-dash.emailSettings.emailsOff',
    description: 'Văn bản chuyển đổi cho modal cài đặt email khi email bị tắt',
    defaultMessage: 'Email khóa học đang tắt',
  },
  emailsOn: {
    id: 'learner-dash.emailSettings.emailsOn',
    description: 'Văn bản chuyển đổi cho modal cài đặt email khi email được bật',
    defaultMessage: 'Email khóa học đang bật',
  },
  description: {
    id: 'learner-dash.emailSettings.description',
    description: 'Mô tả cho modal cài đặt email',
    defaultMessage: 'Email khóa học bao gồm thông tin quan trọng về khóa học của bạn từ giảng viên.',
  },
  nevermind: {
    id: 'learner-dash.emailSettings.nevermind',
    description: 'Hành động hủy cho modal cài đặt email',
    defaultMessage: 'Để sau',
  },
  save: {
    id: 'learner-dash.emailSettings.save',
    description: 'Hành động lưu cho modal cài đặt email',
    defaultMessage: 'Lưu cài đặt',
  },

});

export default messages;