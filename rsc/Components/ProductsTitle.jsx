import { Text, View, Image, } from 'react-native';
import { myColors } from '../Utils/MyColors';

const ProductTitle = ({title}) => {
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:19, fontWeight:"600"}}>{title}</Text>
            <Text style={{fontSize:15, color:"#00CD00"}}> Hiển thị tất cả</Text>
        </View>)
}
export default ProductTitle