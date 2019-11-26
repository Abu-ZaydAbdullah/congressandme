import React from "react";


async function USMap() {
        const res = await fetch('https://willhaley.com/assets/united-states-map-react/states.json')
        const statesData = await res.json();
    
    if (statesData === null) {
        return <div>Loading...</div>
    }
    return (
        <svg viewBox="0 0 960 600">
            {statesData.map((stateData, index) =>
                <path
                    className="someCSSClass"
                    style={{cursor: "pointer", fill: "orange"}}
                    key={index}
                    stroke="#fff"
                    strokeWidth="6px"
                    d={stateData.shape}
                    onMouseOver={(event) => {
                        event.target.style.fill = 'red'
                    }}
                    onMouseOut={(event) => {
                        event.target.style.fill = 'orange'
                    }}
                >
                </path>
            )}
        </svg>
    );
}

export default USMap;