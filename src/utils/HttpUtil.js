import { API_URL, APP_ID } from 'consts/AppConstants';

export const getRequest = (url, payload = {}) => {
	const options = {
		method: 'GET'
	};
  payload['app_id'] = APP_ID;
	const urlParamStr = convertJsonToUrlParams(payload);
	let urlStr = url;
	if (urlParamStr) {
		urlStr = `${url}?${urlParamStr}`;
	}
	return performRequest(urlStr, options);
};

const performRequest = async (url, options) => {
  let headers = {};
  options['mode'] = 'cors';
  options['cache'] = 'default';
  options['headers'] = getHeaders(headers);
  const requestUrl = `${API_URL}${url}`;
  try {
    const res = await fetch(requestUrl, options);
    const jsonResp = await res.json();
    return jsonResp;
  } catch(e) {
    throw new Error("no data found");
  }
};

const getHeaders = (headers = {}) => {
	const myHeader = new Headers();
	myHeader.append('Content-Type', 'application/json');
	myHeader.append('Accept', 'application/json, text/plain, */*');
	Object.keys(headers).forEach((key) => {
		myHeader.append(key, headers[key]);
	});
	return myHeader;
};

const convertJsonToUrlParams = (object) => {
	let urlParam = '';
	Object.keys(object).forEach((key) => {
		urlParam += `${key}=${object[key]}&`;
	});
	return urlParam.substr(0, urlParam.length -1);
};
