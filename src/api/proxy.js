const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const apiUrl = 'https://graph.facebook.com/v11.0/instagram_oembed/';
  const params = event.queryStringParameters;

  try {
    const response = await fetch(`${apiUrl}?${new URLSearchParams(params)}`);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
