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
                        date: '01/10/2021 11:03:55',
                        status: 'sent',
                        text: 'Porta la macchina dal meccanico',
                        isDropdownVisible: false
                    },
                    {
                        date: '01/10/2021 17:04:00',
                        status: 'received',
                        text: 'Qual è il problema?',
                        isDropdownVisible: false
                    },
                    {
                        date: '03/10/2021 14:01:54',
                        status: 'sent',
                        text: 'Bisogna fare il tagliando',
                        isDropdownVisible: false
                    }
                ]
            },
            {
                name: 'Samuele',
                img: '_2',
                visible: true,
                messages: [
                    {
                        date: '01/10/2021 11:03:55',
                        status: 'sent',
                        text: 'Ricordati di fare la spesa',
                        isDropdownVisible: false
                    },
                    {
                        date: '01/10/2021 17:04:00',
                        status: 'sent',
                        text: 'Compra anche il latte scremato',
                        isDropdownVisible: false
                    },
                    {
                        date: '03/10/2021 14:01:54',
                        status: 'received',
                        text: 'Ok, va bene!',
                        isDropdownVisible: false
                    }
                ]
            },
            {
                name: 'Paolo',
                img: '_3',
                visible: true,
                messages: [
                    {
                        date: '01/10/2021 11:03:55',
                        status: 'received',
                        text: 'Hai sentito Luca?',
                        isDropdownVisible: false
                    },
                    {
                        date: '01/10/2021 17:04:00',
                        status: 'received',
                        text: 'No, perchè?',
                        isDropdownVisible: false
                    },
                    {
                        date: '03/10/2021 14:01:54',
                        status: 'sent',
                        text: 'Mi ha detto che doveva raccontarti di sabato',
                        isDropdownVisible: false
                    }
                ]
            },
            {
                name: 'Luisa',
                img: '_6',
                visible: true,
                messages: [
                    {
                        date: '01/10/2021 11:03:55',
                        status: 'sent',
                        text: 'Messaggio di prova',
                        isDropdownVisible: false
                    },
                    {
                        date: '01/10/2021 17:04:00',
                        status: 'received',
                        text: 'Messaggio di risposta',
                        isDropdownVisible: false
                    },
                    {
                        date: '03/10/2021 14:01:54',
                        status: 'received',
                        text: 'Ok',
                        isDropdownVisible: false
                    }
                ]
            },
            {
                name: 'Giampaolo',
                img: '_5',
                visible: true,
                messages: [
                    {
                        date: '01/10/2021 11:03:55',
                        status: 'sent',
                        text: 'Messaggio di prova',
                        isDropdownVisible: false
                    },
                    {
                        date: '01/10/2021 17:04:00',
                        status: 'received',
                        text: 'Messaggio di risposta',
                        isDropdownVisible: false
                    },
                    {
                        date: '03/10/2021 14:01:54',
                        status: 'received',
                        text: 'Ok',
                        isDropdownVisible: false
                    }
                ]
            }
        ]
    },
    methods: {
        /**
         * Funzione per costruire in modo dinamico il path all'immagine dell'avatar
         * @param {string} avatar id dell'avatar
         * @returns path dell'avatar nella cartella img
         */
        createAvatarPath(avatar) {
            return `./img/avatar${avatar}.jpg`
        },
        /**
         * Funzione che imposta la chat attiva al click sulla lista
         * @param {{}} activeChat chat attualmente attiva
         * @param {number} i indice della chat attiva
         */
        setActiveChat(activeChat, i) {
            this.activeChat = activeChat
            this.activeChat.index = i
        },
        /**
         * Funzione che legge l'ultimo messaggio scambiato con un utente per visualizzarlo nella lista di tutte le chat
         * @param {number} index indice del messaggio
         * @returns testo del messaggio
         */
        getLastMessage(index) {
            if (this.chatList.length === 0) {
                return ''
            }

            const lastMessageIndex = this.chatList[index].messages.length - 1
            return this.chatList[index].messages[lastMessageIndex].text
        },
        /**
         * Funzione che legge la data dell'ultimo messaggio
         * @param {number} index indice del messaggio
         * @returns data
         */
        getLastMessageDate(index) {
            if (this.chatList.length === 0) {
                return ''
            }

            const lastMessageIndex = this.chatList[index].messages.length - 1
            return dayjs(this.chatList[index].messages[lastMessageIndex].date).format('DD/MM/YYYY, HH:mm:ss')
        },
        /**
         * Funzione che legge l'ultimo accesso dell'utente attivo
         * @returns data
         */
        getLastMessageDateActiveUser() {
            if (this.activeChat.length === 0) {
                return ''
            }
            
            const lastMessageIndex = this.activeChat.messages.length - 1
            return dayjs(this.activeChat.messages[lastMessageIndex].date).format('DD/MM/YYYY, HH:mm:ss')
        },
        /**
         * Funzione che pusha nell'array il nuovo messaggio e imposta una risposta automatica dopo 1 sec
         */
        sendMessage() {
            this.addMessage(this.newMessage, "sent");
      
            setTimeout(() => {
                this.addMessage("Ok", "received");
            }, 1000)

            this.newMessage = ''
        },
        /**
         * Funzione che crea l'oggetto per un nuovo messaggio
         * @param {string} text testo del messaggio
         * @param {string} status sent || received
         */
        addMessage(text, status) {
            this.activeChat.messages.push({
                date: dayjs().format('DD/MM/YYYY, HH:mm:ss'),
                status,
                text,
                isDropdownVisible: false
            })
        },
        /**
         * Mostra nella lista di sinistra gli utenti cercati
         * @returns array contenente gli utenti filtrati in base alla ricerca
         */
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
        /**
         * Funzione che permette di far visualizzare il pulsante per cancellare i messaggi
         * @param {number} index indice del messaggio nell'array
         */
        showDropdownOnClick(index) {
            if (!this.activeChat.messages[index].isDropdownVisible) {
                this.activeChat.messages[index].isDropdownVisible = true
            } else {
                this.activeChat.messages[index].isDropdownVisible = false
            }
        },
        deleteMessage(index) {
            this.activeChat.messages.splice(index, 1)
        }
    },
    beforeMount() {
        this.activeChat = this.chatList[0]
        this.activeChat.index = 0
    }
})