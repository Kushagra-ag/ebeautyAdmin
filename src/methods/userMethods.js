import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const options = {
	'content-type':'application/json'
};

export const getUsers = (data, page=0, type, success, failure) => {


	axios.
		get(`${API}/search/usersearch?page=${page}&isSeller=${data.isSeller}&query=${data.query}`, {
			headers: options
		})
		.then(res => {
			console.log(res);

			if(res.data.success) {
				success(res.data);
			} else {
				console.log('failed fetching users - from userMethods');
				failure();
			}
		})

}