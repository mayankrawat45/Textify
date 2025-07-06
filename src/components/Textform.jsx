import { useState } from 'react'

const Textform = (props) => {
    const [text, setText] = useState('')


    const handleupClick = () => {
        console.log("clicked")
        let changetext = text.toUpperCase()
        setText(changetext)
        props.showalert("Changed to UpperCase","success")
    }

    const handleloClick = () => {
        console.log("clicked")
        let changetext = text.toLowerCase()
        setText(changetext)
        props.showalert("Changed to LowerCase","success")

    }


    const handleChange = (event) => {
        console.log("he")
        setText(event.target.value)

    }
    const handleclear=()=>{
        setText("")
        props.showalert("Cleared","success")

    }
    return (
        <div>

            <div className={`mb-3 container my-3 }`} style={{color:props.mode==="light"?"black":"white"}}>
                <h1>Enter the text below to analyze</h1>

                <textarea
                    className={`form-control }`}
                    style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}
                    id=""
                    value={text}
                    placeholder='Enter your text here'
                    rows={6}
                    defaultValue={""}
                    onChange={handleChange}
                />
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-primary my-3' onClick={handleupClick}>Convert to UpperCase</button>
                    <button className='btn btn-primary my-3' onClick={handleloClick}>Convert to LowerCase</button>
                    <button className='btn btn-primary my-3' onClick={handleclear}>Clear</button>
                </div>
            </div>
            <div className='container' style={{color:props.mode==="light"?"black":"white"}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{text.split(" ").length * 0.08} Minutes to read</p>
                <p>{text.split("\n").length } Paragraphs</p>
            </div>
            <div className='container' style={{color:props.mode==="light"?"black":"white"}}>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Textform
