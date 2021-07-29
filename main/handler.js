'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        table: process.env.TABLE_NAME,
        bucket: process.env.BUCKET_NAME,
    }, null, 2),
  };

};
