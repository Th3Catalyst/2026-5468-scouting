import React from 'react';

export default function Slider({title, min, max, defaultVal}: {title: string, min: number, max: number, defaultVal:number}) {
    let titleElement = React.useRef<HTMLDivElement>(null);
    let slider = React.useRef<HTMLInputElement>(null);
    return (
        <table className="tableNormal">
            <tbody>
                <tr>
                    <th colSpan={2}>
                        <span className="header" ref={titleElement} id={`${title}`}>{ defaultVal }</span>
                    </th>
                </tr>
                <tr>
                    <td>
                        <input ref={slider} type="range" min={min} max={max} defaultValue={defaultVal} className="slider" id="test" onChange={() => {
                            titleElement.current!.textContent = slider.current!.value;
                        }} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}