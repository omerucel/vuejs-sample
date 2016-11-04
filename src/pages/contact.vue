<template lang="html">
    <div class="container-fluid">
        <navbar />
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-block">
                        <h4 class="card-title">Contact</h4>
                        <form>
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="surname" class="form-control" placeholder="Surname" />
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" class="form-control" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Message"></textarea>
                            </div>
                            <button type="button" class="btn btn-primary" v-on:click="test">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue'

import 'sweetalert/dev/sweetalert.scss'
import SweetAlert from 'sweetalert'

export default {
    components: {
        navbar: Navbar
    },
    methods: {
        test (e) {
            $(e.target).html('Sending...')
            setTimeout(function () {
                $(e.target).html('Send')
                SweetAlert('Thanks!', 'Your message sent!', 'success')
            }, 1000);
        }
    }
}
</script>
