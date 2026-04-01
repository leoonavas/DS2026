using System;

Console.WriteLine("Oi");
int idade = 10;
Console.WriteLine("Idade: "+ idade);

void PodeVotar(int num)
{
    if (num <= 18 && num >= 16)
    {
        Console.WriteLine("Seu voto é opcional.");
    } else if (num > 18)
    {
        Console.WriteLine("Seu voto é obrigatório");
    } else
    {
        Console.WriteLine("Você não pode votar.");
    };
};

PodeVotar(17);

void TestandoComparadores()
{
    bool Verdadeiro = false;
    if (!Verdadeiro) // Basicamente esse ! compara com o valor inverso, se o valor de
    // Verdadeiro for false, com ! ele para de comparar como se fosse true para se for false.
    // Verdadeiro = false; if (!Verdadeiro) {} - Basicamente, o compilador lê isso
    // como: Se o valor dele for o oposto do valor original, sem alterar o valor;
    {
        Console.WriteLine("Verdadeiro");
    }
}
TestandoComparadores(); 

// As funções em C#, pedem ao invés da chamada 'function', o tipo de retorno esperado.
// Exemplo:
bool VotoObrigatorio(int value /* A mesma coisa aqui, ele pede o tipo do valor caso
nunca foi chamado.*/)
{
    if (value > 18 && value < 65)
    {
        return true;
    } else
    {
        return false; // O return sempre para de executar o que está abaixo;
    }
}
bool VOTO_OBRIGATORIO = VotoObrigatorio(20);
Console.WriteLine("Voto é obrigatorio? R: " + VOTO_OBRIGATORIO);
// Retorno esperado dela: true ou false, pois a função só retorna um desses;

void Print(string text)
{
    Console.WriteLine(text);
}

// Operadores:

int SOMA = (10 + 10);
Console.WriteLine(SOMA);

int MULTIPLICAR = (10 * 10);
Console.WriteLine(MULTIPLICAR);

int DIVISAO = (100 / 10);
Console.WriteLine(DIVISAO);

int SUBTRAIR = (100 - 10);
Console.WriteLine(SUBTRAIR);

// Usando FOR:
for (int i = 0; i <= 10; i++)
{
    Console.WriteLine(i);
}

// Usando switch:
int VALOR_CASE = 10;
switch (VALOR_CASE)
{
    case 1:
    case 2:
    case 3:
    case 10:
        Console.WriteLine("Valor certo");
    break;
    default:
        Console.WriteLine("Valor errado");
    break;
}


