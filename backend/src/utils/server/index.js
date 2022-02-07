const isDevelopmentHost = () =>
  process.env.NODE_ENV === 'development' ? true : false;

const blogTableName = () =>
  process?.env?.SOCCER_TABLE ? `${process?.env?.SOCCER_TABLE}` : `Blog-${process?.env?.NODE_ENV}`;


module.exports = {
  blogTableName,
  isDevelopmentHost,
};