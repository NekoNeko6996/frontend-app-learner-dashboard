import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  ViewAs: {
    id: 'MasqueradeBar.ViewAs',
    defaultMessage: 'Xem với tư cách: ',
    description: 'Nhãn cho Xem với tư cách',
  },
  ViewingAs: {
    id: 'MasqueradeBar.ViewingAs',
    defaultMessage: 'Đang xem với tư cách: ',
    description: 'Nhãn cho Đang xem với tư cách',
  },
  SubmitButton: {
    id: 'MasqueradeBar.SubmitButton',
    defaultMessage: 'Gửi',
    description: 'Nhãn cho nút Gửi',
  },
  StudentNameInput: {
    id: 'MasqueradeBar.StudentNameInput',
    defaultMessage: 'Tên người dùng hoặc email',
    description: 'Nhãn cho ô nhập Tên học viên hoặc email',
  },
  NoStudentFound: {
    id: 'MasqueradeBar.NoStudentFound',
    defaultMessage: 'Không tìm thấy học viên nào có tên người dùng hoặc email này',
    description: 'Thông báo lỗi khi không tìm thấy học viên',
  },
  UnknownError: {
    id: 'MasqueradeBar.UnknownError',
    defaultMessage: 'Đã xảy ra lỗi không xác định',
    description: 'Thông báo lỗi khi xảy ra lỗi không xác định',
  },
});

export default messages;