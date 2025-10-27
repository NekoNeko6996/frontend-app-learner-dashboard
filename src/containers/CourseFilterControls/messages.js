import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseStatus: {
    id: 'learner-dash.courseListFilters.courseStatus',
    description: 'tiêu đề biểu mẫu bộ lọc trạng thái khóa học',
    defaultMessage: 'Trạng thái khóa học',
  },
  inProgress: {
    id: 'learner-dash.courseListFilters.inProgress',
    description: 'nhãn hộp kiểm bộ lọc đang tiến hành cho bộ lọc danh sách khóa học',
    defaultMessage: 'Đang tiến hành',
  },
  notStarted: {
    id: 'learner-dash.courseListFilters.notStarted',
    description: 'nhãn hộp kiểm bộ lọc Chưa bắt đầu cho bộ lọc danh sách khóa học',
    defaultMessage: 'Chưa bắt đầu',
  },
  done: {
    id: 'learner-dash.courseListFilters.done',
    description: 'nhãn hộp kiểm bộ lọc đã xong cho bộ lọc danh sách khóa học',
    defaultMessage: 'Đã xong',
  },
  notEnrolled: {
    id: 'learner-dash.courseListFilters.notEnrolled',
    description: 'nhãn hộp kiểm bộ lọc chưa đăng ký cho bộ lọc danh sách khóa học',
    defaultMessage: 'Chưa đăng ký',
  },
  upgraded: {
    id: 'learner-dash.courseListFilters.upgraded',
    description: 'nhãn hộp kiểm bộ lọc đã nâng cấp cho bộ lọc danh sách khóa học',
    defaultMessage: 'Đã nâng cấp',
  },
  clearAll: {
    id: 'learner-dash.courseListFilters.clearAll',
    description: 'văn bản nút xóa tất cả bộ lọc',
    defaultMessage: 'Xóa tất cả',
  },
  sort: {
    id: 'learner-dash.courseListFilters.sort',
    description: 'Tiêu đề biểu mẫu radio Sắp xếp',
    defaultMessage: 'Sắp xếp',
  },
  sortLastEnrolled: {
    id: 'learner-dash.courseListFilters.sortLastEnrolled',
    description: 'Văn bản tùy chọn sắp xếp Đăng ký lần cuối',
    defaultMessage: 'Đăng ký lần cuối',
  },
  sortTitle: {
    id: 'learner-dash.courseListFilters.sortTitle',
    description: 'Văn bản tùy chọn sắp xếp Tiêu đề',
    defaultMessage: 'Tiêu đề (A-Z)',
  },
  refine: {
    id: 'learner-dash.courseListFilters.refine',
    description: 'Văn bản của vùng chứa nút bộ lọc',
    defaultMessage: 'Tinh chỉnh',
  },
});

export default messages;