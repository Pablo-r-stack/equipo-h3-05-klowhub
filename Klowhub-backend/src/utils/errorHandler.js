//Custom error handler function
const createError = (status, message) => {
    //create a new error Object with a custom message
    const error = new Error(message);
    //Assigns valid status depending on response behavior
    error.status = status;
    // return a valid throwable error
    return error;
};

export default createError;