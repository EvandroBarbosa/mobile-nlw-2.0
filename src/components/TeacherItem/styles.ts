import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e5f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontWeight: '700',
    color: '#32264d',
    fontSize: 20,
  },

  subject: {
    fontWeight: '400',
    color: '#6a6180',
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180',
  },

  footer: {
    backgroundColor: '#FAFAFC',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    fontWeight: '400',
    color: '#6a6180',
    fontSize: 14,
  },

  priceValue: {
    fontWeight: '700',
    color: '#8257e5',
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    flexDirection: 'row',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;