# Capítulo 1:
# JavaScript - uma visão geral rápida

## Variáveis
As variáveis **armazenam dados** que podem ser **definidos**, **atualizados** e **recuperados** sempre que necessário. Os valores atribuídos a uma variável têm um tipo. Em JavaScript, os tipos disponíveis são: 
- number (número);
- string;
- boolean (booleano);
- function (função);
- object (objeto);

Também temos:
- undefined (indefinido);
- null (nulo);

junto com arrays, datas e expressões regulares.

Embora a linguagem JavaScript tenha diferentes tipos de variáveis disponíveis, ela **não é fortemente tipada** como C/C++, C# e Java. Em **linguagens fortemente tipadas**, devemos **definir o tipo da variável** em sua declaração (em Java, por exemplo, para declarar uma variável inteira, usamos **int num = 1;**).

Exemplos de uso de variáveis em JavaScript:

```javascript
var num = 4; // {1}
num = 26; // {2}
var price = 1.5; // {3}
var myName = 'Alison'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}
```
- Na linha {1}, temos um exemplo de como declarar uma variável em JavaScript (estamos declarando um número). Embora não seja necessário fazer a declaração com a palavra reservada var, especificá-la sempre que estivermos declarando uma nova variável é uma boa prática.
- Na linha {2}, atualizamos uma variável existente. A linguagem JavaScript não é fortemente tipada. Isso significa que podemos declarar uma variável, inicializá-la com um número e depois atualizá-la com uma string ou com qualquer outro tipo de dado. Atribuir um valor a uma variável cujo tipo seja diferente de seu tipo original também não é uma boa prática.
- Na linha {3}, declaramos igualmente um número, porém, dessa vez, é um número decimal de ponto flutuante.
- Na linha {4}, declaramos uma string.
- Na linha {5}, declaramos um booleano. 
- Na linha {6}, declaramos um valor null.
- Na linha {7}, declaramos uma variável undefined.

*Um valor null quer dizer sem valor, e undefined significa uma variável que foi declarada, mas que ainda não recebeu nenhum valor.*

O escopo se refere ao **local em que podemos acessar** a variável no algoritmo (também pode ser em uma função quando trabalhamos com escopos de função). As variáveis podem ser **locais** ou **globais**. Exemplo:

```javascript
var myVariable = 'global';
myOtherVariable = 'global';
function myFunction() { 
  var myVariable = 'local';
  return myVariable;
} 
function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
} 
console.log(myVariable); //{1}
console.log(myFunction()); //{2} 
console.log(myOtherVariable); //{3} 
console.log(myOtherFunction()); //{4} 
console.log(myOtherVariable); //{5}
```
- A linha {1} exibirá global porque estamos referenciando uma variável global.
- A linha {2} exibirá local porque declaramos a variável myVariable dentro da função myFunction como uma variável local, portanto o escopo está apenas no interior de myFunction.
- A linha {3} exibirá global porque estamos referenciando a variável global chamada myOtherVariable, inicializada na segunda linha do exemplo.
- A linha {4} exibirá local. Na função myOtherFunction, referenciamos a variável global myOtherVariable e lhe atribuímos o valor local, pois não declaramos a variável usando a palavra reservada var.
- A linha {5} exibirá local (pois alteramos o valor da variável em myOtherFunction).

*Em geral, a qualidade do código-fonte JavaScript é avaliada de acordo com o número de variáveis e funções globais (um número alto é ruim).*

## Operadores
A linguagem JavaScript tem operadores aritméticos, de atribuição, de comparação, lógicos, bit a bit (bitwise) e unários, entre outros.

1. Aritméticos:
    - ```+``` (Soma)
    - ```-``` (Subtração)
    - ```*``` (Multiplicação)
    - ```/``` (Divisão)
    - ```%``` (Modulo ou Resto)
    - ```++``` (Incremento)
    - ```--``` (Decremento)

2. Atribuição: 
    - ```=``` (Atribuição)
    - ```+=``` (Atribuição de soma)
    - ```-=``` (Atribuição de subtração)
    - ```*=``` (Atribuição de multiplicação)
    - ```/=``` (Atribuição de divisão)
    - ```%=``` (Atribuição de resto)

3. Comparação:
    - ```==``` (Igual a)
    - ```===``` (Semelhante ao anterior, mas leva em consideração o valor e o tipo)
    - ```!=``` (Diferente de)
    - ```>``` (Maior que)
    - ```>=``` (Maior ou igual a)
    - ```<``` (Menor que)
    - ```<=``` (Menor ou igual a)

4. Lógicos:
    - ```!``` (NOT ou Negação)
    - ```&&``` (AND ou E)
    - ```||``` (OR, OU)

5. A linguagem JavaScript também tem suporte para **operadores bit a bit (bitwise):**
    - ```&``` (E)
    - ```|``` (Ou)
    - ```~``` (Negação) 
    - ```^``` (Ou exclusivo, **Xor**)
    - ```<<``` (Deslocamento para a esquerda, **left shift**)
    - ```>>``` (Deslocamento para a direita, **right shift**)

