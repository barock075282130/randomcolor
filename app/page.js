'use client'

import { useState } from "react";

export default function Home(){
    const [ rgbColor ,setrgbColor ] = useState(null);
    const [ hexCode , setHexCode ] = useState(null);
    const [ redColor , setRedColor ] = useState(null);
    const [ blueColor , setBlueColor ] = useState(null);
    const [ greenColor , setGreenColor ] = useState(null);
    function randRGB(){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const rgb = `rgb( ${red}, ${green}, ${blue} )`;
        setrgbColor(rgb)
        setRedColor(red)
        setGreenColor(green)
        setBlueColor(blue)
        const hex = [ red, green, blue ].map(x => {
            const hexValue = x.toString(16);
            return hexValue.length === 1 ? "0" + hexValue : hexValue;
        }).join("")
        setHexCode("#"+hex.toUpperCase())
    }
    return (
        <div className="h-screen flex justify-center items-center" style={{ backgroundColor: rgbColor }}>
            <div>
                <div>
                    <div className="bg-white rounded-md text-center opacity-90 drop-shadow-2xl">
                        {rgbColor? (
                            <div className="p-4 m-3">
                                <span className="text-2xl font-extrabold">RGB</span>
                                <h1 className="text-3xl font-extrabold mb-2" style={{ color: rgbColor }}>{rgbColor}</h1>
                                <div className="grid grid-cols-3 gap-4 m-5">
                                    <div className="p-5 opacity-70 rounded text-white text-xl font-bold" style={{ backgroundColor: `rgb(${redColor},0,0)`}}>Red {redColor}</div>
                                    <div className="p-5 opacity-70 rounded text-white text-xl font-bold" style={{ backgroundColor: `rgb(0,${greenColor},0)`}}>Green {greenColor}</div>
                                    <div className="p-5 opacity-70 rounded text-white text-xl font-bold" style={{ backgroundColor: `rgb(0,0,${blueColor})`}}>Blue {blueColor}</div>
                                </div>
                                <span className="text-2xl font-extrabold">HEX</span>
                                <h1 className="text-3xl font-extrabold mb-2" style={{ color: rgbColor }}>{hexCode}</h1>
                            </div>
                        ) : (
                            <div className="p-4 m-3">
                                <span className="text-2xl font-extrabold">RGB</span>
                                <h1 className="text-3xl font-extrabold mb-2">rgb( 0,0,0 )</h1>
                                <div className="grid grid-cols-3 gap-4 m-5">
                                  <div className="p-5 opacity-70 rounded text-black text-xl font-bold">Red 0</div>
                                  <div className="p-5 opacity-70 rounded text-black text-xl font-bold">Green 0</div>
                                  <div className="p-5 opacity-70 rounded text-black text-xl font-bold">Blue 0</div>
                                </div>
                                <span className="text-2xl font-extrabold">HEX</span>
                                <h1 className="text-3xl font-extrabold mb-2">#000000</h1>
                            </div>
                        )}
                        <div>
                            <button className="px-5 py-3 bg-red-700 text-white rounded-md hover:bg-gray-300 hover:text-black drop-shadow-md transition duration-700 mb-5" onClick={randRGB}>
                                Random Color
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}