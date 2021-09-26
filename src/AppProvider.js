import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {

	const [authUser, setAuthUser] = useState({
    isAuth: false,
    _id: "",
    fullname: "",
    email: ""
  });

	useEffect( () => {
    let appState = localStorage["appState"];

    if(appState) {
      fetch("https://karaokdb.herokuapp.com/users/profile",{
        headers: {
          "Authorization": `Bearer ${appState}`
        }
      })
      .then( response => response.json())
      .then( data => {
        
        if(data._id){
          
          setAuthUser({
            isAuth: true,
            _id: data._id,
            fullname: data.fullname,
            email: data.email,
            isAdmin: data.isAdmin
          })
        }
      })
    }
  }, []);

	return (
		<AppContext.Provider value={[authUser, setAuthUser]}>
			{props.children}
		</AppContext.Provider>
	);
}