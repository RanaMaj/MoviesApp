import React from "react";
import { View } from "react-native";

const ItemSeparator = ({ width, height }) => {
    return <View style={{ width, height }} />
}

ItemSeparator.defaultProps = {
    height: 0,
    width: 0,
}

export default ItemSeparator
