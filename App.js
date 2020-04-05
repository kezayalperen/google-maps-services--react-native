import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

import MapView, { PROVIDER_GOOGLE , Marker, Callout, Polygon, Circle } from 'react-native-maps';

export default class App extends React.Component{

  state = {
    coordinates2: [
      { name: '1', latitude: 39.755021, longitude: 37.002336 },
      { name: '2', latitude: 39.744814, longitude: 37.001048 },
      { name: '3', latitude: 39.742602, longitude: 37.037009 },
      { name: '4', latitude: 39.763649, longitude: 37.028834 },
    ]
  }

  render(){
    return(
      <MapView
      style={{height:'100%'}}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 39.750597,
        longitude: 37.015100,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035
      }}>

        <Polygon coordinates={this.state.coordinates2}
        fillColor={'rgba(100,100,200,0.3)'}/>

        <Circle center={{latitude: 39.750597, longitude: 37.015100}}
        radius={1000}
        fillColor={'rgba(100,100,200,0.3)'} />

        <Marker coordinate={{ latitude: 39.750597,longitude: 37.015100 }}
        title={'Sivas Cumhuriyet Meydanı'}>
        
        <Callout>
          <Text>SİVAS SANA KURBAN OLAYIM SÜPER BİR ŞEHİRSİN ADAMMMMMMMMMMM</Text>
        </Callout> 

        </Marker>
      </MapView>
    )
  }
}