import axios from "axios"
import getConfigToken from "../services/getConfigToken"
import { useState } from "react"

const useCrud = () => {
    
    const [response, setResponse] = useState([])

    // GET
    const getApi = (url) => {
        axios.get(url, getConfigToken())
            .then(res => setResponse(res.data))
            .catch(err => console.log(err))
    }

    // CREATE
    const createApi = (url, data) => {
        axios.post(url, data, getConfigToken())
            .then(res => {
                console.log(response)
                console.log(res.data)
                setResponse([...response, res.data])
            })
            .catch(err => console.log(err))
    }

    // DELETE
    const deleteApi = (url, id) => {
        axios.delete(url, getConfigToken())
            .then(res => {
                setResponse(response.filter(r => r.id !== id))
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    // UPDATE
    const updateApi = (url, data, id) => {
        axios.put(url, data, getConfigToken())
            .then(res => {
                setResponse(response.map(resp => resp.id === id ? res.data : resp))
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }


    return [ response, getApi, createApi, deleteApi, updateApi ]

}

export default useCrud