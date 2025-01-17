import { createContext, useContext, useEffect, useState } from "react"

const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("profile")) || null)
    const [cards, setCards] = useState([])
    const [category, setCategory] = useState([])
    const [sub, setSub] = useState([])
    const [type, setType] = useState([])
    const [works, setWorks] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [chats, setChats] = useState([])
    const [loadingRes, setLoadingRes] = useState(false)
    const [loader, setLoader] = useState(false);
    const [restart, setRestart] = useState(false);
    const [search, setSearch] = useState([]);
    const [sendMessage, setSendMessage] = useState(null)
    const [asnwerMessage, setAnswerMessage] = useState(null)

    const toggleReset = () => setLoadingRes(!loadingRes)
    

    useEffect(()=>{
        const getAllProd = async () => {
            try {
                // const resCar = await getProd('car')
                // const resWork = await getProd('work')
                // const resFashion = await getProd('fashion')
                // const resCategory = await getProd('category')
                // const resSub = await getProd('sub')
                // const resType = await getProd('type')
                // setCategory(resCategory?.data?.getAll)
                // setSub(resSub?.data?.getAll) 
                // setType(resType?.data?.getAll) 
                // setWorks(resWork?.data?.getAll)
                // setCards([...resCar?.data?.getAll, ...resFashion?.data?.getAll])
            } catch (error) {
            }
        }
        getAllProd()
    },[currentUser, loadingRes])

    const exit = () => {
        localStorage.clear()
        setCurrentUser(null)
    }

     const value = {
        currentUser, setCurrentUser, exit,
        cards, setCards, category, setCategory,
        onlineUsers, setOnlineUsers,
        currentChat, setCurrentChat,
        chats, setChats, sub, setSub,
        type, setType, works, setWorks,
        toggleReset, loader, setLoader,
        restart, setRestart,
        search, setSearch,
        sendMessage, setSendMessage,
        asnwerMessage, setAnswerMessage, loadingRes
    }

 
    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}
