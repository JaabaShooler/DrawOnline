import React, {useEffect, useRef} from 'react';
import {observer} from "mobx-react-lite";
import canvasState from "../../store/canvasState";
import toolsState from "../../store/toolsState";
import Pencil from "../../tools/Pencil";

const Canvas = observer(() => {

    const canvasRef = useRef();

    useEffect(()=>{
        canvasState.setCanvas(canvasRef.current)
        toolsState.setTools(new Pencil(canvasRef.current))
    }, [])

    const mouseDownHendler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    return (<canvas ref={canvasRef} onMouseDown={()=>mouseDownHendler()} width={document.documentElement.clientWidth} height={document.documentElement.clientHeight}/>);
});

export default Canvas;