import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    maxHeight: 60,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  icon: {
    paddingRight: 10,
  },
  input: {
    color: COLORS.grey,
  },
});

export default styles;
