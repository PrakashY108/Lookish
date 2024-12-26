import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
img:{
    height: 80,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 11,
  },
  bottomclosetcontainer:{
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    marginHorizontal:40,
    padding:10,
    opacity:0.1,
    position:"absolute",
    bottom:-170
  }
})
export default styles