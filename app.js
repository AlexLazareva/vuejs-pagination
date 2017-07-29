var appID = '83cf77c8fc373211a0b27c8d3dee2ddba732192ae43b8ad37e1b942b9b5617b5'

new Vue({
    el: '#app',
    data: {
        photos: [],
        totalPhotos: 0,
        perPage: 9,
        currentPage: 1
    },
    methods: {
        fetchPhotos: function(page) {
            var options = {
                params: {
                    client_id: appID,
                    page: page,
                    per_page: this.perPage
                }
            }

            this.$http.get('https://api.unsplash.com/photos', options).then(function(response) {

                this.photos = response.data

                this.totalPhotos = parseInt(response.headers.get('x-total'))

                this.currentPage = page

            }, console.log)
        }
    },
    created: function() {
        this.fetchPhotos(this.currentPage)
    }
})
