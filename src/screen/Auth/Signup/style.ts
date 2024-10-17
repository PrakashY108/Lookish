import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.background
    },

    heading:{
        color:Colors.textcolor,
        fontSize:30,
        alignSelf:"center",
        marginTop:20
    },
    detailcontainer:{ 
        backgroundColor:Colors.white,
        marginHorizontal:30,
        borderRadius:20,
        paddingHorizontal:20,
        paddingTop:30

    }
});
export default styles;
