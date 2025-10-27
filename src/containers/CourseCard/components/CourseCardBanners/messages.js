import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  auditAccessExpired: {
    id: 'learner-dash.courseCard.banners.auditAccessExpired',
    description: 'Thông báo biểu ngữ hết hạn truy cập dự thính',
    defaultMessage: 'Quyền truy cập dự thính của bạn vào khóa học này đã hết hạn.',
  },
  findAnotherCourse: {
    id: 'learner-dash.courseCard.banners.findAnotherCourse',
    description: 'Lời nhắc hành động đưa người học đến trang khám phá khóa học',
    defaultMessage: 'Tìm khóa học khác',
  },
  certRestricted: {
    id: 'learner-dash.courseCard.banners.certificateRestricted',
    description: 'Thông báo cảnh báo chứng chỉ bị hạn chế',
    defaultMessage: 'Chứng chỉ Thành tích của bạn đang bị giữ để chờ xác nhận rằng việc cấp Chứng chỉ của bạn tuân thủ các lệnh cấm vận nghiêm ngặt của Hoa Kỳ đối với Iran, Cuba, Syria và Sudan. Nếu bạn nghĩ rằng hệ thống của chúng tôi đã xác định nhầm bạn có liên quan đến một trong những quốc gia đó, vui lòng cho chúng tôi biết bằng cách liên hệ {supportEmail}.',
  },
  certRestrictedNoEmail: {
    id: 'learner-dash.courseCard.banners.certificateRestrictedNoEmail',
    description: 'Thông báo cảnh báo chứng chỉ bị hạn chế',
    defaultMessage: 'Chứng chỉ Thành tích của bạn đang bị giữ để chờ xác nhận rằng việc cấp Chứng chỉ của bạn tuân thủ các lệnh cấm vận nghiêm ngặt của Hoa Kỳ đối với Iran, Cuba, Syria và Sudan. Nếu bạn nghĩ rằng hệ thống của chúng tôi đã xác định nhầm bạn có liên quan đến một trong những quốc gia đó, vui lòng cho chúng tôi biết.',
  },
  certRefundContactBilling: {
    id: 'learner-dash.courseCard.banners.certificateRefundContactBilling',
    description: 'Thông báo cho người học liên hệ bộ phận thanh toán để được hoàn tiền chứng chỉ',
    defaultMessage: 'Nếu bạn muốn được hoàn tiền cho Chứng chỉ Thành tích của mình, vui lòng liên hệ địa chỉ thanh toán của chúng tôi {billingEmail}',
  },
  certRefundContactBillingNoEmail: {
    id: 'learner-dash.courseCard.banners.certificateRefundContactBillingNoEmail',
    description: 'Thông báo cho người học liên hệ bộ phận thanh toán để được hoàn tiền chứng chỉ',
    defaultMessage: 'Nếu bạn muốn được hoàn tiền cho Chứng chỉ Thành tích của mình, vui lòng liên hệ với chúng tôi.',
  },
  passingGrade: {
    id: 'learner-dash.courseCard.banners.passingGrade',
    description: 'Thông báo cho người học về điểm tối thiểu để vượt qua khóa học',
    defaultMessage: 'Điểm yêu cầu để vượt qua khóa học: {minPassingGrade}\u200f%',
  },
  notEligibleForCert: {
    id: 'learner-dash.courseCard.banners.notEligibleForCert',
    description: 'Thông báo không đủ điều kiện nhận chứng chỉ',
    defaultMessage: 'Bạn không đủ điều kiện nhận chứng chỉ.',
  },
  viewGrades: {
    id: 'learner-dash.courseCard.banners.viewGrades',
    description: 'Văn bản liên kết [xem] điểm',
    defaultMessage: 'Xem điểm.',
  },
  certReady: {
    id: 'learner-dash.courseCard.banners.certReady',
    description: 'Thông báo chứng chỉ đã sẵn sàng',
    defaultMessage: 'Chúc mừng. Chứng chỉ của bạn đã sẵn sàng.',
  },
  viewCertificate: {
    id: 'learner-dash.courseCard.banners.viewCertificate',
    description: 'Văn bản liên kết chứng chỉ',
    defaultMessage: 'Xem Chứng chỉ.',
  },
  certMinGrade: {
    id: 'learner-dash.courseCard.banners.certMinGrade',
    description: 'Thông báo yêu cầu điểm để qua môn',
    defaultMessage: 'Điểm yêu cầu để nhận chứng chỉ: {minPassingGrade}\u200f%',
  },
  downloadCertificate: {
    id: 'learner-dash.courseCard.banners.downloadCertificate',
    description: 'Văn bản liên kết tải chứng chỉ',
    defaultMessage: 'Tải Chứng chỉ.',
  },
  gradeAndCertReadyAfter: {
    id: 'learner-dash.courseCard.banners.gradseAndCertReadyAfter',
    description: 'Thông báo ngày có điểm và chứng chỉ',
    defaultMessage: 'Điểm và chứng chỉ của bạn sẽ sẵn sàng sau ngày {availableDate}.',
  },
  entitlementUnavailable: {
    id: 'learner-dash.courseCard.banners.entitlementUnavailable',
    description: 'Thông báo khóa học thuộc quyền tham gia khi không có phiên nào',
    defaultMessage: 'Hiện tại không có phiên nào. Đội ngũ khóa học sẽ sớm tạo các phiên mới. Nếu không có phiên nào xuất hiện, vui lòng liên hệ {emailLink} để biết thông tin.',
  },
  entitlementExpiringSoon: {
    id: 'learner-dash.courseCard.banners.entitlementExpiringSoon',
    description: 'Thông báo khóa học thuộc quyền tham gia khi quyền tham gia sắp hết hạn.',
    defaultMessage: 'Bạn phải {selectSessionButton} trước {changeDeadline} để truy cập khóa học.',
  },
  entitlementExpired: {
    id: 'learner-dash.courseCard.banners.entitlementExpired',
    description: 'Thông báo khóa học thuộc quyền tham gia khi quyền tham gia đã hết hạn.',
    defaultMessage: 'Bạn không thể thay đổi phiên nữa.',
  },
  selectSession: {
    id: 'learner-dash.courseCard.banners.selectSession',
    description: 'Văn bản liên kết chọn phiên (thuộc quyền tham gia)',
    defaultMessage: 'chọn một phiên',
  },
  prerequisitesNotMet: {
    id: 'learner-dash.courseCard.banners.prerequisitesNotMet',
    description: 'Thông báo cho người học chưa đáp ứng điều kiện tiên quyết',
    defaultMessage: 'Bạn chưa thể truy cập khóa học này vì bạn chưa đáp ứng các điều kiện tiên quyết.',
  },
  courseHasNotStarted: {
    id: 'learner-dash.courseCard.banners.courseHasNotStarted',
    description: 'Thông báo khóa học chưa bắt đầu',
    defaultMessage: 'Bạn chưa thể truy cập khóa học này vì khóa học chưa bắt đầu. Khóa học sẽ bắt đầu vào {startDate}.',
  },
});

export default messages;