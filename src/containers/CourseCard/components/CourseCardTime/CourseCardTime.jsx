import React from 'react';
import PropTypes from 'prop-types';

import useCardDetailsData from './hooks';
import './index.scss';

export const CourseCardTime = ({ cardId }) => {
  const {
    courseRun,
  } = useCardDetailsData({ cardId });

  const startRaw = courseRun?.startDate;
  const endRaw = courseRun?.endDate;

  const startDateObj = startRaw instanceof Date ? startRaw : (startRaw ? new Date(startRaw) : null);
  const endDateObj = endRaw instanceof Date ? endRaw : (endRaw ? new Date(endRaw) : null);

  const isValidStartDate = startDateObj instanceof Date && !Number.isNaN(startDateObj.getTime());
  const isValidEndDate = endDateObj instanceof Date && !Number.isNaN(endDateObj.getTime());
  

  // Chuẩn bị text hiển thị (vi-VN, GMT+7)
  const startText = isValidStartDate
    ? new Intl.DateTimeFormat('vi-VN', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
      }).format(startDateObj)
    : "Chưa xác định";

  const endText = isValidEndDate
    ? new Intl.DateTimeFormat('vi-VN', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
      }).format(endDateObj)
    : "Vĩnh viễn";

  const startISO = isValidStartDate ? startDateObj.toISOString() : null;
  const endISO = isValidEndDate ? endDateObj.toISOString() : null;

  return (
    <div className="small" data-testid="CourseCardDetails">
      <table>
        <tr>
          <td>Bắt đầu:&nbsp;</td>
          <td>
            {isValidStartDate ? (
              <time dateTime={startISO} title={startISO}>
                {startText}
              </time>
            ) : (
              startText
            )}
          </td>
        </tr>
        <tr>
          <td>Kết thúc:&nbsp;</td>
          <td>
            {isValidEndDate ? (
              <time dateTime={endISO} title={endISO}>
                {endText}
              </time>
            ) : (
              endText
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};

CourseCardTime.propTypes = {
  cardId: PropTypes.string.isRequired,
};

CourseCardTime.defaultProps = {};

export default CourseCardTime;
