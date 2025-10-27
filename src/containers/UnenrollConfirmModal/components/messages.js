/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  confirmHeader: {
    id: 'learner-dash.unenrollConfirm.confirm.header',
    description: 'Tiêu đề cho modal xác nhận hủy đăng ký',
    defaultMessage: 'Xác nhận hủy đăng ký',
  },
  confirmText: {
    id: 'learner-dash.unenrollConfirm.confirm.text',
    description: 'Nội dung cho modal xác nhận hủy đăng ký',
    defaultMessage: 'Bạn có chắc chắn muốn hủy đăng ký khóa học {courseTitle} không?',
  },
  confirmCancel: {
    id: 'learner-dash.unenrollConfirm.confirm.cancel',
    description: 'Hành động hủy cho modal xác nhận hủy đăng ký',
    defaultMessage: 'Hủy',
  },
  confirmUnenroll: {
    id: 'learner-dash.unenrollConfirm.confirm.unenroll',
    description: 'Hành động xác nhận cho modal xác nhận hủy đăng ký',
    defaultMessage: 'Hủy đăng ký',
  },
  reasonHeading: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.heading',
    description: 'Tiêu đề cho modal lý do hủy đăng ký',
    defaultMessage: 'Tại sao bạn hủy đăng ký?',
  },
  reasonSkip: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.skip',
    description: 'Hành động bỏ qua cho modal lý do hủy đăng ký',
    defaultMessage: 'Bỏ qua khảo sát',
  },
  reasonSubmit: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.submit',
    description: 'Hành động gửi cho modal lý do hủy đăng ký',
    defaultMessage: 'Hủy đăng ký',
  },
  finishHeading: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.heading',
    description: 'Tiêu đề cho modal hoàn tất hủy đăng ký',
    defaultMessage: 'Hủy đăng ký thành công',
  },
  finishText: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.text',
    description: 'Nội dung cho modal hoàn tất hủy đăng ký',
    defaultMessage: 'Bạn đã hủy đăng ký khóa học {courseTitle}',
  },
  finishReturn: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.return',
    description: 'Hành động quay lại cho modal hoàn tất hủy đăng ký',
    defaultMessage: 'Ok',
  },
});

export default messages;