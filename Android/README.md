# Tips and Tricks


If you cannot download JDK1.8: Do not download it when connected to Investec network (Android Studios requires Java Development Kit (JDK) 8)

If using latest version of Android Studios a basic activity is the closest equivalent to blank activity.

If you get an error regarding JUnit (Failed to resolve : Error junit:junit:4.12): Download the JUnit .jar file from mvnrepository (https://mvnrepository.com/artifact/junit/junit/4.12)

	- Save the .jar file to your project lib folder (CurrencyConverter/app/libs)

	- Open file -> Project Structure -> app -> Dependencies

	- Remove (-) junit:junit:4.12 test compile

	- Add (+) the junit.jar file dependency

If you are having issues finding the okhttp library. Try building the project outside the Investec network, alternatively, download the .jar files from mvnrepository

In the manifest, place <uses-permission android:name ="android.permission.INTERNET" /> outside the <application> tag

To create a device emulator see: https://developer.android.com/studio/run/managing-avds.html
