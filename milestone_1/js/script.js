Vue.config.devtools = true

const vueApp = new Vue({
    el: '#app',
    data: {
        chatList: [
            {
                name: 'Fabio',
                img: '_1',
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'sent',
                        text: 'Lorem ipsum dolor sit amet'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'received',
                        text: 'Lorem ipsum dolor sit amet'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'received',
                        text: 'Lorem ipsum dolor sit amet'
                    }
                ]
            },
            {
                name: 'Samuele',
                img: '_2',
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'sent',
                        text: 'Lorem ipsum dolor sit amet'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'sent',
                        text: 'Lorem ipsum dolor sit amet'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'received',
                        text: 'Lorem ipsum dolor sit amet'
                    }
                ]
            },
            {
                name: 'Paolo',
                img: '_3',
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'received',
                        text: 'Lorem ipsum dolor sit amet'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'received',
                        text: 'Lorem ipsum dolor sit amet'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'sent',
                        text: 'Lorem ipsum dolor sit amet'
                    }
                ]
            },
            {
                name: 'Luisa',
                img: '_6',
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'sent',
                        text: 'Lorem ipsum dolor sit amet'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'received',
                        text: 'Lorem ipsum dolor sit amet'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'received',
                        text: 'Lorem ipsum dolor sit amet'
                    }
                ]
            },
        ]
    },
    methods: {
        createAvatarPath(avatar) {
            return `./img/avatar${avatar}.jpg`
        }
    }
})