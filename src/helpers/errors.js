class APIError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
};

class ValidationError extends APIError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
};

class WrongParametersError extends APIError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
};

class NotAuthorizedError extends APIError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
};

module.exports = {
  ValidationError,
  WrongParametersError,
  NotAuthorizedError,
  APIError,
};
