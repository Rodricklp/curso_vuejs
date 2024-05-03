<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema'
import { useRegistrarStore } from '../stores/registrarStore'
import { ref } from 'vue'

const registrarStore = useRegistrarStore()
const nombre = ref("")
const email = ref("")

const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value)
    console.log("Se ha enviado el formulario.")
}
</script>

<template>
    <div>
        <h2>Formulario de Registro</h2>

        <Form action="" :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field type="text" placeholder="ingrese su nombre" name="nombre" v-model="nombre" />
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            
            <div class="form">
                <label for="email">Email:</label>
                <Field type="email" placeholder="ingrese su email" name="email" v-model="email" />
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button>Enviar</button>
            </div>
        </Form>
    </div>
</template>

<style scoped>
.form {
    margin-bottom: 10px;
}
</style>