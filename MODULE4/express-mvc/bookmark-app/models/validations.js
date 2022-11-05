const validateURL = (req, res, next) => {
    console.log("This fuction checks the validity of the URL entered by the user");
    next();
};

// We can export any functions in our exports
module.exports = { validateURL };