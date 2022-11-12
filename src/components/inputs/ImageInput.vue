<template>
  <div>
    <div @click="clickImage">
      <img
        v-if="previewImage != null"
        :src="previewImage"
        class="uploading-image"
      />
    </div>
    <input
      id="imageInput"
      class="input"
      type="file"
      accept="image/jpeg"
      @change="uploadImage"
    />
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        // console.log(this.previewImage);
        this.$store.commit('updateCreateQuizImage', {
          image: this.previewImage,
        })
      };
    },
  },
}; // missing closure added
</script>

<style>
.uploading-image {
  border-radius: 8px;
  max-width: 100%;
  max-height: 500px;
}
.input {
  max-width: 300px;
}
</style>
