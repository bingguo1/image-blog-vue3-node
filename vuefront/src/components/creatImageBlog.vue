<template>
<div id="createBlogForm">
    <div>
        <div>
            <label for="title">Blog Title</label><br>
            <input
                v-model="title"
                type="text"
                id="title"
                placeholder="Title"
                name="title"
                required
                />
        </div>
        <div>
            <label for="author"> Author </label><br>
            <input v-model="author" id="author" type="text"/>
        </div>
        <div>
            <label for="tags"> Add tags: </label><br>
            <input v-model="tags" id="tags" type="text"/>
        </div>
        <div>
            <label for="blog"> Blog: </label><br>
            <textarea
                v-model="blog"
                id="blog"
                name="blog"
                rows="15"
                placeholder="Blog"
                required
                >
            </textarea>
        </div>
        <input type="file" @change="uploadFile" ref="file" /><br>
        <button @click="submitFile">Upload!</button>
    </div>
</div>
</template>
<script>
import axios from "axios";
export default {
    name: 'create-image-blog',
    data(){
        return {                     
            title: '',
            author: '',
            tags : '',
            blog: '',
            img:'',
            // date: '',
            // meta: {
            //     stars: 0,
            //     favs:  0,
            // }
        }
        
    },
    methods: {
        uploadFile() {
            this.img = this.$refs.file.files[0];
        },
        submitFile() {
            const formData = new FormData();
            formData.append("img", this.img);
            formData.append("title", this.title);
            formData.append("blog", this.blog);
            formData.append("author", this.author);
            formData.append("tags", this.tags);
            const headers = { "Content-Type": "multipart/form-data" };
            axios.post("http://localhost:4000/api/create-blog", formData, { headers }).then((response) => {
                console.log("response from server:"+response.data);
            });
        },
    }
}
</script>

<style>
    #createBlogForm{
    text-align: center;
    }
    #title, #author, #tags, #blog{
    width: 400px;
    }
    label{
    text-align: left;
    }

</style>
