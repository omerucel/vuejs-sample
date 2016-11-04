<template lang="html">
    <div class="container-fluid">
        <navbar />
        <modal modalClass="modal-test" title="Test Title" body="Detail" titleCancel="Close" titleAction="Ok" />
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-block">
                        <h4 class="card-title">Homepage</h4>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button type="button" class="btn btn-primary" v-on:click="showModal">Show Modal</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Modal from '../components/modal.vue'

export default {
    components: {
        navbar: Navbar,
        modal: Modal
    },
    methods: {
        showModal () {
            $('.modal-test').modal('show');
        }
    }
}
</script>
