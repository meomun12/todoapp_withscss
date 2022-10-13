import React from 'react'

interface ITodoSortProps {
    sortByName: () => void;
    sortByDate: () => void;
    sortByDone: () => void;
    sortByNotDone: () => void;
}

export default function TodoSort(props: ITodoSortProps) {

    const handleSortByName = () => {
        props.sortByName()
    }

    const handleSortByDate = () => {
        props.sortByDate()
    }

    const handleSortByDone = () => {
        props.sortByNotDone()
    }

    const handleSortByNotDone = () => {
        props.sortByDone()
    }




    return (
        <div className="sort-button-box">
            Sort

            <button className="sort-button"
                onClick={() => {
                    handleSortByName();
                }}>Alphabetically</button>
            <button className="sort-button"
                onClick={() => {
                    handleSortByDate();
                }}>Created</button>
            <button className="sort-button"
                onClick={() => {
                    handleSortByDone();
                }}>Done</button>
            <button className="sort-button"
                onClick={() => {
                    handleSortByNotDone();
                }}>Not Done</button>
        </div>
    )
}
