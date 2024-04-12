import React from 'react';

const Lyosha = () => {
    const array = []
    for (let i = 0; i < 50; i++)
        array.push(Math.floor(67 * Math.random()))
    console.log(array)
    return (
        <div>
            <table>
                <tr>
                    {array.map(el =>
                        <th key={el}>{el}</th>
                    )}
                </tr>
            </table>
            <ul className='decoration-1'>
                {array.map(el => {
                    if(el%2 === 0){
                        return <li key={el}>{el}</li>
                    }
                }
                )}
            </ul>
        </div>
    );
};

export default Lyosha;