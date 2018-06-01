<template>
  <section id="posts">
   <PostsPreview v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :excerpt="post.previewText"
    :thumbnailImage="post.thumbmaiUrl"
    :id="post.id"/>
  </section>
</template>

<script>

 import PostsPreview from "@/components/Blog/PostPreview"

export default {
 
  components: {
    PostsPreview
  },
  asyncData(context){
    return context.app.$storyapi
    .get('cdn/stories',{
      version:'draft',
      starts_with:'blog/'
    }).then(res =>{
      return{
        posts: res.data.stories.map(bp => {
        return {
          id: bp.slug,
          title: bp.content.title,
          previewText: bp.content.summary,
          thumbmaiUrl: bp.content.thumbnail
        }
      })
      }
    })
  }
  // data() {
  //   return {
  //     posts: [{
  //       title: 'A new Beginning',
  //       previewText: 'This will be awesome, don\'t miss it!',
  //       thumbmaiUrl:"https://i.ytimg.com/vi/hElGAFco3Is/maxresdefault.jpg",
  //       id:"a-new-beginning"
  //     },{
  //       title: 'A new Beginning',
  //       previewText: 'This will be awesome, don\'t miss it!',
  //       thumbmaiUrl:"http://www.deliciousindia.com/wp-content/uploads/2015/04/Samosa-Recipe2.jpg",
  //       id:"a-sec-beginning"
  //     }]
  //   }
  // }
}
</script>

<style>
  #posts{
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 35rem) {
    #posts {
      flex-direction: row;
    }
  }
</style>
