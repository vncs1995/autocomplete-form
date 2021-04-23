## First Run
Run 
```bash
yarn
npx pod-install
```

### Dependencies

react-native-linear-gradient
It's an antigue repo but still works pretty well even in recent versions of React Native

react-native-vector-icons
For use vectors in app, mostly to search icon I kept only FontAwesome.ttf for a lighter bundle

@react-navigation/native
In my opinion best navigation library
It has to add some boilerplate dependencies such as:
react-native-reanimated 
react-native-gesture-handler 
react-native-screens 
react-native-safe-area-context 
@react-native-community/masked-view
@react-navigation/stack

axios
It's needed to make REST api calls