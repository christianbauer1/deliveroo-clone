# Notizen:
2:18:00
Source: https://www.youtube.com/watch?v=AkEnidfZnCU&ab_channel=SonnySangha 

## Noch nicht verstanden
DishRow.js und basketSlice.js -> Wie funktioniert `const items = useSelector(state => selectBasketItemsWithId(state, id))`

## Troubleshooting
- Module (zB Icons) werden nicht geladen: `expo doctor --fix-dependencies`
- Manchmal können neue modules mit npm nicht installiert werden wegen versionskonflikten. Mit yarn sollte es aber gehen!
Wechsel auf yarn: `package-lock.lock` löschen (NICHT in production machen!)
Neues package installieren: `@reduxjs/toolkit react-redux` damit wird ein neuen yarn.lock file erstellt 

## VS Code extensions
`VS CODE tailwind css intellisense extension` 
`ES7+ React/Redux/React-Native snippets`

## Shortcuts
rnf

## Deliveroo-clone Einrichtung und Tipps
With SanityCMS, GROQ, Redux, TailwindCSS & Navigation
1. Create Expo project (bessere Simulation für iOS und Android)
https://docs.expo.dev/ 
2. Install tailwindcss-react-native
```
npm install tailwindcss-react-native
npm install --save-dev tailwindcss
```
Deprecated use Instead: https://www.nativewind.dev/quick-starts/expo 
- Anleitung zum tailwind aufsetzen sehr ähnlich!
- `tailwind.config.js` erstellen in root 
- Babel: Läuft vor dem Bundle (Replacing css, ...)
- Falls style noch nicht funktioniert: React native navigation installieren
3. https://reactnavigation.org/docs/getting-started/
`npm install @react-navigation/native`
und da wir expo nutzen `npx expo install react-native-screens react-native-safe-area-context`
- Wrap App.js in NavigationContainer
`import { NavigationContainer } from '@react-navigation/native';`
4. https://reactnavigation.org/docs/hello-react-navigation 
`npm install @react-navigation/native-stack`
5. https://www.npmjs.com/package/react-native-heroicons 
6. Optional: `npm i react-currency-formatter`
7. Redux für state management: https://redux-toolkit.js.org/tutorials/quick-start -> In `App.js` muss man es auch einbinden!
8. Optional: React Native Animatable https://github.com/oblador/react-native-animatable für schönere Animationen als die Defaults von expo
9. Optional: React Native Progress https://www.npmjs.com/package/react-native-progress 
10. Optional: IOs/Apple Map View https://docs.expo.dev/versions/latest/sdk/map-view/ 