import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Modal,ScrollView,KeyboardAvoidingView,Image} from 'react-native';
import db from'../config';
import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize'

export default class HomeScreen extends Component{
    state = {
        curTime: null,
        electricity:''
    }
    fetchElectricityDetails=async()=>{
        alert(this.state.curTime)
        const electricityRef=await db.collection("electricity").where("month","==",this.state.curTime).get()
        electricityRef.docs.map((doc)=>{
            //alert(doc.data())
            var electricity=doc.data().electricity
            this.setState({
                electricity:electricity
            })
        })
        //alert(this.state.electricity)
       
    }
    showCurrentDate=()=>{
        var month=new Date().getMonth()+1
        this.setState({
            curTime:month
        })
    }
    componentDidMount(){
        this.showCurrentDate()
        
    }
    
    render(){
       
        return(
            <View style={styles.container}>
                {
                    this.fetchElectricityDetails()
                }
                <View style={{justifyContent:'flex-start'}}>
                <Text style={styles.title}>Resource Management System</Text>
            </View>
            <View>
                <Text >{this.state.curTime}</Text>
                <Text>{this.state.electricity}</Text>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    title:{
        flex:0.2,
        justifyContent:'flex-start',
        alignItems:'center',
        fontSize:65,
        borderWidth:5,
        backgroundColor:'orange'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',

    }
})