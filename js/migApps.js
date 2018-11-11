migApps = {

    init: function() {
        console.log("ksksww")
        document.addEventListener('DOMContentLoaded', function() {
            console.log("ksks")
            migApps.generateId();
            migApps.login();
        });
    },


    generateId: function() {
        this.id = Math.floor(Math.random() * 100000) + 1
        console.log("id",this.id)
    },

    login: function() {
        console.log("login",this.id)
        const userAction = async () => {
            const response = await fetch('http://35.243.231.211:3000/users/sessions', {
                method: 'POST',
                body: {id:this.id}, // string or object
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            const myJson = await response.json(); //extract JSON from the http response
            console.log("myjson",myJson)
        }
    }
}
