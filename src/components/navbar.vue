<template lang="html">
    <div class="navbar navbar-light bg-faded" style="margin-top: 10px; margin-bottom: 10px;" >
        <ul class="nav navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link" active-class="active" exact>Homepage</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link" active-class="active">About</router-link></li>
            <li class="nav-item"><router-link to="/contact" class="nav-link" active-class="active">Contact</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>
