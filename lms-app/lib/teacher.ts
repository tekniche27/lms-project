export const isTeacher = (userId?: string  | null) => {
    //console.log(userId === process.env.NEXT_PUBLIC_TEACHER_ID);
    if(userId==="user_2pQygyEguOpkOLuoZUFmjmaWCr4" || userId==="user_2nVXlEfRlHZ912eycQK18eJbCVd" || userId==="user_2nUEHYNC8R1PUVLkKDFaR2WEfi2" ||
       userId==="user_2pQtFvdSYyOJQ4bg3YImlNXuwNA" || userId==="user_2pZZRQb0C2X8C8mBp127Dug4HqM" || userId==="user_2pZZUdLbX0knkru1AKA3poLA8Ep" ||
       userId==="user_2pZZXARJJsmv1f1bJSVPxvtQD8R")
    {
        return true;
    }
    else
    {
        return userId === process.env.NEXT_PUBLIC_TEACHER_ID
    }
}