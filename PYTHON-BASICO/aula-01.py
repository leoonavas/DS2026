# mundo_plano = True
# if mundo_plano:
#     print("Cuidado para não cair na borda");

# No python, a identação é obrigatória, devido a não ter chaves ou ends encerrando um laço

largura = 10;
altura = 5;

resultado = altura * largura

print (resultado)



# Concatenando Strings:
nome = "Pedro"
sobrenome = "Dias"

# Método 1:
print("Nome completo dele é " + nome + " " + sobrenome);

# Método 2:

print(f"O nome completo dele é {nome} {sobrenome}") # Esse f antes das aspas, são para abrir as chamadas f-strings, que permitem outra
# forma de concatenação

print("Ela me disse \'oi\'") 
# Para colocar uma aspas ou meia aspas dentro de uma string, é necessário escapar elas entre \, tipo 'oi', fica \'oi\', com
# o \ antecedendo as aspas.


# Para fazer com que uma caractere que precede uma \ seja confundido como caractere especial, a string deve ser r"", que
# representa Raw Strings

print("1. " + "\nn") # Aqui ele quebra a linha e exibe o n isolado do um
print("2. " + r"\nn") # Aqui exibe tudo na mesma linha, inclusive o \nn que é exibido por completo