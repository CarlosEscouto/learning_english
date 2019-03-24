import React from 'react'
// import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {

  const renderCards = () => {
    let cards = [];
    let views = [
      {label: 'Starter', id: 'starter'}, 
      {label: 'Activate', id: 'activate'}, 
      {label: 'Development', id: 'development'}, 
      {label: 'Advanced I', id: 'advanced1'}, 
      {label: 'Advanced II', id: 'advanced2'}
    ];
    let colors = [
      {color: '#9b59b6', darkenColor: '#7B4591'}, 
      {color: '#3498db', darkenColor: '#276FA0'}, 
      {color: '#2ecc71', darkenColor: '#209250'}, 
      {color: '#e74c3c', darkenColor: '#AB362A'}, 
      {color: '#f39c12', darkenColor: '#CF840E'}
    ];
    let images = [
      require('../../images/Number-1.png'),
      require('../../images/Number-2.png'),
      require('../../images/Number-3.png'),
      require('../../images/Number-4.png'),
      require('../../images/Number-5.png')
    ];

    for(let i=0; i<=4; i++) {
      cards.push(
        <Card key={i} >
          <CardItem style={{
            backgroundColor: colors[i].color,
            borderBottomStartRadius: 0,
            borderBottomEndRadius: 0,
            }}
            >
            <Left>
              <Button transparent onPress={Actions[views[i].id]} >
                <Thumbnail source={ images[i] }/>
              </Button>
              <Body>
                <Button transparent style = {{padding: 0, margin: 0}} onPress={Actions[views[i].id]} >
                  <Text style={{
                    color: "#ffffff",
                    fontFamily: "Montserrat",
                    fontSize: 16,
                    padding: 0,
                    marginLeft: -18,
                    }}>
                    Book {i+1}
                  </Text>
                </Button>
                <Text style={{
                  fontSize: 12,
                  color: "#eeeeee"
                  }} note>
                  {views[i].label}
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem style={{
            backgroundColor: colors[i].color,
            borderTopWidth: 1,
            borderTopColor: colors[i].darkenColor,
            borderTopStartRadius: 0,
            borderTopEndRadius: 0,
            }}>
            <Left>
              <Button transparent >
                <Icon style={{color: "#ffffff", fontSize: 20}} active name="import-contacts" />
                <Text style={{color: "#ffffff"}} >Lessons</Text>
              </Button>
            </Left>
            <Right>
              <Icon style={{color: "#ffffff", fontSize: 22}} active name="keyboard-arrow-down"/>
            </Right>
          </CardItem>
        </Card>
      )
    }

    return cards;
  }

  return (
    <React.Fragment>
      <Container>
        {/* <Header /> */}
        <Content styles={{ backgroundColor: 'red' }}>
          {renderCards()}
        </Content>
      </Container>
    </React.Fragment>
  );
}
export default Home