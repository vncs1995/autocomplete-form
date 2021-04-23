import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    maxHeight: 90,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 15,
  },
  textInput: {
    fontSize: 16,
    padding: 0,
  },
  cancelContainer: {
    alignSelf: 'flex-end',
  },
  cancelText: {
    color: COLORS.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
