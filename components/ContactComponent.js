import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';



class Contact extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Contact us'
  }


  // Week 1 task 2 

  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card
            title={"Contact Information"}
            wrapperStyle={{ margin: 20 }}
          >
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 90838</Text>
            <Text
              style={{ marginBottom: 10 }}
            >U.S.A</Text>
            <Text>Phone: 206-3454-3455</Text>
            <Text>Email: campsites@nucamp.co</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
