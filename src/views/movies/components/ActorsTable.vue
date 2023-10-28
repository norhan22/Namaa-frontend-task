<template>
  <div>
    <div class="flex-between">
      <p v-html="title"></p>
      <nav class="py-0">
        <a href="#!" @click="addNewActor">Add Actor</a>
      </nav>
    </div>
    <!--  ////////////////////////////////
      // Editable Table
       /////////////////////////-->
    <Form class="editableTable" @submit="takeAction">
      <table border="0" cellpadding="10" cellspacing="2" width="100%">
        <thead>
          <!--  ///////////// Header ///////////// -->
          <tr>
            <th align="center" class="checkboxCol">
              <input
                v-model="selectAll"
                :value="false"
                name="selectAll"
                type="checkbox"
              />
            </th>
            <th>Name</th>
            <th>age</th>
            <th>join date</th>
            <th>actor’s role</th>
            <th>actions</th>
          </tr>
          <!--  ///////////// Editable Form ///////////// -->
          <tr v-if="formMode" class="form-row">
            <th class="empty"></th>
            <th>
              <Field
                v-model="form.name"
                class="m-auto"
                name="name"
                placeholder="Enter Name"
                rules="required"
                type="text"
              />
              <ErrorMessage class="error-msg" name="name" />
            </th>
            <th>
              <Field
                v-model="form.age"
                class="m-auto"
                max="150"
                min="1"
                name="age"
                placeholder="Enter age"
                rules="required|number|minMax:1,150"
                type="number"
              />
              <ErrorMessage class="error-msg" name="age" />
            </th>
            <th>
              <Field
                v-model="form.joinDate"
                class="m-auto"
                name="joinDate"
                placeholder="Enter Join Date"
                rules="required"
                type="date"
              />
              <ErrorMessage class="error-msg" name="joinDate" />
            </th>
            <th>
              <Field
                v-model="form.actorRole"
                as="select"
                name="role"
                rules="required"
              >
                <option class="placeholder" selected value="">
                  Enter Role
                </option>
                <option v-for="(role, i) in roles" :key="i" :value="role">
                  {{ role }}
                </option>
              </Field>
              <ErrorMessage class="error-msg" name="role" />
            </th>
            <th>
              <button class="btn-sm" type="submit">✔</button>
              <button class="btn-sm" type="reset" @click="resetForm">x</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(actor, i) in actors" :key="i">
            <td align="center" class="p-0">
              <input
                v-model="selected"
                :name="`actor_${i}`"
                :value="actor"
                class="checkboxCol"
                type="checkbox"
              />
            </td>
            <td>{{ actor.name }}</td>
            <td>{{ actor.age }}</td>
            <td>{{ actor.joinDate }}</td>
            <td>{{ actor.actorRole }}</td>
            <td>
              <div class="flex-between">
                <button
                  :disabled="selected.some((e) => e.id === actor.id)"
                  class="btn-sm"
                  type="button"
                  @click="editActor(actor, i)"
                >
                  Edit
                </button>
                <button
                  :disabled="selected.some((e) => e.id === actor.id)"
                  class="danger-color"
                  type="reset"
                  @click="removeActor"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Form>
  </div>
</template>
<script>
import { ErrorMessage, Field, Form } from "vee-validate";

const initObj = {
  name: null,
  age: null,
  joinDate: null,
  actorRole: null,
};
export default {
  name: "ActorsTable",
  props: {
    title: {
      type: String,
      default: "Actors",
    },
    selectedActors: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      ////////////////////////
      // Select
      ////////////////////////
      selectAll: false,
      selected: [],
      ////////////////////////
      // Modes
      ////////////////////////
      formMode: false,
      createMode: false,
      editMode: false,
      editActorIndex: null,
      ////////////////////////
      // Data
      ////////////////////////
      form: JSON.parse(JSON.stringify(initObj)),
      roles: [
        "Background role",
        "Cameo",
        "Recurring character",
        "Side character",
        "Series regula",
      ],
    };
  },
  computed: {
    actors() {
      return this.$store.getters.actors || [];
    },
  },
  watch: {
    selectAll(v) {
      if (v) this.selected = Array.from(this.actors);
      else this.selected = [];
    },
    selected(v) {
      this.$emit("select", v);
    },
    formMode(v) {
      if (!v) {
        this.editMode = false;
        this.createMode = false;
      }
    },
  },
  methods: {
    takeAction() {
      if (this.editMode) this.updateActor();
      else this.addActor();
    },
    updateActor() {
      this.updateRow({
        arr: this.actors,
        itemIndex: this.editActorIndex,
        newData: this.form,
        commitName: "storeActors",
      });
      this.resetForm();
    },
    addActor() {
      this.addRow(this.actors, this.form, "storeActors");
    },
    removeActor(i) {
      this.removeRow(this.actors, i, "storeActors");
    },
    editActor(data, i) {
      this.form = JSON.parse(JSON.stringify(data));
      this.formMode = true;
      this.editMode = true;
      this.editActorIndex = i;
    },
    addNewActor() {
      this.resetForm();
      this.formMode = !this.formMode;
    },
    resetForm() {
      this.form = JSON.parse(JSON.stringify(initObj));
      this.formMode = false;
    },
  },
  created() {
    if (this.selectedActors.length) this.selected = this.selectedActors;
  },
};
</script>

<style lang="scss" scoped></style>
