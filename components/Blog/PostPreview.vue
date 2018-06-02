<template>
     <nuxt-link 
      class="post-preview"
      :to="'/blog/'+id">
      <article>
      <div 
        :style="{backgroundImage:'url('+thumbnailImage+')'}"
        class="post-preview-thumbnail">
      </div>
      <div class="post-preview-content">
        <h1>{{title}}</h1>
        <p>{{excerpt}}</p>
      </div>
      </article>
    </nuxt-link>  
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        excerpt:{
            type: String,
            required: true
        },
        thumbnailImage: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
    a {
        text-decoration: none;
        color: black;   
    }
    .post-preview {
        border-radius:3px;
        box-shadow: 1px 1px 5px 1px rgba(0, 0,0, 0.5);
        width: 90%;
        margin: 1rem auto;
        height: 20rem;
    }
    .post-preview-thumbnail{
        background-position: center;
        background-size: cover;
        width:100%;
        height: 10rem;
    }
    .post-preview-content{
        background-position: center;
        padding: 1rem;
        text-align: center;

    }
    @media (min-width: 35rem){
        .post-preview {
            width: 25rem;
            margin: 1rem;
        }
    }

</style>

