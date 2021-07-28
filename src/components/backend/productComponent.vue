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
                            <button class="btn btn-dark" @click="openModal('formModal')" :disabled="httpRequest" >Add New</button>
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
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in dataList.data" :key="index">
                            <th scope="row">{{index+1}}</th>
                            <td>
                                <img @click="clickImageInput('selectImage')" :src="getImage(item.image_url)" class="rounded-circle" height="50" style="cursor: pointer" name="image">
                            </td>
                            <td>{{item.title}}</td>
                            <td>{{item.price}}</td>
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
                    <form @submit.prevent="submitForm(formObject, 'formModal')" enctype="multipart/form-data">
                        <div class="modal-header">
                            <h4 class="modal-title">Product</h4>
                            <h4 @click="closeModal('formModal')" style="cursor: pointer">X</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row form-group">
                                <div class="col-3 text-right"></div>
                                <div class="col-6 text-center">
                                    <img @click="clickImageInput('selectImage')" :src="imagePath" class="rounded-circle" height="100" style="cursor: pointer" name="image">
                                    <input @change="onFileSelect($event, 'image')" id="selectImage" style="display: none" name="title" class="form-control" type="file">
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-3 text-right">Product Title</div>
                                <div class="col-6">
                                    <select class="form-control" name="category_id" v-validate="'required'" v-model="formObject.category_id">
                                        <option value="">Select</option>
                                        <option v-for="(item, index) in requiredData.category" :value="item.id">{{item.title}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-3 text-right">Product Title</div>
                                <div class="col-6">
                                    <input v-validate="'required'" v-model="formObject.title" name="title" class="form-control" type="text">
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-3 text-right">Price</div>
                                <div class="col-6">
                                    <input v-validate="'required'" v-model="formObject.price" name="price" class="form-control" type="text">
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-3 text-right">Details</div>
                                <div class="col-6">
                                    <textarea v-validate="'required'" rows="3" v-model="formObject.description" name="description" class="form-control"></textarea>
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
        name: "productComponent",
        mounted() {
            this.$set(this.formObject, 'category_id', '');
            this.getDataList();
            this.getGeneralData(['category']);
        },
        computed : {
            imagePath : function () {
                if (this.formObject.image_url !== undefined && this.formObject.image_url !== ''){
                    return this.formObject.image_url;
                } else{
                    return require('../../assets/images.png');
                }
            }
        }
    }
</script>

<style scoped>

</style>
