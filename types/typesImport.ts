import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Dispatch, SetStateAction } from 'react'
import {ImageSourcePropType } from "react-native"
export type RootStackParamList = {
    "Discover": any,
    "Place": any
};
    
const RootStack = createNativeStackNavigator<RootStackParamList>();

export type MenuContainerProps = {
    children?:undefined| React.ReactNode
    title:any,
    imageSrc: any,
    type: string,
    setType: Dispatch<SetStateAction<any>>,
    };
export type ItemCardContainerProps = {
    children?:undefined| React.ReactNode
    title:string,
    imageSrc: string,
    location: string
    source?: any,
    data?:any


};
export type mainDataProps = {
    data?: any
    photo?: any,
    images?: any,
    medium?: any,
    url?:string
    
    }