import axios from 'axios';

const url = 'http://localhost:5000/notes';

export default fechNotes = () => axios.get(url);
