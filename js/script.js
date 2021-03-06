//console.log('Ok');
// Elenco contat
// elenco degli avatar con i nomi ecc
const app = new Vue({
    el: '#app',
    data: {
        element: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ], 
         // per la stringa vuota
         newText:'',
        // per avere l'indice
        activeElement: 0,
       
    },
    methods: {
        // fun per poter scatenare l'evento al click (messo nelle img)
        setActiveElemnte(index) {
           
           console.log(index);

           this.activeElement = index;
           
           console.log(this.element[this.activeElement]); 
        },
        // devi mettore la stringa vuota dove deve aggiungere
        addText() {
            //console.log('Scrivi qua il tuo meessaggio');

            if(this.newText !== '') {
                const mexActive = this.element[this.activeElement].messages;

                   mexActive.push(
                    {
                        date: '10/01/2020 15:30:55',
                        message: this.newText,
                        status: 'sent'
                    },
            
                );
                // per vedere cosa esce  
                console.log(mexActive);
                // pulire l'input dal mex scritto
                this.newText = '';

                // riposa automatica con il timeout ( ar fun per cosi tiene lo scope del gen)
                setTimeout(() => {
                    // riprendi la lista di obj di sopra e la riscrivi cambiando la propriet?? del mex
                    mexActive.push(
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ahh bello',
                            status: 'received'
                        },
                    )

                }, 1000);

            }

        }
    
      
    },
    
});