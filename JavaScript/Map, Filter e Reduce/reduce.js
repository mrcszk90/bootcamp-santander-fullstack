/* const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function somaNums(nums) {
   return nums.reduce(function(prev, current) {
        return prev + current;
    })
}

console.log(somaNums(nums));
 */

const lista = [
    {
        name: 'sabao em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 16
    },
    {
        name: 'toalha',
        preco: 7
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldoDisponivel);
};

console.log(calculaSaldo(saldoDisponivel,lista));