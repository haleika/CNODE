import axios from "axios";
import NProgress from 'nprogress'

const CNODE_API = 'https://cnodejs.org/api/v1'
const TOPICS = '/topics'
const TOPIC_CONTENT ='/topic/'
const AUTHOR_DATA = '/user/'


export const requestTopic = function(topic){
    return new Promise((resolve,reject)=>{
        NProgress.start();
        axios.get(CNODE_API+TOPICS,{
            params:topic
        })
        .then((res)=>{
            if(res.data.success){
                resolve(res.data.data)
                NProgress.done();
            }else{
                reject();
            }
        })
        .catch(e=>{
            console.log("获取topic内容失败")
            reject(e);
        })
    })
}
// 获取文章信息
export const requestContent = function(id){
    return new Promise((resolve,reject)=>{
        NProgress.start();
        axios.get(CNODE_API+TOPIC_CONTENT+id)
        .then((res)=>{
            if(res.data.success){
                resolve(res.data.data)
                NProgress.done();
            }else{
                reject();
            }
        })
        .catch(e=>{
            console.log("获取内容失败")
            reject(e);
        })
    })
}

//获取作者信息
export const requestAuthor = function(name){
    return new Promise((resolve,reject)=>{
        NProgress.start();
        axios.get(CNODE_API+AUTHOR_DATA+name)
        .then((res)=>{
            if(res.data.success){
                resolve(res.data.data)
                NProgress.done();
            }else{
                reject();
            }
        })
        .catch(e=>{
            console.log("获取内容失败")
            reject(e);
        })
    })
}