/* 

const newEmployees = (callback) => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log */
  /* const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator)); */

/* Exercício 2: */

function sorteio(betNumber, callback){
    const generatedNumber = Math.floor((Math.random() * 5) + 1);
    return callback(betNumber, generatedNumber);
}

const verificationNumber = (betNumber, generatedNumber)=> {
    if( betNumber === generatedNumber){
        return "Parabéns você ganhou";
    } else {
        return "Tente Novamente";
    }
};
console.log(sorteio(3, verificationNumber));

/* gabarito:

    function sorteio(betNumber, callback){
    const generatedNumber = Math.floor((Math.random() * 5) + 1);
    return callback(betNumber, generatedNumber)? 'Parabéns, você ganhou!': 'Tente de novo :(';
}

const verificationNumber = (betNumber, generatedNumber)=> betNumber === generatedNumber;
console.log(sorteio(3, verificationNumber)); */