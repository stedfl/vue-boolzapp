const { createApp } = Vue;
const DateTime = luxon.DateTime;
const now = DateTime.now();

createApp({
  data() {
    return {
      activeIndex: 0,
      showChevron: null,
      showChevronMenu: null,
      isInfoMenu: false,
      isChatMenu: false,
      isContactMenu: false,
      isExpandedAvatar: false,
      doScroll: true,
      doScrollActive: true,
      inputMessage: "",
      keyString: "",
      nowFormatted: "",
      user: {
        name: "Sofia",
        avatar: "_io",
      },
      contacts: [
        {
          name: "Marco",
          avatar: "_1",
          phoneNumber: "+39 345128932",
          profileStatus: "Ciao, sto usando WhatsApp.",
          visible: true,
          lastAccess: "09/11/22 15:30:55",
          messages: [
            {
              date: "08/11/22 15:30:55",
              textMessage: "Ciao, sei andato a prendere il cane?",
              status: "sent",
            },
            {
              date: "08/11/22 15:31:23",
              textMessage: "La toilettatura mi ha detto che finiva alle 15.20",
              status: "sent",
            },
            {
              date: "08/11/22 15:35:13",
              textMessage: "si appena tornati, tutto ok",
              status: "received",
            },
            {
              date: "08/11/22 15:36:01",
              textMessage:
                "mi ha fatto pagare tanto stavolta, non ci torniamo più li!",
              status: "received",
            },
            {
              date: "08/11/22 15:37:12",
              textMessage:
                "Ma come?? a telefono mi aveva detto 50 euro tutto!!",
              status: "sent",
            },
            {
              date: "08/11/22 15:38:32",
              textMessage:
                "dice che il pelo era molto sporco e ha impiegato tanto a districarlo. Boh!",
              status: "received",
            },
            {
              date: "08/11/22 12:34:12",
              textMessage:
                "Potresti andare a fare spesa? Oggi esco tardi, non riesco",
              status: "received",
            },
            {
              date: "08/11/22 12:35:22",
              textMessage: "Mancano latte, caffè",
              status: "received",
            },
            {
              date: "08/11/22 12:42:57",
              textMessage: "Ma sei sicuro? ho visto che il caffè c' è ancora",
              status: "sent",
            },
            {
              date: "08/11/22 12:45:51",
              textMessage:
                "Ho visto che la prossima settimana è in offerta alla lidl",
              status: "sent",
            },
            {
              date: "08/11/22 12:46:24",
              textMessage: "aspettiamo no? così risparmiamo",
              status: "sent",
            },
            {
              date: "08/11/22 12:47:27",
              textMessage: "No, il caffè che hai visto è quello deka",
              status: "received",
            },
            {
              date: "08/11/22 12:49:36",
              textMessage:
                "va bene dai allora passo a prendere un pacco giusto per sta settimana",
              status: "sent",
            },
          ],
        },
        {
          name: "",
          avatar: "_general",
          phoneNumber: "+39 3713899674",
          profileStatus: "www.aiutogas.it, sempre al vostro fianco",
          visible: true,
          lastAccess: "06/11/22 17:30:16",
          messages: [
            {
              date: "05/11/22 08:00:00",
              textMessage:
                "Buongiorno, Aiutogas Le ricorda l' appuntamento per la pulizia della caldaia e controllo fumi fissato per lunedì 14 Novembre nella fascia oraria 15-18. Per disdetta, non esiti a ricontattarci su questo numero",
              status: "received",
            },
          ],
        },
        {
          name: "Papà",
          avatar: "_2",
          phoneNumber: "+39 3351788298",
          profileStatus: "Amarsi è camminare insieme sotto la pioggia.",
          visible: true,
          lastAccess: "04/11/22 16:25:16",
          messages: [
            {
              date: "01/11/22 17:32:45",
              textMessage:
                "Figlio mio, ti ho comperato le castagne così le facciamo stasera",
              status: "received",
            },
            {
              date: "01/11/22 17:46:34",
              textMessage:
                "Papà grazie ma come ti avevo detto stasera non torno a cena",
              status: "sent",
            },
            {
              date: "01/11/22 17:48:12",
              textMessage: "Colpa mia, non me lo ricordavo",
              status: "received",
            },
            {
              date: "01/11/22 18:01:01",
              textMessage: "Domani le facciamo!",
              status: "sent",
            },
            {
              date: "01/11/22 18:03:45",
              textMessage: "Va bene, buona serata",
              status: "received",
            },
          ],
        },
        {
          name: "Antonio",
          avatar: "_3",
          phoneNumber: "+39 3461299234",
          profileStatus: "Ciao, sto usando WhatsApp.",
          visible: true,
          lastAccess: "07/11/22 17:24:23",
          messages: [
            {
              date: "06/11/22 13:24:56",
              textMessage:
                "Ciao, sto cercando parcheggio in san vitale ma non trovo nulla?",
              status: "received",
            },
            {
              date: "10/10/22 13:25:23",
              textMessage:
                "Prova in vicolo Bianchetti, di solito qualcosa si trova",
              status: "sent",
            },
            {
              date: "10/10/22 13:31:45",
              textMessage:
                "Ci sono già andato ma nulla, è un casino in giro per la partita",
              status: "received",
            },
            {
              date: "10/10/22 13:45:01",
              textMessage: "Trovato! Non so come",
              status: "received",
            },
            {
              date: "10/10/22 13:46:12",
              textMessage: "è uscita proprio ora una macchina",
              status: "received",
            },
          ],
        },
        {
          name: "Lorenzo",
          avatar: "_4",
          phoneNumber: "+39 392178532",
          profileStatus: "La vita è come una scatola di cioccolatini.",
          visible: true,
          lastAccess: "07/11/22 11:25:55",
          messages: [
            {
              date: "23/08/22 21:12:35",
              textMessage: "Sofiee",
              status: "received",
            },
            {
              date: "23/08/22 21:13:43",
              textMessage: "Ho scordato il caricatore del telefono da te",
              status: "received",
            },
            {
              date: "23/08/22 21:14:23",
              textMessage: "posso passare?",
              status: "received",
            },
            {
              date: "23/08/22 22:01:12",
              textMessage: "ciao lorè, certo passa quando vuoi",
              status: "sent",
            },
            {
              date: "23/08/22 22:02:22",
              textMessage: "scusa ho letto ora che stavo in doccia",
              status: "sent",
            },
          ],
        },
        {
          name: "Claudio",
          avatar: "_5",
          phoneNumber: "+39 3282846771",
          profileStatus: "Christmas is coming!",
          visible: true,
          lastAccess: "07/11/22 13:44:55",
          messages: [
            {
              date: "16/08/22 10:14:35",
              textMessage: "Ohi mi mandi le foto di ieri?",
              status: "sent",
            },
            {
              date: "16/08/22 10:23:53",
              textMessage: "si, le devo scaricare sul pc",
              status: "received",
            },
            {
              date: "16/08/22 10:23:53",
              textMessage:
                "Le metto su drive e mando il link della cartella sul gruppo?",
              status: "received",
            },
            {
              date: "16/08/22 10:25:18",
              textMessage:
                "Grazie! Come stai? Io sento ancora il sapore della pecora, mamma mia quanti arrosticini ci siamo magnati",
              status: "sent",
            },
            {
              date: "16/08/22 10:27:11",
              textMessage: "Si forse abbiamo esagerato!",
              status: "received",
            },
            {
              date: "16/08/22 10:29:36",
              textMessage:
                "Dove hai preso la carne? troppo buona! prossimo anno facciamo da me dai",
              status: "sent",
            },
            {
              date: "16/08/22 10:32:57",
              textMessage: "Ho comprato tutto da Ciccarni a Sambuceto",
              status: "received",
            },
          ],
        },
        {
          name: "Alessia M. collega",
          avatar: "_6",
          phoneNumber: "+39 3494723345",
          profileStatus: "L' eternità è il mare mischiato col sole.",
          visible: true,
          lastAccess: "05/11/22 19:12:56",
          messages: [
            {
              date: "26/07/22 10:18:45",
              textMessage:
                "Ciao Ste, mi mandi il tuo iban così ti faccio il bonifico?",
              status: "received",
            },
            {
              date: "28/07/22 12:45:02",
              textMessage:
                "Ciao Ale!! Scusami se ti rispondo solo ora ma sono stata incasinata con le scadenze",
              status: "sent",
            },
            {
              date: "28/07/22 12:47:23",
              textMessage:
                "ma figurati, ti capisco, vuoi che si vediamo in settimana per un aperitivo anche con Sarah? Così ti dò i soldi a mano",
              status: "received",
            },
            {
              date: "28/07/22 12:48:11",
              textMessage: "*ci",
              status: "received",
            },
            {
              date: "28/07/22 12:54:23",
              textMessage: "Si magari, facciamo giovedì? Dove?",
              status: "sent",
            },
            {
              date: "28/07/22 12:56:43",
              textMessage: "Sento Sarah e ti aggiorno",
              status: "received",
            },
            {
              date: "28/07/22 13:05:23",
              textMessage: "Perfetto grazie",
              status: "sent",
            },
            {
              date: "30/07/22 14:21:56",
              textMessage: "Novità?",
              status: "sent",
            },
            {
              date: "30/07/22 14:45:24",
              textMessage:
                "Si confermato giovedì alle 21, forse viene Massimo!",
              status: "received",
            },
            {
              date: "30/07/22 14:46:25",
              textMessage: "Nooo che pallee",
              status: "sent",
            },
            {
              date: "30/07/22 16:35:21",
              textMessage:
                "Lo so, ha sentito che ne stavamo parlando e si è autoinvitato",
              status: "received",
            },
          ],
        },
        {
          name: "Marta Mancini Infermiera",
          avatar: "_7",
          phoneNumber: "+39 3552132486",
          profileStatus:
            "El mar es un tejado de botellas que en la memoria del marino sueña.",
          visible: true,
          lastAccess: "07/11/22 16:58:46",
          messages: [
            {
              date: "01/07/22 14:57:31",
              textMessage:
                "Ciao Giorgia!! Perdonami, ieri ti ho scritto tutta allarmata. Per fortuna c' era l' Oriolo, l' endocrinologa e le ho fatto vedere gli esami. Mi ha detto di stare tranquilla perchè il PTH si alza quando è bassa la vitamina D, mi ha aumentato il dosaggio del colecalciferolo che mi aveva prescritto l' ortopedico. A settembre devo ripetere gli esami. Grazie mille per il supporto",
              status: "sent",
            },
            {
              date: "01/07/22 15:05:34",
              textMessage:
                "Ciao Sofy! Ma figurati, non ho fatto nulla. In effetti la vitamina D è carente ma non troppo...comunque monitorala sempre! Tu per qualsiasi dubbio chiamami senza problemi e spero di vederti presto",
              status: "received",
            },
          ],
        },
        {
          name: "Manaresi proprietario",
          avatar: "_8",
          phoneNumber: "+39 3293378123",
          profileStatus: "Ciao, sto usando WhatsApp.",
          visible: true,
          lastAccess: "04/11/22 16:25:16",
          messages: [
            {
              date: "10/04/22 11:27:56",
              textMessage:
                "Buongiorno Signor Manaresi, le scrivo in merito alla perdita di acqua di cui abbiamo parlato via telefono qualche giorno fa. Ad oggi non è ancora passatp il suo idraulico di fiducia, il Signor Paolo. La perdita sta diventando sempre più grande, ho inviato una mail questa mattina con le foto della situazione attuale. Ha qualche novità?",
              status: "sent",
            },
            {
              date: "10/04/22 17:29:12",
              textMessage:
                "Buongiorno, sono ancora in riunione. La chiamo domani in mattinata per accordarci",
              status: "received",
            },
            {
              date: "10/04/22 17:30:34",
              textMessage:
                "Perfetto grazie, scusi ancora il disturbo. Allora rimango in attesa di una sua chiamata.",
              status: "sent",
            },
          ],
        },
        {
          name: "Luca Corso",
          avatar: "_9",
          phoneNumber: "+39 3382490478",
          profileStatus:
            "Come una commedia, così è la vita: non quanto è lunga, ma quanto bene è recitata, è ciò che importa.",
          visible: true,
          lastAccess: "04/11/22 16:25:16",
          messages: [
            {
              date: "10/03/22 17:32:45",
              textMessage:
                "Ciao Sofia, ti ricordi di me? Abbiamo fatto insieme il corso di sicurezza sul lavoro",
              status: "received",
            },
            {
              date: "10/03/22 17:46:34",
              textMessage: "Ciao Luca, si certo che mi ricordo! Come stai?",
              status: "sent",
            },
            {
              date: "10/03/22 17:48:12",
              textMessage:
                "Bene tu, ti scrivo perchè mi sto trasferendo a Bologna e volevo chiederti qualche dritta",
              status: "received",
            },
            {
              date: "10/03/22 18:01:01",
              textMessage:
                "Certo, forse è meglio che ci sentiamo telefonicamente cos' ti spiego bene la situazione",
              status: "sent",
            },
            {
              date: "10/03/22 18:03:45",
              textMessage: "Ti chiamo subito",
              status: "received",
            },
          ],
        },
      ],
      botMessages: [
        "Ciao, come stai?",
        "Che fai di bello questo weekend?",
        "Purtroppo devo salutarti, devo scappare",
        "Ti va di andare al cinema?",
        "Tutto bene?",
        "E' tanto tempo che non ci vediamo",
        "ok, perfetto",
        "non capisco cosa mi stai dicendo",
        "Certo. passo a prenderti quando vuoi",
        "Oggi piove, non credo di uscire",
        "Scusa se non ti ho risposto prima ma stavo cucinando",
        "ci sentiamo più tardi",
      ],
      allIndexExtracted: [],
      botIndex: null,
    };
  },
  methods: {
    scrollEndMessage() {
      if (this.doScroll) {
        const lastMessage = document.querySelector(".chat-area > :last-child");
        if (lastMessage) {
          lastMessage.scrollIntoView();
        }
        this.doScroll = false;
      }
    },

    scrollActiveContact() {
      if(this.doScrollActive) {
        const activeContact = document.querySelector(".list-item.active");
        activeContact.scrollIntoView();
      }
    },

    userMessage() {
      if (this.inputMessage.length !== 0) {
        this.addMessage(this.inputMessage, "sent");
        this.botAnswerDelayed();
      }
      this.inputMessage = "";
    },

    addMessage(text, status) {
      const newMessage = {
        date: this.formattingDate(now),
        textMessage: text,
        status: status,
      };
      this.contacts[this.activeIndex].messages.push(newMessage);
      this.doScroll = true;
    },

    botAnswerDelayed() {
      setTimeout(() => {
        this.botAnswer();
      }, 1000);
    },

    botAnswer() {
      this.extractBotIndex();
      const botMessage = this.botMessages[this.botIndex];
      this.addMessage(botMessage, "received");
      this.contacts[this.activeIndex].lastAccess = this.formattingDate(now);
    },

    extractBotIndex() {
      if (this.allIndexExtracted.length === this.botMessages.length) {
        this.allIndexExtracted = [];
      }

      let IndexExtracted = false;
      if (this.allIndexExtracted.length < this.botMessages.length) {
        while (!IndexExtracted) {
          let randomIndex = Math.floor(Math.random() * this.botMessages.length);
          if (!this.allIndexExtracted.includes(randomIndex)) {
            this.allIndexExtracted.push(randomIndex);
            IndexExtracted = true;
            this.botIndex = randomIndex;
          }
        }
      }
    },

    handlerKeyUp() {
      this.doScrollActive = false;
      for (contact of this.contacts) {
        contact.visible = true;
      }
      const lowerKeyString = this.keyString.toLowerCase().trim();
      if (lowerKeyString === "") {
        for (contact of this.contacts) {
          contact.visible = true;
          this.doScrollActive = true;
        }
      } else {
        for (contact of this.contacts) {
          if (!contact.name.toLowerCase().includes(lowerKeyString)) {
            contact.visible = false;
          }
        }
      }
    },

    doChevronMenu(index) {
      if (this.showChevronMenu === index) {
        this.showChevronMenu = null;
      } else {
        this.showChevronMenu = index;
      }
    },

    checkDeleteMessage(msgIndex) {
      if (
        this.contacts[this.activeIndex].messages[msgIndex].status === "sent"
      ) {
        this.contacts[this.activeIndex].messages[msgIndex].textMessage = "";
      } else {
        this.deleteMessage(msgIndex);
      }
      this.showChevronMenu = null;
      this.showChevron = null;
    },

    deleteMessage(msgIndex) {
      this.contacts[this.activeIndex].messages.splice(msgIndex, 1);
      this.showChevronMenu = null;
      this.showChevron = null;
    },

    deleteAllChat() {
      this.contacts[this.activeIndex].messages.splice(
        0,
        this.contacts[this.activeIndex].messages.length
      );
      this.isChatMenu = false;
    },

    formattingDate(date) {
      const dateFormatted = date
        .setLocale("it")
        .toFormat("dd'/'LL'/'yy tt")
        .toLocaleString();
      return dateFormatted;
    },

    formattingToday() {
      this.nowFormatted = now
        .setLocale("it")
        .toFormat("dd'/'LL'/'yy")
        .toLocaleString();
    },
  },
  updated() {
    this.scrollEndMessage();
    this.scrollActiveContact();
  },
  mounted() {
    this.scrollEndMessage();
    this.formattingToday();
    this.scrollActiveContact();
  },
}).mount("#app");