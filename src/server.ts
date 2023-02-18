import  Express ,{Request,Response,NextFunction} from "express";

const app = Express();

// app.use('/handcheck',(req:Request, res:Response)=>{
//     const{ number,divider}=req.query;
//     if(!Number){
//         res.status(404).send(`la valeur de nombre a diviser est invalide`);
//     }
//     if(!divider || Number(divider)<=0){
//         res.status(404).send(`la valeur est inferieur`);
//     }
//     const somme = Number(number) / Number(divider);
//     res.status(200).send(`la division de ${number} / ${divider} est : ${somme}`);
// });
// app.use('/calcul',(req:Request, res:Response, next)=>{
//     const{opp,number1,number2}=req.query;
//     next();
    
//     function verifOPP(){
//         if(!number1 || !number2 || !opp){
//             res.status(404).send(`une valeur est manquante`);
//         }
//         if(opp=='DIV' && number2<=0){
//             res.status(404).send(`impossible d'effectuer une opperation de division...............`);
//         }

//     }

//     /////////////////////////////////////////////////////////////////////////////////
//     let addition;
//     let multiplication;
//     let soustraction;
//     let division;
//     switch (opp) {
//         case "ADD":
//             let addition = Number(number1) + Number(number2);
//           break;
//         case "DIV":
//             let division = Number(number1) / Number(number2);
//           break;
//         case "MULT":
//             let multiplication =Number(number1) * Number(number2);
//           break;
//         case "SUB":
//             let soustraction = Number(number1) - Number(number2);
//           break;
//         default:
//           console.log("Désolé, nous n'avons plus de " + opp + ".");
//       }
//       res.status(200).send(`l'opperation est : ${opp}  et  ${number1} ${opp} ${number2} est : ${opp}`);
// });




const validator = (req: Request, res: Response, next: NextFunction) => {
    const{opp,number1,number2}=req.query;
    // validation sur les paramètres
    // si tous les paramètres sont valides il faut passer au next function qui va faire le calcul
    if(!number1 || !number2 || !opp){
            res.status(404).send(`une valeur est manquante`);
        }
     if(opp=='DIV' && number2<=0){
            res.status(404).send(`impossible d'effectuer une opperation de division...............`);
        }
    }   

const calcul = (req: Request, res: Response, next: NextFunction) => {
    // faire le calcil et retourne le résultat
    const{opp,number1,number2}=req.query;
     let addition;
     let multiplication;
     let soustraction;
     let division;
     switch (opp) {
         case "ADD":
             let addition = Number(number1) + Number(number2);
           break;
         case "DIV":
             let division = Number(number1) / Number(number2);
           break;
         case "MULT":
             let multiplication =Number(number1) * Number(number2);
           break;
         case "SUB":
             let soustraction = Number(number1) - Number(number2);
           break;
         default:
           console.log("Désolé, nous n'avons plus de " + opp + ".");
       }
       res.status(200).send(`l'opperation est : ${opp}  et  ${number1} ${opp} ${number2} est : ${opp}`);
    }

app.use('/calcul', validator, calcul)

app.listen(9000,()=>{
    console.log('server est en marche en 9000');
});
