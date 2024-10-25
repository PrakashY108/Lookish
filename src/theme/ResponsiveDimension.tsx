import { Dimensions, PixelRatio } from "react-native";

const {height,width} = Dimensions.get("screen");

const heightBaseScale= height/414;
const widthbasescale= width/919;

const responsiveDimension=()=>({

        heightPixel:(size:any)=>(PixelRatio.roundToNearestPixel(size *heightBaseScale)),
        widthPixel:(size:any)=>(PixelRatio.roundToNearestPixel(size*widthbasescale)),
       
        
})
export default responsiveDimension;