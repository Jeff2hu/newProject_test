const apiResponse = (status, data) => {
  switch (status) {
    case 200:
      return { message: "Success", data, code: "00000" };
    case 400:
      return { message: "Bad Request", data, code: "A0001" };
    case 404:
      return { message: "Not Found", data, code: "A0002" };
    case 500:
      return { message: "Internal Server Error", data, code: "A0003" };
    default:
      return { message: "Unknown Error", data, code: "A0004" };
  }
};

module.exports = apiResponse;
