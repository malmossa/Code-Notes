import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 30px',
  },
  logo: {
    marginLeft: '5px',
    height: '50px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  avatar: {
    backgroundColor: '#fff',
    color: 'primary',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    color: '#fff',
  },
  signIn: {
    color: '#fff',
  }
}));
