const isDevelopmentHost = () =>
  process.env.NODE_ENV === 'development' ? true : false;

const blogTableName = process?.env?.NODE_ENV 
  ? `Blog-${process?.env?.NODE_ENV}` 
  : process?.env?.SOCCER_TABLE;


module.exports = {
  blogTableName,
  isDevelopmentHost,
};
