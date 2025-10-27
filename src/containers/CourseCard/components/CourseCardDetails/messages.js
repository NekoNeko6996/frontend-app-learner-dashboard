import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  accessExpired: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpired',
    description: 'Thông báo ngày hết hạn truy cập khóa học trên thẻ khóa học khi đã hết hạn.',
    defaultMessage: 'Đã hết hạn truy cập {accessExpirationDate}',
  },
  accessExpires: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpires',
    description: 'Thông báo ngày hết hạn truy cập khóa học trên thẻ khóa học.',
    defaultMessage: 'Hết hạn truy cập {accessExpirationDate}',
  },
  courseEnded: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnded',
    description: 'Thông báo khóa học đã kết thúc trên thẻ khóa học.',
    defaultMessage: 'Khóa học đã kết thúc {endDate}',
  },
  courseEnds: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnds',
    description: 'Thông báo khóa học sắp kết thúc trên thẻ khóa học.',
    defaultMessage: 'Khóa học kết thúc {endDate}',
  },
  courseStarts: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseStarts',
    description: 'Thông báo ngày bắt đầu khóa học trên thẻ khóa học.',
    defaultMessage: 'Khóa học bắt đầu {startDate}',
  },
  unknownProviderName: {
    id: 'learner-dash.courseCard.CourseCardDetails.unknownProviderName',
    description: 'Tên nhà cung cấp hiển thị khi không rõ tên',
    defaultMessage: 'Không rõ',
  },
  changeOrLeaveSessionButton: {
    id: 'learner-dash.courseCard.CourseCardDetails.changeOrLeaveSessionButton',
    description: 'Nút kích hoạt thay đổi hoặc rời khỏi phiên cho khóa học thuộc quyền tham gia',
    defaultMessage: 'Thay đổi hoặc rời khỏi phiên',
  },
});

export default messages;