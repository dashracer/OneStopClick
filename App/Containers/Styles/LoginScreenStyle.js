import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  btnSignIn: {
    marginTop: Metrics.doubleBaseMargin
  },
  forgotPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.doubleBaseMargin
  },
  doNotHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin
  },
  socialAccountButton: {
    margin: Metrics.baseMargin
  },
  googleButton: {
    backgroundColor: Colors.google
  }
})
