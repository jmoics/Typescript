
// asi se importa namespaces.
/// <reference path="1_namespacesDemo.ts" />
import util = Utility.Payment; // importando el namespace anidado.

let paymentAmount = util.CalculateAmount(1200, 6); // invocando la función exportada en el namespace.
console.log(`Amount to be paid: ${paymentAmount}`);

let discount = Utility.MaxDiscountAllowed(6);
console.log(`Maximun discount allowed is: ${discount}`);

//Utility.privateFunc(); // error, invocar una función no exportada lo produce.

// el archivo donde el namespace es declarado y el archivo donde se utiliza el namespace deben ser compilados juntos. Es preferible además agrupar el output juntos en un solo archivo. Para esto podemos usar --output.
// tsc --outFile 1_namespacesExec.js 1_namespacesDemo.ts 1_namespacesImport.ts