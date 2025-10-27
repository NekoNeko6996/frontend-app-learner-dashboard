/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  changeOrLeaveHeader: {
    id: 'learner-dash.selectSession.changeOrLeaveHeader',
    description: 'Tiêu đề cho phiên cho phép tùy chọn rời khỏi',
    defaultMessage: 'Thay đổi hoặc rời khỏi phiên?',
  },
  selectSessionHeader: {
    id: 'learner-dash.selectSession.selectSessionHeader',
    description: 'Tiêu đề cho quyền tham gia chưa được thực hiện',
    defaultMessage: 'Chọn một phiên',
  },
  changeOrLeaveHint: {
    id: 'learner-dash.selectSession.changeOrLeaveHint',
    description: 'Gợi ý cho phiên cho phép tùy chọn rời khỏi',
    defaultMessage: 'Khi bạn thay đổi sang một phiên khác, mọi tiến độ khóa học hoặc điểm số từ phiên hiện tại của bạn sẽ bị mất.',
  },
  selectSessionHint: {
    id: 'learner-dash.selectSession.selectSessionHint',
    description: 'Gợi ý cho phiên không cho phép tùy chọn rời khỏi',
    defaultMessage: 'Hãy nhớ rằng, nếu bạn thay đổi quyết định, bạn có 2 tuần để hủy đăng ký và chọn một phiên khác.',
  },
  leaveSessionOption: {
    id: 'learner-dash.selectSession.leaveSessionOption',
    description: 'Tùy chọn radio để rời khỏi phiên',
    defaultMessage: 'Rời khỏi phiên',
  },
  nevermind: {
    id: 'learner-dash.selectSession.nevermind',
    description: 'Hành động hủy cho modal chọn phiên',
    defaultMessage: 'Để sau',
  },
  confirmSession: {
    id: 'learner-dash.selectSession.confirmSession',
    description: 'Hành động xác nhận cho modal chọn phiên',
    defaultMessage: 'Xác nhận phiên',
  },
});

export default messages;