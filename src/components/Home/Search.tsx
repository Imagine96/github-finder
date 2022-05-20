import React, { useState, useCallback, useEffect, useContext } from 'react'
import { FaSearch, FaExclamationTriangle } from "react-icons/fa"
import { SpinnerCircularFixed } from "spinners-react"
import useDebounce from '../../utils/hooks/useDebounce'

interface Props {
    searchUsers: (target?: string | undefined) => void
    isLoading: boolean
    clearUsers: () => void
    users: boolean
}

const Search: React.FC<Props> = ({ searchUsers, clearUsers, isLoading, users }) => {

    const [searchTerm, setSearchTerm] = useState<string>("")
    const [alert, setAlert] = useState<string>()
    const debounced = useDebounce(searchTerm)

    const onSearchTermChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAlert(undefined)
        setSearchTerm(e.target.value)
    }, [])


    useEffect(() => {
        if (debounced.trim().length && debounced.trim().length > 2) {
            searchUsers(debounced)
        } else if (debounced.trim().length < 3 && debounced.trim().length) {
            setAlert("Please enter at least 3 characters to search...")
            const timer = setTimeout(() => {
                setAlert(undefined)
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [debounced])

    return (
        <div className='w-full mt-8' >
            <div className='flex flex-row justify-start relative items-center gap-8 w-full bg-base-100 shadow-xl mb-8' >
                <div className="absolute z-20 cursor-default text-base-content right-0 rounded-md self-center btn-ghost py-2 px-4">
                    <label className="swap swap-rotate !cursor-default">
                        <FaSearch className={`${isLoading ? 'swap-on' : 'swap-off'} fill-current text-base-content translate-y-1`} size={24} />
                        <SpinnerCircularFixed className={`${!isLoading ? 'swap-on' : 'swap-off'} fill-current text-base-content translate-x-1 `} size={24} />
                    </label>
                </div>
                <div className='w-full relative' >
                    <input type="text" onChange={onSearchTermChangeHandler} value={searchTerm} placeholder="Search user" className="input input-primary w-full" />
                </div>
                {alert ? (
                    <div className="badge badge-primary !py-1 absolute left-4 -bottom-4">
                        <FaExclamationTriangle size={18} />
                        <span>{alert}</span>
                    </div>)
                    : null}
            </div>
            {
                users ? <button onClick={clearUsers} className='btn btn-primary' > Clear </button> : null
            }
        </div>
    )
}

export default Search