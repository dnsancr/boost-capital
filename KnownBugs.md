En ejercicio 1
El siguiente caso de prueba "esto es (un texto muy random [si lo es]) [etc]" la implementacion actual del programa
falla.

Resultado esperado "esto ES (]se OL is[ MODNAR yum OTXET nu) [CTE]"
Resultado recibido "esto ES ( MODNAR yum OTXET nu) [CTE]"

Esto es debido a que la subcadena "]se OL is[" la considera invalida y la ignora. Omitiendola asi del resultado final
