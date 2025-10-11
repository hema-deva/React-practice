import { useState } from "react"

const data =[
    {label:"tab1", content:"tab1 cotent"},
    {label:"tab2", content:"tab2 cotent"},
    {label:"tab3", content:"tab3 cotent"}
]

export const Tabs = () => {
    const [activetab, setActiveTab] = useState(0)
    return <>
       <div style={{display:"flex",gap:"10px"}}>
         {
            data && data.map((da,i) => (
                <div onClick={() => setActiveTab(i)} style={{padding:'10px',backgroundColor:"green",cursor:"pointer"}}>{da.label}</div>
            ))
        }
       </div>
       {
                data[activetab] && <p>{data[activetab].content}</p>
        }
    </>
}