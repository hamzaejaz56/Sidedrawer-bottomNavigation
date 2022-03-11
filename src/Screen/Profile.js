import { StyleSheet, SafeAreaView, Text, View, Button, Caption } from 'react-native'
import React from 'react'
// import{Avatar, Title, Caption, Text, TouchableRipple,} from 'react-native-paper';

// const ProfileScreen = () =>{
//     return(
//         <SafeAreaView style={styles.container}>
//             <View>
//                 <View>
//                     <Avatar.Image
//                         source={{
//                             uri: 'https://api.adorable.io/avatars/80/abottadorable.png'

//                         }}
//                         size={80}
//                     />
//                     <View>
//                         <Title>Hamza</Title>
//                         <Caption>react developer</Caption>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }
// export default ProfileScreen;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//     }
// })












import BottomDrawer from 'react-native-bottom-drawer-view';
const TAB_BAR_HEIGHT = 49;

export default function Profile () {
    return(
        <BottomDrawer
            containerHeight={100}
            offset={TAB_BAR_HEIGHT}
        ></BottomDrawer>
    )
}

// export default class Profile extends React.Component {
//     renderContent = () => {
//         return (
//             <View>
//                 <Text>Get directions to your Profile</Text>
//             </View>
//         )
//     }

//     render() {
//         return (
//             <BottomDrawer
//                 containerHeight={100}
//                 offset={TAB_BAR_HEIGHT}
//             >
//                 {this.renderContent()}
//             </BottomDrawer>
//         )
//     }
// }

// const Profile = () => {
//   return (
//     <View>
//         <Text>Get directions to your Profile</Text>
//     </View>

// {/* <BottomDrawer
// containerHeight={100}
// offset={TAB_BAR_HEIGHT}
// >
// {this.renderContent()}
// </BottomDrawer> */}
//   )
// }

// export default Profile

// const styles = StyleSheet.create({})

