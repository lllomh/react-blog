import axios from 'axios';
import qs from 'qs';

let http = {
    post:'',
    get:''
};
const baseurl = '';
// const baseurl = process.env.NODE_ENV === 'production' ? 'http://lllomh.cn' : '/';
http.post = function (api,data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        console.log(baseurl+api,'wewewe')
            axios.post(baseurl+api, params).then((res)=>{
                resolve(res)
            })
        });

};

http.get = function (api,data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.post(baseurl+api, params).then((res)=>{
            resolve(res)
        })
    });

};

export default http
