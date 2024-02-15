<template>
    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">
                                Create an Account!
                            </h1>
                        </div>
                        <form class="user">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-user"
                                    id="exampleFirstName"
                                    placeholder="Name"
                                    v-model="name"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control form-control-user"
                                    id="exampleInputEmail"
                                    placeholder="Email Address"
                                    v-model="email"
                                />
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input
                                        type="password"
                                        class="form-control form-control-user"
                                        id="exampleInputPassword"
                                        placeholder="Password"
                                        v-model="password"
                                    />
                                </div>
                                <div class="col-sm-6">
                                    <input
                                        type="password"
                                        class="form-control form-control-user"
                                        id="exampleRepeatPassword"
                                        placeholder="Repeat Password"
                                        @change="confirmPass()"
                                        v-model="password_confirmation"
                                    />
                                </div>
                            </div>
                            <a
                                class="btn btn-primary btn-user btn-block"
                                @click="Register()"
                            >
                                Register Account
                            </a>
                            <hr />
                        </form>
                        <hr />
                        <div class="text-center">
                            <a class="small" href="forgot-password.html"
                                >Forgot Password?</a
                            >
                        </div>
                        <div class="text-center">
                            <a class="small" href="login.html"
                                >Already have an account? Login!</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const confirmPass = () => {
    if (password.value !== password_confirmation.value) {
        alert("Password not match");
    }
};

const Register = () => {
    if (
        name.value === "" ||
        email.value === "" ||
        password.value === "" ||
        password_confirmation.value === ""
    ) {
        alert("Please fill all fields");
    } else {
        axios
            .post("/register", {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.access_token);
                window.location.href = "/admin";
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
</script>
