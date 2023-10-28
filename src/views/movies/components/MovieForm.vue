<template>
  <Form>
    <!--   Tile   -->
    <div class="form-row">
      <label for="title">Title <sup class="danger-color">*</sup></label>
      <Field v-model="form.title" name="title" rules="required" type="text" />
      <ErrorMessage class="error-msg" name="title" />
    </div>
    <!--   Description   -->
    <div class="form-row">
      <label for="description">description</label>
      <Field
        v-model="form.description"
        as="textarea"
        name="description"
        rows="4"
        type="text"
      />
      <ErrorMessage class="error-msg" name="description" />
    </div>
    <!--   Year   -->
    <div class="form-row">
      <label for="year">Year <sup class="danger-color">*</sup></label>
      <Field
        :value="new Date().getFullYear()"
        name="year"
        rules="required|minLength:8"
        step="1"
        type="number"
      />

      <ErrorMessage class="error-msg" name="year" />
    </div>
    <!--   Actors   -->
    <div class="form-row">
      <ErrorMessage class="error-msg" name="actors" />
      <actorsTable
        :selectedActors="form.actors"
        :title="actorTitleLabel"
        @select="(v) => (form.actors = v)"
      />
    </div>
    <div class="flex-between">
      <button type="reset" @click="$router.back()">back</button>
      <button :disabled="notValid" type="submit" @click="submit">submit</button>
    </div>
  </Form>
</template>
<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import actorsTable from "@/views/movies/components/ActorsTable.vue";

export default {
  name: "MovieForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    actorsTable,
  },
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: {
        title: null,
        description: "",
        year: new Date().getFullYear(),
        actors: [],
      },
      actorTitleLabel: `<label for="actors">actors <sup class="danger-color">*</sup></label>`,
    };
  },
  computed: {
    notValid() {
      return !this.form.title || !this.form.actors.length || !this.form.year;
    },
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
  },
  created() {
    if (this.movie?.id) this.form = this.movie;
  },
};
</script>

<style lang="scss" scoped></style>
