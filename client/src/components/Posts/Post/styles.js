import { makeStyles } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

export default makeStyles({
  root: {
    borderRadius: '5px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },

  tags: {
    marginTop: 12,
  },
  author: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: '#660066',
  },
  expand: {
    marginLeft: 'auto',
    color: '#660066',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

})
