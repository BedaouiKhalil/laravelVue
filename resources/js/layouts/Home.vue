<template>
    <!-- Page Wrapper -->
    <div id="wrapper">
        <!-- Sidebar -->
        <SidBarComponent v-if="token" :toggled="toggled" />
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <!-- Topbar -->
                <TopBarComponent v-if="token" @emitToggled="toggled = $event" />
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <FooterComponent v-if="token" />
            <!-- End of Footer -->
        </div>
        <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Ready to Leave?
                    </h5>
                    <button
                        class="close"
                        type="button"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    Select "Logout" below if you are ready to end your current
                    session.
                </div>
                <div class="modal-footer">
                    <button
                        class="btn btn-secondary"
                        type="button"
                        data-dismiss="modal"
                    >
                        Cancel
                    </button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SidBarComponent from "./SidBarComponent.vue";
import TopBarComponent from "./TopBarComponent.vue";
import FooterComponent from "./FooterComponent.vue";

import { ref } from "vue";
const token = localStorage.getItem("token");

const toggled = ref("");
</script>
