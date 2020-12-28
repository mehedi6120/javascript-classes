/* // regular expression 2
/[A-Z][0-9][A-Z]/
uporer expression ta kader sathe match korbe?
H2O;
AMI44TUMI;
kader sathe match korbe na?
OP3;

/[A-Z][0-9][A-Z]/ eita jei kotha \w ekoykotha
abar \W dile /[A-Z][0-9][A-Z]/ chara sob match korbe

\d er mane holo [0-9]
abar \D dile [0-9] bade sob match korbe


abar "Space" er jonno \s
\S dile "space"bad e shob match korbe


Abba 
/ab{2}a/
b ta 2 bar repeat hobe



abbbbbba 
/ab{2,5}/
ekhane minimum 2 ta b thakbe ar maximum 5 ta b thakbe


abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbba
/ab{2,}a/ minimum 2 ta b ar maximum joto ichha toto


{0,}  kono jinis thakle ekadhik thakte pare othoba nao thakte pare tar jonno * use korte hoy

{1,} kono jinis thakle ekta thakbe othoba ekadhik thakbe tar jonnoo + use korte hoy 

mehe?di "?" deoar mane holo seta thakteo pare abar nao thakte pare.



/se.[^xX]/
sea,See but not Sex
[^ erpor ja thakbe seta bad diye bakigula sob]


number validation
/01[35-9]\d{8}
 */