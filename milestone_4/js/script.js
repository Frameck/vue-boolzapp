Vue.config.devtools = true

const vueApp = new Vue({
    el: '#app',
    data: {
        searchedUser: '',
        newMessage: '',
        activeChat: {},
        chatList: [
            {
                name: 'Fabio',
                img: '_1',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'sent',
                        text: 'Porta la macchina dal meccanico'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'received',
                        text: 'Qual è il problema?'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'received',
                        text: 'Bisogna fare il tagliando'
                    }
                ]
            },
            {
                name: 'Samuele',
                img: '_2',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'sent',
                        text: 'Ricordati di fare la spesa'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'sent',
                        text: 'Compra anche il latte scremato'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'received',
                        text: 'Ok, va bene!'
                    }
                ]
            },
            {
                name: 'Paolo',
                img: '_3',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'received',
                        text: 'Hai sentito Luca?'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'received',
                        text: 'No, perchè?'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'sent',
                        text: 'Mi ha detto che doveva raccontarti di sabato'
                    }
                ]
            },
            {
                name: 'Luisa',
                img: '_6',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'sent',
                        text: 'Messaggio di prova'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'received',
                        text: 'Messaggio di risposta'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'received',
                        text: 'Ok'
                    }
                ]
            },
            {
                name: 'Giampaolo',
                img: '_5',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        status: 'sent',
                        text: 'Messaggio di prova'
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        status: 'received',
                        text: 'Messaggio di risposta'
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        status: 'received',
                        text: 'Ok'
                    }
                ]
            }
        ]
    },
    methods: {
        createAvatarPath(avatar) {
            return `./img/avatar${avatar}.jpg`
        },
        setActiveChat(activeChat, i) {
            this.activeChat = activeChat
            this.activeChat.index = i
        },
        getLastMessage(index) {
            if (this.chatList.length === 0) {
                return ''
            }

            const lastMessageIndex = this.chatList[index].messages.length - 1
            return this.chatList[index].messages[lastMessageIndex].text
        },
        getLastMessageDate(index) {
            if (this.chatList.length === 0) {
                return ''
            }

            const lastMessageIndex = this.chatList[index].messages.length - 1
            return this.chatList[index].messages[lastMessageIndex].date.toLocaleString()
        },
        getLastMessageDateActiveUser() {
            if (this.activeChat.length === 0) {
                return ''
            }
            
            const lastMessageIndex = this.activeChat.messages.length - 1
            return this.activeChat.messages[lastMessageIndex].date.toLocaleString()
        },
        sendMessage() {
            this.addMessage(this.newMessage, "sent");
      
            setTimeout(() => {
                this.addMessage("Ok", "received");
            }, 1000)

            this.newMessage = ''
        },
        addMessage(text, status) {
            this.activeChat.messages.push({
                date: dayjs().format('DD/MM/YYYY, HH:mm:ss'),
                status,
                text
            })
        },
        getFilteredUsers() {
            if (!this.searchedUser) {
                return this.chatList
            }

            return this.chatList.filter(user => {
                return user.name.toLowerCase().includes(
                    this.searchedUser.trim().toLowerCase()
                )
            })
        },
    },
    beforeMount() {
        this.activeChat = this.chatList[0]
        this.activeChat.index = 0
    }
})