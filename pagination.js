Vue.component('pagination', {
    template: '#pagination-template',
    props: {
        current: {
            type: Number,
            default: 1
        }
    },
    computed: {
        nextPage: function() {
            return this.current + 1
        },
        prevPage: function() {
            return this.current - 1
        }
    },
    methods: {
        changePage: function (page) {
            this.$emit('page-changed', page)
        }
    }
})
