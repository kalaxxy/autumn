<template lang="pug">
  section
    form(@submit.prevent="sendForm")
      input(style="display:none" type="file" @change="handleFile" ref="fileUpload")
      button(type="button" @click="$refs.fileUpload.click()") Загрузить файл

      input(type="text" v-model="formData.name")
      input(type="text" v-model="formData.description")

      button Отправить форму
    
    img(v-if="filePreview" :src="filePreview")
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        description: "",
        photo: ""
      },
      filePreview: ""
    }
  },
  methods: {
    handleFile(e) {
        // Взять файл из формы
        const photoFile = this.fileFromForm(e)
        // Вставить файл в объект formData
        this.formData.photo = photoFile
        // Сгенерировать превью для файла
        this.renderFile(photoFile).then((f) => {
          this.filePreview = f
        })
    },
    fileFromForm(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) throw new Error("Нет файла");

        return files[0]
    },
    renderFile(file) {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
          try {
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                  resolve(reader.result);
              };
          } catch (error) {
              throw new Error("Ошибка при чтении файла");
          }
      });
    },
    sendForm() {
      console.log("Sending form", this.formData)
    }
  }
}
</script>