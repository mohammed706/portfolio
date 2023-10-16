import React , {useState} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { certificates } from "../../data";
import image1 from "../../img/certificate/award.JPG";
const Certificate = () => {
    
    const[data,setData] = useState({
        img:'',
        i:0
    })
    const viewImage = (img,i) => {
        setData({img,i})
    }
    const imageAction = (action) => {
        let i = data.i 
        if(action === "next"){
            setData({img: certificates[i+1] , i : i+1 })
        }
        if(action === "last"){
            setData({img: certificates[i-1] , i : i-1 })
        }
        if(!action){
            setData({img: "", i : 0})
        }
    }
    return (
        <>
        {/* {data.img && (
            <div style={{
                width:"100%",
                height:"100vh",
                background:"black",
                position:"fixed",
                display:"flex",
                justifyContent:"center",
                overflow:"hidden"
            }}>
                <button onClick={()=>imageAction()} className="btn" style={{position:"absolute" , top:"10px" , right:"10px" ,backgroundColor:"red" , color:"white"}}>X</button>
                <div className="d-flex align-items-center">
                    <button className="btn-danger m-4" style={{border:"none",borderRadius:"10px",outline:"none",backgroundColor:"#218DB8" , color:"white"}} onClick={()=>imageAction("last")}>Previous</button>
                    <img src={data.img} style={{width:"auto",maxWidth:"90%",maxHeight:"90%"}}/>
                    <button className="btn-warning m-4" style={{border:"none",borderRadius:"10px",outline:"none",backgroundColor:"#218DB8" , color:"white"}} onClick={()=>imageAction("next")}>Next</button>
                </div>
            </div>
        )} */}
            <div style={{padding:"10px"}}>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter="20px">
                        {certificates &&
                        certificates.map((item, i) => {
                            return (
                                <>
                                    <img
                                        key={i}
                                        src={item}
                                        alt="..."
                                        style={{ width: "100%", display: "block" ,cursor:"pointer"}}
                                        // onClick={()=>viewImage(item , i)}
                                    />
                                
                                </>
                            );
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
};

export default Certificate;
