export const storeLoginSession = (loggedIn: boolean, token: string) => {
  try {
    const sessionData = {
      loggedIn,
      token,
    };
    sessionStorage.setItem("loginInfo", JSON.stringify(sessionData));
  } catch (error) {
    console.error("Error storing login data in session storage:", error);
  }
};

export const retrieveLoginSession = () => {
  try {
    const sessionDataJson = sessionStorage.getItem("loginInfo");
    if (sessionDataJson) {
      const sessionData = JSON.parse(sessionDataJson);
      return sessionData;
    } else {
      const sessionData = { loggedIn: false, token: "" };
      return sessionData;
    }
  } catch (error) {
    console.error("Error retrieving login data from session storage:", error);
    return null;
  }
};
