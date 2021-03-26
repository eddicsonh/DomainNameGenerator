let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain = ['.com', '.net', '.us', 'io']


for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let d = 0; d < domain.length; d++) {
                console.log(pronoun[i] +  adj[j] + noun[k] + domain[d])
            }
        }
    }
}