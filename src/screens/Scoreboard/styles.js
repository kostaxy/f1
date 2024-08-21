import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    borderRadius: 30,
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#303030',
  },
  scoreHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#002e5c',
    padding: 5,
    width: '100%',
  },
  rankHeader: {
    color: '#fff',
    width: '15%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  infoItemHeader: {
    color: '#fff',
    width: '60%',
    justifyContent: 'center',
    paddingStart: 15,
  },
  pointsHeader: {
    color: '#fff',
    width: '25%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  scoreboardListItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#7f7f7f6d',
  },
  rank: {
    display: 'flex',
    width: '15%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    paddingStart: 10,
  },
  infoItem: {
    color: '#000000',
    width: '60%',
    textAlign: 'center',
    paddingVertical: 10,
    paddingStart: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  infoItemInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  infoItemName: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  infoItemNameText: {
    color: '#000',
    fontSize: 16,
  },
  points: {
    display: 'flex',
    color: '#000000',
    width: '25%',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
  },
  infoItemsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flagImage: {
    width: 20,
    height: 20,
  },
});
