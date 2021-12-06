import React, {useContext, useState, useEffect} from 'react'; //hooks
import {useHistory} from 'react-router-dom';
import {auth} from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext); //we are cearting AuthContext and passing it to useContext HOOK 

export const AuthProvider = ({children}) => { //react children is rendering all the jsx thay you pass to AuthProvider
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const history =  useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user); //get the user data
            setLoading(false); //no longer loading
            history.push('/chats'); //renavigating to our chat app
        })
    }, [user, history]); //when thong from dependecy array change, then useEffect is recalling

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
} 