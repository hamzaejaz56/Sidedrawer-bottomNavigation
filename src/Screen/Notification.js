import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomDrawer from 'react-native-bottom-drawer-view';

const TAB_BAR_HEIGHT = 49;

export default function Notification () {
    return(
        <BottomDrawer
            containerHeight={100}
            offset={TAB_BAR_HEIGHT}
        ></BottomDrawer>
    )
}

// const Notification = () => {
//   return (
//     <View>
//       <Text>Notification</Text>
//     </View>
//   )
// }

// export default Notification

// const styles = StyleSheet.create({})