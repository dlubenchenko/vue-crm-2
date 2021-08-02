<template>
        <div>
        <div class="page-title">
            <h3>Категории</h3>
        </div>
        <section>
          <Loader v-if="loading"/>
            <div v-else class="row">
                <CategiryCreate
                    @created="addNewCategiry"
                />

                <CategiryEdit
                    v-if="categories.length"
                    :categories="categories"
                    :key="categories.length + updateCount"
                    @updated="updateCategories"
                />
                <p v-else class="center">Категорий пока нет</p>
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
            categories: [],
          loading: true,
          updateCount: 0
        }),
        components: {
            CategiryCreate,
            CategiryEdit
        },
        methods: {
            addNewCategiry(category) {
                this.categories.push(category)
            },
          updateCategories(category) {
              const idx = this.categories.findIndex(c => c.id === category.id)
            this.categories[idx].title = category.title
            this.categories[idx].limit = category.limit
            this.updateCount++
          },
        },
      async mounted() {
          this.categories = await this.$store.dispatch('fetchCategories')
          this.loading = false
      }
    }
</script>

<style scoped>

</style>