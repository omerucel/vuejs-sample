<template lang="html">
    <div class="modal fade" v-bind:class="modalClass" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
                </div>
                <div class="modal-body">{{body}}</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">{{titleCancel}}</button>
                    <button type="button" class="btn btn-primary">{{titleAction}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modalClass', 'body', 'title', 'titleCancel', 'titleAction']
}
</script>

<style lang="css">
</style>
