
/*
 * 日期转换 20160105=>2016-01-05
 * {{date | dateServer}}
 **/
let dateServer = value => {
  return value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
}
export { dateServer }

