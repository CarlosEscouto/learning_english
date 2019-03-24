import React from 'react'
// import { TouchableOpacity, Text } from 'react-native'
import { Container, Content, List, ListItem, Thumbnail, Text, View} from 'native-base';

const Starter = () => {

  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <Thumbnail  />
              <View>
                <Text style={{
                  color: "#7B4591",
                  fontFamily: "Roboto_medium"
                  }}>
                  LESSON 1
                </Text>
                <Text note>Nice to meet you!</Text>
              </View>
          </ListItem>
          <ListItem>
            <Thumbnail  />
              <View>
                <Text style={{
                  color: "#7B4591",
                  fontFamily: "Roboto_medium"
                  }}>
                  LESSON 2
                </Text>
                <Text note>After class</Text>
              </View>
          </ListItem>
          <ListItem>
            <Thumbnail  />
              <View>
                <Text style={{
                  color: "#7B4591",
                  fontFamily: "Roboto_medium"
                  }}>
                  LESSON 3
                </Text>
                <Text note>At the café</Text>
              </View>
          </ListItem>
          <ListItem>
            <Thumbnail  />
              <View>
                <Text style={{
                  color: "#7B4591",
                  fontFamily: "Roboto_medium"
                  }}>
                  LESSON 4
                </Text>
                <Text note>Enrolling for extra classes</Text>
              </View>
          </ListItem>
          <ListItem>
            <Thumbnail  />
              <View>
                <Text style={{
                  color: "#7B4591",
                  fontFamily: "Roboto_medium"
                  }}>
                  LESSON 5
                </Text>
                <Text note>How do I get there?</Text>
              </View>
          </ListItem>
          <ListItem>
            <Thumbnail  />
              <View>
                <Text style={{
                  color: "#7B4591",
                  fontFamily: "Roboto_medium"
                  }}>
                  LESSON 6
                </Text>
                <Text note>What are you doing?</Text>
              </View>
          </ListItem>
          <ListItem>
            <Thumbnail  />
              <View>
                <Text style={{
                  color: "#7B4591",
                  fontFamily: "Roboto_medium"
                  }}>
                  Verbs List
                </Text>
                <Text note>Verbs list to complete with their meanings</Text>
              </View>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}
export default Starter