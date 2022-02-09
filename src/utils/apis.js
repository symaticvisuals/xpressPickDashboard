/**
 *
 * @param {String} endpoint API Endpoint for the Request
 * @returns
 */
const getApi = (endpoint) => {
  return `http://127.0.0.1:5000/api${endpoint}`;
};

export { getApi };
