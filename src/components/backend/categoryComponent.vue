<template>
    <div class="row">
        <div class="col-12 mt-2">
            <div class="card">
                <div class="card-body shadow" style="min-height: 5vh">
                    <div class="row">
                        <div class="col-md-6">
                            <h5 class="card-title" style="float: left">{{$route.meta.pageTitle}}</h5>
                            <i class="fa fa-spin fa-spinner" v-if="httpRequest" style="float: left; font-size: 25px; margin-left: 10px;"></i>
                        </div>
                        <div class="col-md-6 text-right">
                            <button class="btn btn-dark" @click="openModal('formModal')" :disabled="httpRequest">Add New</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="card mt-1">
                <div class="card-body shadow" style="min-height: 80vh">
                    <table class="table table-bordered">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in dataList.data" :key="index">
                            <th scope="row">{{index+1}}</th>
                            <td>{{item.title}}</td>
                            <td>
                                <button @click="editData(item, item.id)" class="btn btn-warning" :disabled="httpRequest">Edit</button>
                                <button @click="deleteInformation(index, item.id)" class="btn btn-danger" :disabled="httpRequest">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal" id="formModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <form @submit.prevent="submitForm(formObject, 'formModal')">
                        <div class="modal-header">
                            <h4 class="modal-title">Category</h4>
                            <h4 @click="closeModal('formModal')" style="cursor: pointer">X</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-3 text-right">
                                    Category Title
                                </div>
                                <div class="col-6">
                                    <input v-validate="'required'" v-model="formObject.title" name="title" class="form-control" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" :disabled="httpRequest">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categoryComponent",
        mounted() {
            this.getDataList();
        },
    }
</script>

<style scoped>

</style>
