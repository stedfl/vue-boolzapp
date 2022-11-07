const {createApp} = Vue;

createApp({
  data() {
    return {
      counterIndex: 0,
      isChevron: false,
      user: {
        name: 'Sofia',
        avatar: '_6'
      },
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: false,
          messages: [
            {
              date: '10/10/2022 15:30:55',
              textMessage: 'Ciao, sei andato a prendere il cane?',
              status: 'sent'
            },
            {
              date: '10/10/2022 15:31:23',
              textMessage: 'La toilettatura mi ha detto che finiva alle 15.20',
              status: 'sent'
            },
            {
              date: '10/10/2022 15:35:13',
              textMessage: 'si appena tornati, tutto ok',
              status: 'received'
            },
            {
              date: '10/10/2022 15:36:01',
              textMessage: 'mi ha fatto pagare tanto stavolta, non ci torniamo più li!',
              status: 'received'
            },
            {
              date: '10/10/2022 15:37:12',
              textMessage: 'Ma come?? a telefono mi aveva detto 50 euro tutto!!',
              status: 'sent'
            },
            {
              date: '10/10/2022 15:38:32',
              textMessage: 'dice che il pelo era molto sporco e ha impiegato tanto a discricarlo. Boh!',
              status: 'received'
            }
          ]
        },
        {
          name: 'Lorenzo',
          avatar: '_2',
          visible: false,
          messages: [
            {
              date: '23/08/2022 21:12:35',
              textMessage: 'Manuu',
              status: 'received'
            },
            {
              date: '23/08/2022 21:13:43',
              textMessage: 'Ho scordato il caricatore del telefono da te',
              status: 'received'
            },
            {
              date: '23/08/2022 21:14:23',
              textMessage: 'posso passare?',
              status: 'received'
            },
            {
              date: '23/08/2022 22:01:12',
              textMessage: 'ciao lorè, certo passa quando vuoi',
              status: 'sent'
            },
            {
              date: '23/08/2022 22:02:22',
              textMessage: 'scusa ho letto ora che stavo in doccia',
              status: 'sent'
            }
          ]
        },
      ]
    }
  },
  methods: {

  }
}).mount('#app');