import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const colors = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const randomNumber = () => {
    let random = Math.random() * colors.length;
    let floor = Math.floor(random);
    return floor;
  };

  const generateColor = () => {
    let hex = "#"; // c9ad80
    for (let i = 0; i < 6; i++) {
      hex += colors[randomNumber()];
    }

    return hex;
  };

  // get chats
  const getMyChats = async () => {
    const response = await axios.get(
      `http://localhost:5174/get-chats/${user?._id}`,
    );
    setConversations(response?.data);
  };

  // get users

  const getUsers = async () => {
    let response = await axios.get(`http://localhost:5174/get-all-users`);
    setAllUsers(response?.data);
  };

  useEffect(() => {
    getUsers();
    getMyChats();
  }, []);

  return (
    <AppContext.Provider
      value={{
        selected,
        setSelected,
        generateColor,
        user,
        allUsers,
        setAllUsers,
        conversations,
        setConversations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};
