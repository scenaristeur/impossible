<template>
  <b-container class="left">
    <b-img alt="Vue logo" src="../assets/et_moi.jpg" width="auto"></b-img>
    <br><br>
    <h5>Pour qu'aujourd’hui, les Archipels s’activent en Symbiose !<br>
      remplissez ci-dessous un premier formulaire pour FAIRE connaissance.</h5>

      <p>
        Pour une première prise de contact, sans aucune contrainte nous vous proposons de renseigner
        le formulaire ci-dessous afin de commencer à faire connaissance.</p>
        <p>
          <a href="mailto:contact@bio-scene.org?subject=Et moi dans tout ça?" >Vous pouvez aussi entrer en communication directement par mél</a> pour
          que nous convenions d'un temps commun en visio autour de nos démarches en Archipels.
        </p>


        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
            >
            <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
            >
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>


    <b-button >Envoyer</b-button>
  </b-container>
</template>

<script>
export default {
  name: 'Form',
  data() {
     return {
       form: {
         email: '',
         name: '',
         food: null,
         checked: []
       },
       foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
       show: true
     }
   },
   methods: {
     onSubmit(event) {
       event.preventDefault()
       alert(JSON.stringify(this.form))
     },
     onReset(event) {
       event.preventDefault()
       // Reset our form values
       this.form.email = ''
       this.form.name = ''
       this.form.food = null
       this.form.checked = []
       // Trick to reset/clear native browser form validation state
       this.show = false
       this.$nextTick(() => {
         this.show = true
       })
     }
   }
}
</script>

<style>
.left {
  text-align: left;
}
</style>
