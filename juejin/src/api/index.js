import {
	get
} from './axios'

const getArticles = get('/api/getArticles');

export {
	getArticles
}
