import { ActivityIndicator, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaProvider>
    <SafeAreaView>
    <ScrollView>
    <View style={{ backgroundColor: "peachpuff" }}>
      <Text style={{ fontSize: 25, color: "lightblue" }}>
  This is the Home Screen
</Text>
<TextInput style={{ height: 40, borderWidth: 2, borderRadius: 15, placeholderTextColor: 'pink', margin: 5 }} placeholder="full name" />
<TextInput style={{ height: 40, borderWidth: 2 }} placeholder="Class"/>
<TextInput style={{ height: 40, borderWidth: 2 }} placeholder="School"/>
<TextInput style={{ height: 40, backgroundColor: 'lightgray', borderColor: 'black', borderWidth: 2 }} placeholder="Password"/>
      <Image source= {{  uri: "https://pictures-nigeria.jijistatic.net/200637264_NzIwLTEyODAtZmU1MTU2Y2VlNQ.webp" }} style={{ width: 400, height: 600 }} />
   <Button title="Click me"/>
   <ActivityIndicator size="large" color="#00ff00" />
    </View>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}