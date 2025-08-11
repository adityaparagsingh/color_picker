import { useState } from "react"

function Color_picker(){
    const [color,setColor] = useState("#ffffff");

    function handleColorChange(event){
        setColor(event.target.value);
    }
  return(
    <body>
        <div className="color-picker-container joti-one-regular">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor : color}}>
                
            <p>Selected Color : {color}</p>
            </div>  {/*CSS should be written as object inside javascript {} by doubt {{CSS}} method*/}
            <div className="select-color">
                <label>Select a Color : </label>
                <input type="color" value={"#ffffff"} onChange={handleColorChange}/>
            </div>
        </div>
    </body>
  )
}

export default Color_picker;