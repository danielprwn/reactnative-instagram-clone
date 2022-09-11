import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";

import { firebase } from "../../firebase";
//import "firebase/firestore";

import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("A email is required"),
    password: Yup.string()
      .required()
      .min(8, "The password requires a minimum of 8 characters"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Firebase Login Successful", email, password);
    } catch (error) {
      Platform.OS != "web" ? Alert.alert(error.message) : alert(error.message);
      //Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => onLogin(values.email, values.password)}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
          <>
            <View
              style={[
                styles.inputFields,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#b3b3b3"
                      : "#eb0909",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#6e6e6e"
                placeholder="Type phone number, username, or e-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputFields,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? "#b3b3b3"
                      : "#eb0909",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#6e6e6e"
                placeholder="Password"
                autoCapitalize="none"
                textContentType="password"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <View style={{ alignItems: "flex-end", marginBottom: 8 }}>
              <Text style={{ color: "#45abff" }}>Forgot your password?</Text>
            </View>

            <Pressable
              titleSize={20}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Log In!</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>You do not have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
                <Text style={{ color: "#45abff" }}>Sign Up!</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputFields: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
    borderWidth: 0.8,
  },

  button: {
    backgroundColor: "#0096f6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 50,
    justifyContent: "center",
  },
});

export default LoginForm;
