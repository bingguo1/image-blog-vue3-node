<template>
<div>
    <h1>Image Blogs</h1>
   
    <div id="list" v-for="(imageBlog,index) in imageBlogs" :key="index">
      <div id="imageBlock" @mouseover="hover = index" @mouseleave="hover = null">
          <img :src="getImageSrc(imageBlog)" class="blogimage" />
          <span v-if="hover === index">
              <button id="viewButton"> <router-link :to="'/blog/'+imageBlog._id">  View </router-link>  </button>
              <button id="deleteButton"> Delete </button>
          </span>
      </div>
      <div class="imageDesc">
          {{imageBlog.blog}}
      </div>
    </div>
</div>

</template>
<script>
    import axios from "axios";
export default {
    name: 'image-blog-list',
    data(){
        return{
            hover: null,
            imageBlogs: [],
            // title: '',
            // author: '',
            // tags : '',
            // blog: '',
            // img:'',
            // date: '',
            // meta: {
            //     stars: 0,
            //     favs:  0,
            // }
        }
        
    },
    created() {
        let apiURL = "http://localhost:4000/api/list-blogs";
        axios.get(apiURL)
            .then((res) => {
                this.imageBlogs = res.data;
                // this.imageBlogs.forEach((x) => {
                //     console.log(x.title);
                //     console.log(x.author);
                // });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods:{
        getImageSrc(imageblog) {
            //console.log("type:" + imageblog.img.contentType);
            return (
                "data:image/" +imageblog.img.contentType +";base64," +
                    Buffer.from(imageblog.img.data, "binary").toString("base64")
            );
        },
    }
    
    
}
</script>

<style>
    #list{
    display: flex;
    }
    #imageBlock{
    width: 300px;
    height:300px;
    position:relative;
}
    .blogimage{
    width: 300px;
    height:300px;
    }
    #viewButton{
    position: absolute;
    top: 50%;
    left: 30%;
    }
#deleteButton{
    position: absolute;
    top: 50%;
    left: 50%;
    }


    .imageDesc{
    margin:0px;
    padding: 0px;
    width:100%;
    height:300px;

}
</style>
