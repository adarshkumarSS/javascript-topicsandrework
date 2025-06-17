import React from "react";

const usercontext = React.createContext('Mark zuckerberg')

const UserProvider = usercontext.Provider
const UserConsumer = usercontext.Consumer

export {UserProvider,UserConsumer}
export default usercontext