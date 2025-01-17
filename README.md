# Welcome to my Aora - React Native Appp 👋

This is modern mobile app built with **React Native** and **Appwrite** (as the backend), enabling seamless sharing of community videos. 
It offers a smooth user experience, dynamic animations, and essential features for a community-focused video-sharing platform.
 

# App demo
https://github.com/user-attachments/assets/a685357f-dc6d-4cbf-b926-9d85a3dd2775

---

## 🛠 **Tech Stack**
- **React Native**: For building the mobile app.
- **Expo**: To ease development and deployment.
- **NativeWind**: For styling using Tailwind CSS principles.
- **Animatable**: To create captivating animations throughout the UI.
- **Appwrite**: As the backend for user authentication, database management, and media storage.
- **Appwrite Database & Storage**: To securely store user data and uploaded videos.
 
---


## 🌐 **Features in Detail**
 
- **Onboarding Screen**: Engaging graphics and clear instructions welcome users to the app.
- **Secure Email Login**: Protects user accounts with secure authentication using Appwrite.
- **Animated FlatList**: Users can browse the latest AI-generated videos with smooth animations.
- **Pull-to-Refresh**: Users can refresh content with a pull gesture to get the latest videos.
- **Tab Navigation**: Navigate between sections like Home, Search, and Profile easily.
- **Upload Video & Images**: Users can upload their own AI-generated videos directly from their device.
- **Profile Screen**: View user profile details, uploaded videos, and follower counts.
- **Dynamic Animations**: Enhanced user interaction and engagement using the **Animatable** library.
 


## 📱 **Screenshots**

| Register                | Home                     | login             |
| ------------------------- | ------------------------ | ------------------------ |
| ![register](https://github.com/user-attachments/assets/debe6e03-be6d-4cb1-bcda-456749d8f64e) |![home](https://github.com/user-attachments/assets/59243dc7-2d68-40c7-a209-ad3e12663a97)|![login](https://github.com/user-attachments/assets/c8716b94-b466-46ac-9770-b8ad12843c2d)|

| Search                   | Upload                   | Profile               |
| ------------------------- | ------------------------ | ------------------------ |
| ![search](https://github.com/user-attachments/assets/b34a27ab-b2b5-4532-bab7-47ebf0f6cf50)| ![upload](https://github.com/user-attachments/assets/454b0df9-d37d-4446-9831-68cc1474b446)    | ![profile](https://github.com/user-attachments/assets/8d54ef77-df94-41ab-b5df-3c6ab1cb9e55) |

###  Design Guide:
This app follows a carefully crafted design based on a Figma prototype:
[Figma Design Guide](https://www.figma.com/design/o6xKq25ETLqw5ebqgZonVp/Aora---React-Native-Crash-Course?node-id=1-2171&node-type=frame&t=SQoGTjvdokmOK4wC-0)

and this tutorial: https://www.youtube.com/watch?v=DwbwuYYiBTk 

---

## 🔧 **How to Run the App**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/aora-app.git
   cd aora-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App**:
   - For iOS:
     ```bash
     expo start --ios
     ```
   - For Android:
     ```bash
     expo start --android
     ```

4. **Setup Appwrite Backend**:
   - Configure your Appwrite server for authentication, database, and storage integration. Instructions for Appwrite setup can be found [here](https://appwrite.io/docs).




## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
