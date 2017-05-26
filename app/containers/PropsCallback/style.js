import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "item": {
        "display": "flex",
        "flex": 1,
        "flexDirection": "column",
        "width": "100%",
        "background": "#ccc",
        "fontFamily": "'microsoft yahei'"
    },
    "option": {
        "width": "100%",
        "height": 50
    },
    "select": {
        "display": "flex",
        "flex": 1,
        "width": "100%",
        "height": 100,
        "background": "#b0d5e6",
        "color": "#000",
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "child": {
        "display": "flex",
        "flex": 1,
        "height": 30,
        "lineHeight": 30,
        "fontSize": 14,
        "fontWeight": "bold",
        "background": "#e0b2af"
    },
    "parent": {
        "height": 100,
        "color": "#000",
        "fontWeight": "bold",
        "fontSize": 20,
        "background": "#c5bac7"
    }
});