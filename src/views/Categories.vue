<template>
        <div>
        <div class="page-title">
            <h3>Категории</h3>
        </div>
        <section>
            <div class="row">
                <CategiryCreate @created="addNewCategiry"/>

                <CategiryEdit/>
            </div>
        </section>
    </div>
</template>

<script>
import CategiryCreate from '@/components/CategiryCreate'
import CategiryEdit from '@/components/CategiryEdit'
    export default {
        name: 'categories',
        data: () => ({
            categories: []
        }),
        components: {
            CategiryCreate,
            CategiryEdit
        },
        methods: {
            addNewCategiry(category) {
                this.categories.push(category)
                console.log(this.categories)
            }
        }
    }
</script>

<style scoped>

</style>