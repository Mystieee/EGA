import React from 'react';
import { useState, createContext, useEffect } from "react";
import axios from "axios";
export const Context1 = createContext();

const Provider = ({ children }) => {
    const [data, setData] = useState([]);
    const [accountData, setAccountData] = useState('');
    const [error, setError] = useState(false);



    useEffect(() => {
        console.log("Context--->useeffect-->")
        fetchAccountDetails(AccountAPI);
    }, [AccountAPI]);

    const AccountAPI = `http://localhost:9091/api/account/3994516387`;
    console.log(AccountAPI)
    const fetchAccountDetails = AccountAPI => {
        axios
            .get(AccountAPI)
            .then(response => {
                console.log("From context :-->", response.data);
                setAccountData(response.data);
            })
            .catch(err => {
                setError(true);
                if (err.response) {
                    console.log(" accountData Error in Response", error.response.data);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log(" accountData Error Message: " + error);
                }
            })
            .finally(() => {
                console.log(error);
            });
    };


    return (
        <Context1.Provider value={accountData, setAccountData}>
            {children}
        </Context1.Provider>
    )
}

export default Provider;