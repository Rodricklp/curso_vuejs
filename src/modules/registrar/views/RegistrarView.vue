<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema'

const onSubmit = () => {
    console.log("Se ha enviado el formulario.")
}
</script>

<template>
    <div>
        <h2>Formulario de Registro</h2>

        <Form action="" :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field type="text" placeholder="ingrese su nombre" name="nombre" />
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            
            <div class="form">
                <label for="email">Email:</label>
                <Field type="email" placeholder="ingrese su email" name="email" />
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