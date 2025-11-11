import React from 'react'


const alldata = [
    {
        id: 1,
        name: 'hashim',
        email: 'hashim@gmail.com',
        desc: "trainee at Navtacc"
    },
    {
        id: 2,
        name: 'hashim',
        email: 'hashim@gmail.com',
        desc: "trainee at Navtacc"
    },
    {
        id: 3,
        name: 'hashim',
        email: 'hashim@gmail.com',
        desc: "trainee at Navtacc"
    },
    {
        id: 4,
        name: 'hashim',
        email: 'hashim@gmail.com',
        desc: "trainee at Navtacc"
    },
    {
        id: 5,
        name: 'hashim',
        email: 'hashim@gmail.com',
        desc: "trainee at Navtacc"
    },
    {
        id: 6,
        name: 'hashim',
        email: 'hashim@gmail.com',
        desc: "trainee at Navtacc"
    },

]
function DataList() {
    return (
        <>
            <div>
                <h2>DataList</h2>
                <div>
                    {alldata.map((data, index) => (
                        <div className="single-data" key={data.id || index}>
                            <h3>Employee Id: {data.id}</h3>
                            <h4>Employee Name: {data.name}</h4>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default DataList