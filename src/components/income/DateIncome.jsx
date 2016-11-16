import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */
const DateIncome = () => (
  <div>
    <DatePicker hintText="Portrait Dialog" />
  </div>
);

export default DateIncome;