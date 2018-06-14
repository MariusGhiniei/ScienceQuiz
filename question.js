
var questions_algoritmielementari = [{
	"question": "Care dintre instructiunile de mai jos este corecta pentru a elimina ultima cifra a unui numar ?",
	"option1": "n=n%10;",
	"option2": "n=n-10;",
	"option3": "n=n/10;",
	"option4": "n/10;",
	"answer": "3"
}, {
	"question": "Cu cat se initializeaza minimul ?",
	"option1": "0",
	"option2": "Prima valoare",
	"option3": "999999",
	"option4": "Nu se initializeaza",
	"answer": "2"
}, {
	"question": "Instructiunea SWITCH poate fi inlocuita cu altceva ?",
	"option1": "Nu, nu se poate",
	"option2": "Inca nu s-a gasit o metoda cu care sa se inlocuiasca",
	"option3": "Da, se poate",
	"option4": "Probabil ca se poate, dar nu stiu eu cum",
	"answer": "3"
}, {
	"question": "Care dintre instructiunile de mai jos este corecta pentru a forma inversul unui numar ?",
	"option1": "inv=inv*10+n%10; n=n/10;",
	"option2": "inv=n/10; n=n%10",
	"option3": "inv=inv/10; n=n/10;",
	"option4": "inv=inv +(n%10)*10; n=n/10;",
	"answer": "1"
}, {
	"question": "Care sunt instructiunile fundamentale ?",
	"option1": "For, If, Break",
	"option2": "Switch, While",
	"option3": "For, If, Switch, While",
	"option4": "Break, While",
	"answer": "3"
}, {
	"question": "Ce instrcutiune se foloseste pentru a verifica daca un numar este impar ?",
	"option1": "if(x % 2 == 0)",
	"option2": "if(x / 2 == 0)",
	"option3": "if(x % 2 = 1)",
	"option4": "if(x % 2 == 1)",
	"answer": "4"
}, {
	"question": "Cu cat se initializeaza maximul ?",
	"option1": "0",
	"option2": "1",
	"option3": "9999999",
	"option4": "Nu se initializeaza",
	"answer": "1"
}, {
	"question": "Ce reprezinta operatorul relationar === ?",
	"option1": "Egaliatea in valoare a doua numere",
	"option2": "Egalitatea in tipul lor a doua numere",
	"option3": "Egalitatea intre valoare si tipul a doua numere",
	"option4": "Egalitate in tipul, dar nu si in valoare, a doua numere",
	"answer": "3"
}, {
	"question": "Ce valoare de mai jus este suporta de tipul int ?",
	"option1": "4.34",
	"option2": "-45.02 ",
	"option3": "3000000000",
	"option4": "23 ",
	"answer": "4"
}, {

	"question": "Ce fel de operator este || ?",
	"option1": "Aritmetic",
	"option2": "Relationar ",
	"option3": "Logic",
	"option4": "Este o instructiune",
	"answer": "3"
}];


var questions_vectori= [{
	"question": "Ce este un vector ?",
	"option1": "Un tablou",
	"option2": "O parte din memoria calculatorului",
	"option3": "Un tablou unidimensional",
	"option4": "Un tablou bidimensional",
	"answer": "3"
}, {
	"question": "Cu ce instrcutiune se parcurge un vector ?",
	"option1": "If",
	"option2": "For",
	"option3": "While",
	"option4": "Switch",
	"answer": "2"
}, {
	"question": "Putem interclasa mai mult de 2 vectori ?",
	"option1": "Nu, nu se poate",
	"option2": "Da, numai ca am folosi multa memorie",
	"option3": "Se poate, dar ar fi ineficient",
	"option4": "Nu cred ca se poate",
	"answer": "2"
}, {
	"question": "Cu ce se noteaza un vector ?",
	"option1": "v(n)",
	"option2": "v[n]",
	"option3": "v{n}",
	"option4": "v.n",
	"answer": "2"
}, {
	"question": "Care este a k valoare din vectorul v cu n elemente ?",
	"option1": "v[1]",
	"option2": "v[n-k]",
	"option3": "v[k]",
	"option4": "v[n]",
	"answer": "3"
}, {
	"question": "Avem un vector v cu n elemente, ce instructiune vom scrie pentru a verifica daca vectorul are un numar impar de elemente ?",
	"option1": "if(n%2 == 1)",
	"option2": "if(v[n]%2 == 1)",
	"option3": "if(v[i]%2 == 0)",
	"option4": "if(n%2 == 0)",
	"answer": "1"
}, {
	"question": "La examenul Bacalaureat avem voie sa folosim functia SWAP ?",
	"option1": "Da",
	"option2": "Da, de ce nu am avea voie",
	"option3": "Depinde de corector,daca ne scade sau nu",
	"option4": "Nu, nu avem voie",
	"answer": "4"
}, {
	"question": "Pentru a verifica ca un element al vectorului este par vom folosi: ",
	"option1": "if(v[i]%2 == 0)",
	"option2": "if(v[i]%2 == 1)",
	"option3": "if(v[i]%2 = 0)",
	"option4": "if(v[i]%2 = 1)",
	"answer": "1"
}, {
	"question": "Pentru a putea retine numere reale in vector cum il vom declara ?",
	"option1": "int v[101]",
	"option2": "float v[101]",
	"option3": "long long v[101]",
	"option4": "double double v[101];",
	"answer": "2"
}, {
	"question": "Dimensiunea maxima a unui vector trebuie sa fie constanta ?",
	"option1": "Da, fiind un numar natural",
	"option2": "Nu, trebuie sa fie constanta se poate schimba",
	"option3": "Dimensiunea maxima este prestabilita de calculator",
	"option4": "Nu cred",
	"answer": "1"
}];



var questions_matrice= [{
	"question": "Cum se noteaza o matrice a cu n linii si m coloane ?",
	"option1": "a[n][m]",
	"option2": "a(n)(m)",
	"option3": "a{n}{m};",
	"option4": "a.n.m",
	"answer": "1"
}, {
	"question": "Cu cat se initializeaza matricea cu 100 de elemente pentru a incepe numerotarea de la 1 ?",
	"option1": "a[100][100]",
	"option2": "a[(100)][(100)]",
	"option3": "a[101][101]",
	"option4": "a{101}{101}",
	"answer": "2"

}];




var questions_quizmare= [{
	"question": "Care este numărul total de atribuiri efectuate la executarea secvenţei de instrucţiuni alăturate? x=4; y=6; while (y==6) y=y+1; if (x==y) x=x+1; ",
	"option1": "4",
	"option2": "2",
	"option3": "3",
	"option4": "5",
	"answer": "3"

}];



var questions_botanica= [{
	"question": "Ce fel de organisme fac arte din botanica?",
	"option1": "eucariote pluricelulare",
	"option2": "eucariote unicelulare",
	"option3": "eucariote",
	"option4": "eucariote celulare",
	"answer": "1"
}, {
	"question": "Cum se reproduc organismele din botanica ?",
	"option1": "Prin oua",
	"option2": "asexuat",
	"option3": "hermafrodit",
	"option4": "Nu se reproduc",
	"answer": "2"
}];




