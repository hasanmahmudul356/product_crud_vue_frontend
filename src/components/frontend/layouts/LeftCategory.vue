<template>
    <div>
        <h4><strong>Category | <span style="cursor: pointer;" @click="CategoryFilter()" class="fa fa-refresh" :class="{'fa-spin' : httpRequest}"></span></strong></h4>
        <hr>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(item, index) in requiredData.category">
                <div class="form-check">
                    <label class="form-check-label" @click="CategoryFilter(item.id)">
                        <strong>{{item.title}}</strong>
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LeftCategory",
        methods : {
            CategoryFilter : function (id = null) {
                this.filter['category_id'] = id;
                this.getDataList();
            }
        }
    }
</script>

<style scoped>
    .list-group-item label {
        color: #000;
        border-bottom: 1px solid rgba(0,0,0,.125) !important;
        cursor: pointer;
    }
</style>