A linguagem JavaScript também aceita o **operador delete**, que apaga uma propriedade de um objeto:

```javascript
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); //exibe Object {name: "John"}
```

O JavaScript tem também o operador typeof, onde devolve o tipo da variável ou expressão.

***Exemplos de uso dos operadores estão no arquivo operadores.js***

## Estruturas de controle
### Instruções condicionais:
1. **if...else**

**If** significa "Se" e **Else** significa "Senão". Essa instrução pode ser usada quando se quer executar um bloco de código somente quando a condição for **true**:
```javascript
    var num = 1;
    if(num == 1) {
      console.log("num é igual a 1");
    }
```
Como também pode ser usada pra executar outro bloco de código caso a condição seja **false**:
```javascript
    var num = 0;
    if(num == 1) {
      console.log("num é igual a 1");
    } else {
      console.log("num não é igual a 1");
    }
```
A instrução **if...else** também pode ser representada por um **operador ternário**. Por exemplo:
```javascript
    var num = 1;
    var trueFalse = num === 1 ? true : false;
    console.log(trueFalse);
```

2. **switch**

Se a condição que estivermos avaliando for a mesma que a anterior (porém a comparação é feita com valores diferentes), podemos usar a instrução switch:
```javascript
    var month = 5;
    switch (month) { 
      case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March');
    }
```

### Laços:
1. **for**

O laço for é exatamente igual ao de C e de Java. É formado de um contador que recebe um valor numérico; a condição, onde a variável é comparada com outro valor (o script dentro do laço for será executado enquanto essa condição for verdadeira) e, por fim, o valor do contador é incrementado ou decrementado.
```javascript
    for (var i = 0; i < 10; i++) { 
      console.log(i);
    }
```
No exemplo acima o contador i tem valor inicial 0, e enquanto o valor de i for menor que 10 é executado a instrução dentro do laço, depois o contador i é incrementado e isso tudo se repete até a condição ser falsa (i com valor 10).

2. **while**

O bloco de código dentro do laço while será executado enquanto a condição for verdadeira.
```javascript
    var i = 0;
    while (i < 10) { 
      console.log(i);
      i++;
    }
```

2. **do...while**

Ele é muito parecido com o laço while. A diferença é que no while a condição é avaliada antes da execução da instrução, enquanto no do...while, ela é avaliada depois da execução da instrução. Ou seja, o do..while ainda pode executar uma instrução caso a condição seja falsa.
```javascript
    var i = 0;
    do { 
      console.log(i);
      i++;
    } while (i < 10);
```

## Funções
Uma função é como uma receita. Ela é um conjunto de instruções que realiza uma tarefa específica. Por exemplo, como uma receita pode ter ingredientes e passos, uma função tem parâmetros (como os ingredientes) e um bloco de código (os passos) que são executados quando a função é chamada. Uma vez definida, uma função pode ser chamada várias vezes dentro do código, tornando-o mais organizado e fácil de entender.
```javascript
    function sayHello() { 
      console.log('Hello!');
    }
```
Chamando a função:
```javascript
    sayHello();
```
Outro exemplo de funcão mas com argumento (Argumentos são variáveis com as quais se supõe que a função fará algo):
```javascript
    function output(text) { 
      console.log(text);
    } 
    output('Hello!');
```
Função que retorna um valor:
```javascript
    function sum(num1, num2) {
      return num1 + num2;
    }
    console.log(sum(1, 2))
```

## Programação orientada a objetos (POO) em Javascript

Objetos JavaScript são **coleções bem simples de pares nome-valor**. Há duas maneiras de criar um objeto simples em JavaScript. Uma é esta:
```javascript
var obj = new Object();
```
A outra é assim:
```javascript
var obj = {};
```
Também pode-se criar um objeto completo dessa forma:
```javascript
obj = { 
  name: { 
    first: 'Gandalf', 
    last: 'the Grey' 
  },
  address: 'Middle Earth' 
};
```
Como podemos ver, para declarar um objeto JavaScript, pares **[chave, valor]** são usados, no quais a chave pode ser considerada um **atributo** do objeto, e o valor é o **valor da propriedade**.

Em POO, um objeto é uma instância de uma classe. **Uma classe define as características do objeto**.
Eis o modo como podemos declarar uma **classe (construtor)** que representa um livro:
```javascript
function Book(title, pages, isbn) { 
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}
```
Para **instanciar** essa classe, podemos usar o código a seguir:
```javascript
var book = new Book('title', 'pag', 'isbn');

//Podemos acessar e atualizar suas propriedades:
console.log(book.title); // exibe o título do livro 
book.title = 'new title'; // atualiza o valor do título do livro 
console.log(book.title); // exibe o valor atualizado
```
E uma classe também pode conter funções (em geral, também são chamadas de **métodos**).