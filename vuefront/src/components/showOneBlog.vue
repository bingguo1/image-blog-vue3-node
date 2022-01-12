<template>
<div>
    <div>
        <img :src="getImageSrc(imageBlog)" class="blogimage" />
    </div>
    Author: {{imageBlog.author}} <br>
    Tags: {{imageBlog.tags}}
    <div>
        {{imageBlog.blog}}
    </div>
</div>    
</template>
<script>
import axios from "axios";
export default {
    name: 'image-blog-list',
    data(){
        return {
            imageBlog:{
                title: '',
                author: '',
                tags : '',
                blog: '',
                img: {
                    contentType:'',
                    data:'',
                },
                meta: {
                    stars: 0,
                    favs:  0,
                }
            }
        }
    },
    created(){
        console.log("paras:"+this.$route.params);
        let apiURL = "http://localhost:4000/api/blog/"+this.$route.params.blogid;
        axios.get(apiURL)
            .then((res) => {
                this.imageBlog = res.data;
                console.log("title:"+this.imageBlog.title);
            })
            .catch((error) => {
                console.log("have error coming:"+error);
                this.$router.push("/404");
                return;
            });
               
       // this.$router.push("/404");

    },
    methods:{
        getImageSrc(imageblog) {
            return (
                "data:image/" +imageblog.img.contentType +";base64," +
                    Buffer.from(imageblog.img.data, "binary").toString("base64")
            );
        },
    }
}
    
</script>
<style>
    
</style>
