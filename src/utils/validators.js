// 驗證組件傳入的值是否正確

export const isValidWidthUnit = (val) => ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(unit =>
  val.endsWith(unit)
);

export const isValidComponentSize = (val) => ['', 'large', 'medium', 'small', 'mini'].includes(val);
