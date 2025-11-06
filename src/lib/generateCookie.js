
const generateCookie = (token, res) => {

    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000, // 7 days in MS
        httpOnly: true, //prevent XSS attacks: cross-site scripting 
        sameSite: "strict", // CSRF attacks
        //secure: ENV.NODE_ENV === "development" ? false : true, // i would love to have a secure cookie but we don't because we don't have an https server
        secure: false,
    });

    return token;
}

export default generateCookie;