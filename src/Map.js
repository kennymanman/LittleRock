import React from "react"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import Layout from "./Layout"


export class MapContainer extends React.Component {
    render() {
      return (
        

        <Layout>
        <Map className="map" google={this.props.google} zoom={14}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

                
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
        </Layout>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBAVFYrDSy1NYcpeRldoN5X9Mx0NgcT6zc')
  })(Map)